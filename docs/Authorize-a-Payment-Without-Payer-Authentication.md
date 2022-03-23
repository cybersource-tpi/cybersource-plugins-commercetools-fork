# Authorize a Payment (Without Payer Authentication)

Authorization of a payment is triggered by adding an initial transaction to a Commercetools payment resource. Before this can be done, the payment must be populated with the amount to authorize, a token representing the payment card and the billing address associated with the card.

## Credit Card without Payer Authentication Authorization Sequence Diagram

![Authorization Flow](images/Authorization-Flow-CreditCard.svg)

## Details

1.  Prepare your cart

    a. Ensure your cart locale is set

    b. Ensure the cart billing and shipping addresses are set. The default mapping of Commercetools address fields to Cybersource fields is as follows

| Commercetools address       | Cybersource shipping fields | Cybersource billing fields | Notes                                                                                                                |
| --------------------------- | --------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| firstName                   | shipTo_firstName            | billTo_firstName           |                                                                                                                      |
| lastName                    | shipTo_lastName             | billTo_lastName            |                                                                                                                      |
| streetNumber and streetName | shipTo_address1             | billTo_address1            | If both values populated they are concatenated together with a space between. Otherwise streetName is used by itself |
| city                        | shipTo_city                 | billTo_city                |                                                                                                                      |
| postalCode                  | shipTo_postalCode           | billTo_postalCode          |                                                                                                                      |
| region                      | shipTo_state                | billTo_state               |                                                                                                                      |
| country                     | shipTo_country              | billTo_country             |                                                                                                                      |
| email                       | shipTo_email                | billTo_email               |                                                                                                                      |

2.  Tokenize credit card details using Cybersource Flex

    a. Retrieve the Flex capture context: Create a Commercetools payment (https://docs.commercetools.com/http-api-projects-payments) and populate the following

| Property                           | Value                               | Required  | Notes                                                                                                                                                                                                                                        |
| ---------------------------------- | ----------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customer                           | Reference to Commercetools customer | See notes | Required for non-guest checkout. If using MyPayments API this will automatically be set to the logged in customer. One of customer or anonymousId must be populated                                                                          |
| anonymousId                        | Id for tracking guest checkout      | See notes | Required for guest checkout. If using MyPayments API this will automatically be set. One of customer or anonymousId must be populated                                                                                                        |
| paymentMethodInfo.paymentInterface | cybersource                         | Yes       |                                                          |
| paymentMethodInfo.method           | creditCard                          | Yes       |  |

The response wil have the `isv_tokenCaptureContextSignature` and `isv_tokenVerificationContext` custom fields which will load Cybersource Flex Microform.

3.  Use the Flex Microform 0.11 to tokenize card details. See <https://github.com/CyberSource/cybersource-flex-samples-node> for an example of how to use the captureContext obtained above and the Flex Microform JS to tokenize a credit card.

    This step can be skipped when using a saved token

4.  Add the payment to the cart

5.  Update a Commercetools payment (<https://docs.commercetools.com/http-api-projects-payments>) and populate the following

| Property                              | Value                          | Required  | Notes                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------- | ------------------------------ | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| custom.fields.isv_token               | Cybersource flex token         | See notes | This is the token parameter passed into the callback for the microform.createToken call <br><br> Required when not using a saved token                                                                                                                                                                                                 |
| custom.fields.isv_tokenAlias          | Alias for saved token          | No        | When this is specified the token will be saved as a subscription for later use                                                                                                                                                                                                                                                         |
| custom.fields.isv_savedToken          | Saved token value              | No        | Required when paying with a saved token                                                                                                                                                                                                                                                                                                |
| custom.fields.isv_maskedPan           | Masked credit card number      | No        | Can be obtained from the token parameter passed into the callback for the microform.createToken call. The token is a JWT which when decoded has a data.number field containing the masked card number. <br><br> Not required by extension but can be used for display                                                                  |
| custom.fields.isv_cardType            | Credit card type               | No        | For display only                                                                                                                                                                                                                                                                                                                       |
| custom.fields.isv_cardExpiryMonth     | Card expiry month              | No        | For display only                                                                                                                                                                                                                                                                                                                       |
| custom.fields.isv_cardExpiryYear      | Card expiry year               | No        | For display only                                                                                                                                                                                                                                                                                                                       |
| custom.fields.isv_acceptHeader        | Accept Header for the browser  | Yes       | Populated from client-side libraries                                                                                                                                                                                                                                                                                                   |
| custom.fields.isv_userAgentHeader     | User agent header              | Yes       | Populated from client-side libraries                                                                                                                                                                                                                                                                                                   |
| custom.fields.isv_deviceFingerprintId | Customer device fingerprint id | Yes       | It must be unique for each merchant Id. You can use any string that you are already generating, such as an order number or web session Id. However, do not use the same uppercase and lowercase letters to indicate different session Ids. Replace sessionId with the unique Id generated in the URL given. Include the script "https://h.online-metrix.net/fp/tags.js?org_id={{org Id}}&session_id={{merchant Id}}{{session Id}}". Replace the below data {{org Id}} - To obtain this value, contact your CyberSource representative and specify to them whether it is for testing or production. {{merchant Id}} - Your unique CyberSource merchant Id. {{session Id}} - Value of unique Id generated above |
| custom.fields.isv_customerIpAddress   | Customer IP address            | No        | Populated from client-side libraries                                                                                                                                                                                                                                                                                                   |

Also see [Decision Manager](Decision-Manager.md) for additional fields to be populated if you are using Decision Manager

6.  Add a transaction to the payment with the following values populated

| Property | Value               | Notes                                 |
| -------- | ------------------- | ------------------------------------- |
| type     | Authorization       |                                       |
| state    | Initial             |                                       |
| amount   | Amount to authorize | Should match amountPlanned on payment |

7.  Verify the payment state

    a. If the authorization was successful the transaction state will have been updated to **Success**

    b. See [Overview\#Errorhandling](Overview.md#Errorhandling) for handling errors or failures

8.  Convey the payment result to the customer

## Stored values

When a token is saved as a subscription the saved token value will be returned as a custom property on the payment called isv_savedToken

See [Commercetools Setup](Commercetools-Setup.md) for more details on the individual fields.
