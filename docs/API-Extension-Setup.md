# API Extension Setup

- [Configuration](#Configuration)
  - [Environment Properties](#EnvironmentProperties)
- [Deployment](#Deployment)

# <a name="Configuration"></a>Configuration

There are a number of configuration variables that need to be defined before running the plugin. These can be set as environment variables inside the .env file present in the root directory of the plugin.

For multiple environments you should use unique values per environment.

## <a name="EnvironmentProperties"></a>Environment Properties

Variables that begin with 'CT' prefix are Commercetools project specific properties.

| Environment variable                   | Value                                                                                 | Notes                                                                              |
| -------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| ISV_PAYMENT_MERCHANT_ID                | Your Cybersource merchant id                                                          | Provided by Cybersource                                                            |
| ISV_PAYMENT_MERCHANT_KEY_ID            | Id of a Cybersource shared secret key to be used for HTTP Signature authentication    | Created in <a href="Key-Creation.md">Key Creation</a>                              |
| ISV_PAYMENT_MERCHANT_SECRET_KEY        | Value of a Cybersource shared secret key to be used for HTTP Signature authentication | Created in <a href="Key-Creation.md">Key Creation</a>                              |
| ISV_PAYMENT_RUN_ENVIRONMENT            | TEST or PRODUCTION                                                                    | Property for running the project in TEST or PRODUCTION environment                 |
| ISV_PAYMENT_VERIFICATION_KEY           | Used to check Flex tokens for tampering                                               |
| ISV_PAYMENT_DECISION_MANAGER           | Flag for enabling and disabling Decision Manager for Authorization                    | Boolean value                                                                      |
| ISV_PAYMENT_TARGET_ORIGIN              | Base URL where your frontend will be accessible                                       |                                                                                    |
| ISV_PAYMENT_3DS_RETURN_URL             | URL that the issuing bank will redirect to the customer for payer Authentication      | Used only if payment.paymentMethodInfo.method == creditCardWithPayerAuthentication |
| ISV_PAYMENT_APPLE_PAY_MERCHANT_ID      | Your Apple Pay merchant id                                                            | Provided by Cybersource                                                            |
| ISV_PAYMENT_APPLE_PAY_CERTIFICATE_PATH | Path where the Apple Pay certificate is stored                                        | Used only if payment.paymentMethodInfo.method == applePay                          |
| ISV_PAYMENT_APPLE_PAY_KEY_PATH         | Path where the Apple Pay key is stored                                                | Used only if payment.paymentMethodInfo.method == applePay                          |
| ISV_PAYMENT_DECISION_SYNC              | Flag for enabling and disabling Decision sync                                         | Boolean value                                                                      |
| ISV_PAYMENT_RUN_SYNC                   | Flag for enabling and disabling Run sync                                              | Boolean value                                                                      |
| CT_PROJECT_KEY                         | Project key for your Commercetools project                                            | Created in <a href="Key-Creation.md">Key Creation</a>                              |
| CT_CLIENT_ID                           | Client id of your Commercetools Payment API key                                       | Created in <a href="Key-Creation.md">Key Creation</a>                              |
| CT_CLIENT_SECRET                       | Client secret of your Commercetools Payment API key                                   | Created in <a href="Key-Creation.md">Key Creation</a>                              |
| CT_AUTH_HOST                           | Commercetools auth server URL                                                         | Created in <a href="Key-Creation.md">Key Creation</a>                              |
| CT_API_HOST                            | Commercetools API server URL                                                          | Created in <a href="Key-Creation.md">Key Creation</a>                              |
| CONFIG_PORT                            | Port to listen on for HTTP requests                                                   | Created in <a href="Key-Creation.md">Key Creation</a>                              |

# <a name="Deployment"></a>Deployment

The Commercetools-Cybersource plugin is a typescript project which is built using cybersource-rest-client npm package and other several node packages.

## Example deployment steps

The steps involved in deploying the Commercetools - Cybersource plugin in development environment are the following:

- Populate the .env file with the required data by referring to the values in above given table
- Navigate to the root directory and run the following command to include the npm dependencies

      npm install

> **_NOTE:_** This is not necessary if the dependencies are already availabe in <b>node_modules</b> repository

- Run the following script to build the changes & running the plugin

      npm run start

> **_NOTE:_** It is necessary to build the entire plugin. Whenever there is a change and that need to be reflected, run the following script for building the application

    npm run build