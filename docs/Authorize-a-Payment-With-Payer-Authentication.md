# Authorize a Payment (With Payer Authentication)

To authorize a payment with 3DS functionality, a payment should be created with the amount to authorize, a token representing the payment card and the billing address associated with the card.

A check will be made during payment updation to see if the card is enrolled in 3DS and if authentication is required. If authentication is required, the created payment will contain data required to continue the authentication process.

After authentication is complete, authorization of the payment can then be triggered by adding an initial transaction to the payment.

## Credit Card Authorization Sequence Diagram

![Authorization flow with payer authentication](images/Authorization-Flow-3ds.svg)

## Details

1.  Prepare your cart

    a. Ensure the cart locale is set

    b. Ensure the cart billing and shipping addresses are set. The
    default mapping of Commercetools address fields to Cybersource
    fields is as follows. If you require a different mapping this
    can be customized

    | Commercetools address       | Cybersource shipping fields | Cybersource billing fields | Notes                                                                                                                |
    | --------------------------- | --------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
    | firstName                   | shipTo_firstName            | billTo_firstName           |                                                                                                                      |
    | lastName                    | shipTo_lastName             | billTo_lastName            |                                                                                                                      |
    | streetNumber and streetName | shipTo_address1             | billTo_address1            | If both values populated they are concatenated together with a space between. Otherwise streetName is used by itself |
    | city                        | shipTo_city                 | billTo_city                |                                                                                                                      |
    | postalCode                  | shipTo_postalCode           | billTo_postalCode          |                                                                                                                      |
    | region                      | shipTo_state                | billTo_state               |                                                                                                                      |
    | country                     | shipTo_country              | billTo_country             |                                                                                                                      |
    | email                       | shipTo_email                | billTo_email               |                                                                                                                      |

