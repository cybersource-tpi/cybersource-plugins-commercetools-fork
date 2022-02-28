# Tokenization

Commerectools provides the facility of customization of the `customer` resource. A customer subscription can be created and saved when you use the CreditCard payment method(if provided).

The Customer update API extension will channel the request for Customer token updation and deletion request coming from the front-end.

Use [API Extension Setup](API-Extension-Setup.md) guide for customizing the customer resource for saving tokens.

The customer saved tokens can be viewed in:

Merchant Centre → Customers → Customer list
→ Custom Fields

## Update Card Details

1.  Navigate to the MyCards section, where you will see all the saved tokens for a customer

2.  Click on update card button available for the token which you are going to update

3.  Update the customer with the new valid expiry date and month for the card

        fields:{
           isv_tokens:[
               {
                   alias:<value>,
                   value:<value>,
                   paymentToken:<value>,
                   instrumentIdentifier:<value>,
                   cardType:<value>,
                   cardName:<value>,
                   cardNumber:<value>,
                   cardExpiryMonth:<value>,
                   cardExpiryYear:<value>,
                   oldExpiryMonth:<value>,
                   oldExpiryYear:<value>,
                   flag:<value>,
               }
           ]
        }

| Property             | Value                                                   | Required  | Notes                                                                              |
| -------------------- | ------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------- |
| alias                | Customer token alias                                    | See notes | This is the value which will represent a particular token data in general          |
| value                | Customer token value/Subscription value                 | See notes | This is the subscription which the customer will create                            |
| paymentToken         | Customer payment token                                  | See notes | This is the subscription which the customer will create                            |
| instrumentIdentifier | Instrument identifier number for customer token         | See notes | Instrument identifier number returned by Cybersource while creating a subscription |
| cardType             | Card type                                               | See notes | This value will be given by Cybersource during Subscription creation               |
| cardName             | Card alias                                              | See notes | This value will be given by Cybersource during Subscription creation               |
| cardNumber           | Card number                                             | See notes | This value will be given by Cybersource during Subscription creation               |
| cardExpiryMonth      | Card expiry month                                       | See notes | This might be the new expiry month value that have to be updated for the token     |
| cardExpiryYear       | Card expiry year                                        | See notes | Year might valid, otherwise token updation will fail                               |
| oldExpiryMonth       | Card old expiry month                                   | See notes | This value will be the old expiry month that have to be updated for the token      |
| oldExpiryYear        | Card old expiry year                                    | See notes | This value will be the old expiry year that have to be updated for the token       |
| flag                 | String value which indicates the action to be performed | See notes | The value might be 'update'                                                        |

4. Make a call to Cybersource for updating the existing token and send back the response to the Commercetools if the token is updated

The response sending to Commercetools might be having updated value for the following fields

| Property        | Value                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- |
| value           | The updated token value from Cybersource updateToken Response                                                              |
| paymentToken    | The updated token value from Cybersource updateToken Response                                                              |
| cardExpiryMonth | The updated expiry month for token from Cybersource updateToken Response                                                   |
| cardExpiryYear  | The updated expiry year for token from Cybersource updateToken Response                                                    |
| flag            | Will be a string value :`updated` if the token updation is successful and `update` if the token updation is not successful |

## Delete Card

1.  Navigate to the MyCards section, where you will see all the saved tokens for a customer

2.  Click on delete card button available for the token which you are going to delete

3.  Update the customer by populating the following data

        fields:{
           isv_tokens:[
               {
                   alias:<value>,
                   value:<value>,
                   paymentToken:<value>,
                   instrumentIdentifier:<value>,
                   cardType:<value>,
                   cardName:<value>,
                   cardNumber:<value>,
                   cardExpiryMonth:<value>,
                   cardExpiryYear:<value>,
                   flag:<value>,
               }
           ]
        }

| Property             | Value                                                   | Required  | Notes                                                                              |
| -------------------- | ------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------- |
| alias                | Customer token alias                                    | See notes | This is the value which will represent a particular token data in general          |
| value                | Customer token value/Subscription value                 | See notes | This is the subscription which the customer will create                            |
| paymentToken         | Customer payment token                                  | See notes | This is the subscription which the customer will create                            |
| instrumentIdentifier | Instrument identifier number for customer token         | See notes | Instrument identifier number returned by Cybersource while creating a subscription |
| cardType             | Card type                                               | See notes | This value will be given by Cybersource during Subscription creation               |
| cardName             | Card Name                                               | See notes | This value will be given by Cybersource during Subscription creation               |
| cardNumber           | Card Number                                             | See notes | This value will be given by Cybersource during Subscription creation               |
| cardExpiryMonth      | Card Expiry Month                                       | See notes | This value will be the expiry month given while saving the token                   |
| cardExpiryYear       | Card Expiry Year                                        | See notes | This value will be the expiry year given while saving the token                    |
| flag                 | String value which indicates the action to be performed | See notes | The value might be 'delete'                                                        |

4. Make a request to Cybersource for deleting the token and update the customer resource back to Commercetools, by removing the particular token that you intended to delete if the response httpCode of Cybersource is 204. If there is an error from Cybersource end for deleting a token, then delete the `flag` element of the token array and update the Customer
