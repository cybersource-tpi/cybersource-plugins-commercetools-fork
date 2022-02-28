# Key Creation

- [Commercetools](#Commercetools)
  - [Cybersource Plugin API Key](#CybersourcePLuginAPIKeys)
  - [Frontend API Key](#FrontendAPIKey)
  - [API Key for Custom data](#APIKeysforCustomData)
- [Cybersource](#Cybersource)
  - [REST Shared Secret](#RESTSharedSecret)

# <a name="Commercetools"></a>Commercetools

## <a name="CybersourcePLuginAPIKeys"></a>Cybersource Plugin API Keys

The API Extension and the Synchronization Service require an API key which will be used throughout the payments process. The scopes required for this API key are:

<table>
<thead>
<tr class="header">
<th>Scope</th>
<th>Reason</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>manage_payments</td>
<td><p>This is used for adding and updating transactions during synchronization process</p></td>
</tr>
<tr class="even">
<td>manage_orders</td>
<td><p>This is used for:</p>
<ul>
<li>Updating the cart with Billing and Shipping addresses while using Visa Click to Pay</li>
<li>Extracting line item data from the cart to send while using Decision Manager</li>
</ul></td>
</tr>
<tr class="odd">
<td>view_types</td>
<td>This is used to get the id of the custom payment and payment interface interaction types on API Extension startup</td>
</tr>
<tr class="even">
<td>view_customer</td>
<td>This is used for viewing the customer created and dealing with their custom data</td>
</tr>
<tr class="odd">
<td>manage_customers</td>
<td>This is used for managing the customer. It is required for creating and updating the customer </td>
</tr>
</tbody>
</table>

## <a name="FrontendAPIKey"></a>Frontend API Key

To be used for frontend applications in order to create and manage payments and carts for customers. The scopes for the API key used here should be limited to the 'My' Commercetools APIs to limit access a client-side application has to the data in Commercetools.

| Scope                   | Reason                                                                                         |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| view_published_products | Required to add items into the cart                                                            |
| view_orders             | Required to view orders                                                                        |
| view_categories         | Required to view product categoriesorders                                                      |
| manage_customers        | Required to update or delete saved cards categoriesorders                                      |
| manage_my_payments      | To allow payments to be created in Commercetools to initiate the payment flow with CyberSource |
| manage_my_orders        | Adding Payments to an Order                                                                    |
| manage_my_profile       | Access to the current customers profile so it can be associated with the Payment and Order     |
| create_anonymous_token  | (optional) If you are using the key to control the customers session                           |

## <a name="APIKeysforCustomData"></a>API Keys for Custom Data

# <a name="Cybersource"></a>Cybersource

## <a name="RESTSharedSecret"></a>REST Shared Secret

Flex token generation uses a shared secret to generate one-time keys to be used when encrypting the user's credit card details on the client side and HTTP Signature authentication for Cybersource REST API services. Set up a secret as per [this guide](https://developer.cybersource.com/library/documentation/dev_guides/REST_API/Getting_Started/Getting_Started_REST_API.pdf)<span> </span>and store the values safely. These should be provided in the API Extension's application.yaml as described in the [API Extension Setup](API-Extension-Setup.md) page.