2.  Tokenise credit card details using Cybersource Flex

    a. Retrieve the Flex capture context: Create a Commercetools payment (<https://docs.commercetools.com/http-api-projects-payments>) and populate the following

| Property                           | Value                               | Required  | Notes                                                                                                                                                                                                                                        |
| ---------------------------------- | ----------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customer                           | Reference to Commercetools customer | See notes | Required for non-guest checkout. If using MyPayments API this will automatically be set to the logged in customer. One of customer or anonymousId must be populated                                                                          |
| anonymousId                        | Id for tracking guest checkout      | See notes | Required for guest checkout. If using MyPayments API this will automatically be set. One of customer or anonymousId must be populated                                                                                                        |
| paymentMethodInfo.paymentInterface | cybersource                         | Yes       | Required for guest checkout. If using MyPayments API this will automatically be set to the session id of the anonymous oauth token. One of customer or anonymousId must be populated                                                         |
| paymentMethodInfo.method           | creditCardWithPayerAuthentication   | Yes       | The plugin is set up to support payments with and without payer authentication and the method is used to determine which is being use Typically an implementation would choose one or the other and the method name may be different to this |

The response should have the `isv_tokenCaptureContextSignature` and `isv_tokenVerificationContext` custom fields which will load Cybersource Flex Microform.

3.  Use the Flex Microform 0.11 to tokenize card details. See <https://github.com/CyberSource/cybersource-flex-samples-node> for an example of how to use the captureContext obtained above and the Flex Microform JS to tokenize a credit card.

    This step can be skipped when using a saved token

4.  Add the payment to the cart

5.  Update a Commercetools payment (<https://docs.commercetools.com/http-api-projects-payments>) and populate the following

    a. Also see [Decision Manager](Decision-Manager.md) for additional fields to populate if you are using Decision Manager

    b. When processing the payment creation the extension will do an Payer Setup call to get reference_id for Digital Wallets to use in place of BIN number in Cardinal

| Property                          | Value                                   | Required  | Notes                                                                                                                                                                                                                                                                 |
| --------------------------------- | --------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| custom.fields.isv_token           | Cybersource flex token                  | See notes | This is the token parameter passed into the callback for the microform.createToken call <br><br> Required when not using a saved token                                                                                                                                |
| custom.fields.isv_tokenAlias      | Alias for saved token                   | No        | When this is specified the token will be saved as a subscription for later use                                                                                                                                                                                        |
| custom.fields.isv_savedToken      | Saved token value                       | No        | Required when paying with a saved token                                                                                                                                                                                                                               |
| custom.fields.isv_maskedPan       | Masked credit card number               | No        | Can be obtained from the token parameter passed into the callback for the microform.createToken call. The token is a JWT which when decoded has a data.number field containing the masked card number. <br><br> Not required by extension but can be used for display |
| custom.fields.isv_cardType        | Credit card type                        | No        | For display only                                                                                                                                                                                                                                                      |
| custom.fields.isv_cardExpiryMonth | Card expiry month                       | No        | For display only                                                                                                                                                                                                                                                      |
| custom.fields.isv_cardExpiryYear  | Card expiry year                        | No        | For display only                                                                                                                                                                                                                                                      |
| custom.fields.isv_acceptHeader    | Accept header from Customer browser     | Yes       | Used by 3DS process, populated from client-side libraries                                                                                                                                                                                                             |
| custom.fields.isv_userAgentHeader | User agent header from Customer browser | Yes       | Used by 3DS process, populated from client-side libraries                                                                                                                                                                                                             |

6.  Initialise Payer Authentication Setup with the request JWT by using the field `isv_token` or `isv_saved_token`(if exists)

        jtiToken = jwtDecode(payment.custom.fields.isv_token);
        var tokenInformation = new restApi.Riskv1authenticationsetupsTokenInformation();
        tokenInformation.transientToken = jtiToken.jti;
        requestObj.tokenInformation = tokenInformation;

7.  Wait for event to return back the following fields. See [3DSecure Setup](3D-Secure-Setup.md) for details of the
    one-time setup for this

        accessToken
        referenceId
        deviceDataCollectionURL

8.  After completing the Setup event, initialize the Enrolment Check by populating the following fields to the payment

| Property                                  | Value                                      | Required  | Notes                                                                                                                                                    |
| ----------------------------------------- | ------------------------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| custom.fields.isv_deviceDataCollectionUrl | Device Data Collection URL for 3DS         | See notes | This is the `deviceDataCollectionURL` parameter obtained from the Payer Authentication SetUp call and passed into the request object for Enrolment Check |
| custom.fields.isv_cardinalReferenceId     | Cardinal Reference Id for 3DS              | See notes | This is the `referenceId` parameter obtained from the Payer Authentication SetUp call and passed into the request object for Enrolment Check             |
| custom.fields.isv_requestJwt              | Request JWT for payer auth enrolment check | See notes | This is the `accessToken` parameter obtained from the Payer Authentication SetUp call and passed into the request object for Enrolment Check             |

9. Wait for the event to return back the following fields

   authenticationTransactionId

   stepUpURL

   accessToken

10. Check the value of the isv_payerAuthenticationRequired field on the
    created payment. If the value is true, perform the following steps

    submit the stepup form buy using the `stepUpURL` & `accessToken`

    a. The payer authentication window will be displayed and when the user completes the process, the user is redirected back to the consumerAuthenticationInformation.returnUrl within the iframe.

    b. Update the commerce tools payment to set the value of custom.fields.isv_responseJwt to the value extracted from the Cardinal response

11. Add a transaction to the payment with the following values populated

    | Property | Value               | Notes                                 |
    | -------- | ------------------- | ------------------------------------- |
    | type     | Authorization       |                                       |
    | state    | Initial             |                                       |
    | amount   | Amount to authorise | Should match amountPlanned on payment |

12. Verify the payment state

    a. If the authorisation was successful the transaction state will have been updated to **Success**

    b. See [Overview\#Errorhandling](Overview.md#Errorhandling) for handling errors or failures

13. Convey the payment result to the customer. If this is the only/final payment for this order you can transition your Commercetools cart to an order at this point

## Stored values

The following values are stored within commerce tools to allow later
verification that the payer was authenticated correctly

- Responses to the enrolment check are stored on a payment interface interaction with a type key of `isv_payments_payer_authentication_enrolment_check`

- Responses to the authentication validation are stored on a payment interface interaction with a type key of `isv_payments_payer_authentication_validate_result`

- The request and response Cardinal JWTs are stored a custom properties on the payment

- The paReq and acsUrl values are stored a custom properties on the payment

When a token is saved as a subscription the saved token value will be returned as a custom property on the payment called isv_savedToken

See [Commercetools Setup](Commercetools-Setup.md) for more details on the individual fields.

## Further reading

- [Cybersource Payer Authentication documentation](https://docs.cybersource.com/content/dam/new-documentation/documentation/en/fraud-management/payer-auth/rest/payer-auth-rest.pdf)