/* eslint-disable import/order */
//import {payment} from '../const/PaymentAuthorizationServiceConst'
import googlePay from '../JSON/googlePay.json';
import applePay from '../JSON/applePay.json';
import creditCard from '../JSON/creditCard.json';
import cpay from '../JSON/clickToPay.json';
import unit from '../JSON/unit.json';
import updateToken from '../JSON/updateToken.json';
import deleteToken from '../JSON/deleteToken.json';
export const googlePayResponeUpdatePaymentObj = 
{
    "id":"44ef8610-1641-448d-bfab-1b16eeff7646",
    "version":2,
    "lastMessageSequenceNumber":2,
    "createdAt":"2022-01-07T09:46:03.725Z",
    "lastModifiedAt":"2022-01-07T09:46:40.998Z",
    "lastModifiedBy":
    {
        "clientId":"iFOAd29Lew5ADrpakIhQkz_N",
        "isPlatformClient":false,
        "customer":
        {
            "typeId":"customer",
            "id":"88c278f9-82d9-427c-96df-f98a4f23e543"
        }
    },
    "createdBy":
    {
        "clientId":"iFOAd29Lew5ADrpakIhQkz_N",
        "isPlatformClient":false,
        "customer":
        {
            "typeId":"customer",
            "id":"88c278f9-82d9-427c-96df-f98a4f23e543"
        }
    },
    "customer":
    {
        "typeId":"customer",
        "id":"88c278f9-82d9-427c-96df-f98a4f23e543"
    },
    "amountPlanned":
    {
        "type":"centPrecision",
        "currencyCode":"USD",
        "centAmount":5980,
        "fractionDigits":2
    },
    "paymentMethodInfo":
    {
        "paymentInterface":"cybersource",
        "method":"googlePay",
        "name":
        {
            "en":"Google Pay"
        }
    },
    "custom":
    {
        "type":
        {
            "typeId":"type",
            "id":"87b9d9db-74a3-45d7-8e60-dde669866808"
        },
        "fields":
        {
            "isv_token":googlePay.isv_token
        }
    },
    "paymentStatus":{},
    "transactions":[],
    "interfaceInteractions":[]
};

export const googlePayResponeUpdateTransactions = 
{
    "id":"5412f837-98f3-4a41-a601-2c6b9068761a",
    "timestamp":"2022-01-07T07:57:05.452Z",
    "type":"Authorization",
    "amount":
    {
        "type":"centPrecision",
        "currencyCode":"USD",
        "centAmount":5980,
        "fractionDigits":2
    },
    "state":"Initial"
}

export const googlePayResponeCartObj = {
    "type": "Cart",
    "id": "0f778a3e-e96b-4678-8c24-5b8d3de090d2",
    "version": 35,
    "lastMessageSequenceNumber": 1,
    "createdAt": "2021-10-11T05:15:54.861Z",
    "lastModifiedAt": "2021-10-11T12:09:31.407Z",
    "lastModifiedBy": {
        "clientId": "4OdEsQlt0ZNkkwpineHHUy3h",
        "isPlatformClient": false,
        "anonymousId": "47d6586f-6c7a-4d0e-93bb-344b25600a8a"
    },
    "createdBy": {
        "clientId": "4OdEsQlt0ZNkkwpineHHUy3h",
        "isPlatformClient": false,
        "anonymousId": "47d6586f-6c7a-4d0e-93bb-344b25600a8a"
    },
    "anonymousId": "47d6586f-6c7a-4d0e-93bb-344b25600a8a",
    "lineItems": [
        {
            "id": "f2cf2106-78cc-49db-8e8d-999093c0cbd4",
            "productId": "2add8864-32c9-489b-9548-e3d68eb2ab2a",
            "name": {
                "en": "Red Hat"
            },
            "productType": {
                "typeId": "product-type",
                "id": "75930739-3f43-4c60-a5c9-0f3759259a5b",
                "version": 1
            },
            "productSlug": {
                "en": "W1"
            },
            "variant": {
                "id": 1,
                "sku": "SKU-W1",
                "prices": [
                    {
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 6970,
                            "fractionDigits": 2
                        },
                        "id": "9c117381-db1c-404e-b6d9-5043b511cdba",
                        "country": "DE"
                    },
                    {
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 6970,
                            "fractionDigits": 2
                        },
                        "id": "3885ca18-9ab5-4f85-98bf-df83db18ea61",
                        "country": "US"
                    }
                ],
                "images": [
                    {
                        "url": "https://9201c2297b43c7bc2776-8cadb5e9564431db770c575c7afdaf66.ssl.cf1.rackcdn.com/red_hat-hIuVXCjq.jpg",
                        "dimensions": {
                            "w": 300,
                            "h": 375
                        }
                    }
                ],
                "attributes": [],
                "assets": []
            },
            "price": {
                "value": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                },
                "id": "3885ca18-9ab5-4f85-98bf-df83db18ea61",
                "country": "US"
            },
            "quantity": 1,
            "discountedPricePerQuantity": [],
            "taxRate": {
                "name": "test-tax-category",
                "amount": 0.2,
                "includedInPrice": true,
                "country": "US",
                "id": "aelaXUTz",
                "subRates": []
            },
            "addedAt": "2021-10-11T05:15:55.391Z",
            "lastModifiedAt": "2021-10-11T05:15:55.391Z",
            "state": [
                {
                    "quantity": 1,
                    "state": {
                        "typeId": "state",
                        "id": "772b6f85-d6e6-463b-b881-c74930b01a72"
                    }
                }
            ],
            "priceMode": "Platform",
            "totalPrice": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            },
            "taxedPrice": {
                "totalNet": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                },
                "totalGross": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                }
            },
            "lineItemMode": "Standard"
        }
    ],
    "cartState": "Active",
    "totalPrice": {
        "type": "centPrecision",
        "currencyCode": "USD",
        "centAmount": 6970,
        "fractionDigits": 2
    },
    "taxedPrice": {
        "totalNet": {
            "type": "centPrecision",
            "currencyCode": "USD",
            "centAmount": 6970,
            "fractionDigits": 2
        },
        "totalGross": {
            "type": "centPrecision",
            "currencyCode": "USD",
            "centAmount": 6970,
            "fractionDigits": 2
        },
        "taxPortions": [
            {
                "rate": 0.2,
                "amount": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                },
                "name": "test-tax-category"
            }
        ]
    },
    "country": "US",
    "shippingInfo": {
        "shippingMethodName": "DHL",
        "price": {
            "type": "centPrecision",
            "currencyCode": "USD",
            "centAmount": 6970,
            "fractionDigits": 2
        },
        "shippingRate": {
            "price": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            },
            "tiers": []
        },
        "taxRate": {
            "name": "test-tax-category",
            "amount": 0.2,
            "includedInPrice": true,
            "country": "US",
            "id": "aelaXUTz",
            "subRates": []
        },
        "taxCategory": {
            "typeId": "tax-category",
            "id": "6c643b8d-d95f-47b7-8cae-4f31493e9a79"
        },
        "deliveries": [],
        "shippingMethod": {
            "typeId": "shipping-method",
            "id": "d9ff8d60-20d3-46f7-b9d5-8f707833f4cf"
        },
        "taxedPrice": {
            "totalNet": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            },
            "totalGross": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            }
        },
        "shippingMethodState": "MatchesCart"
    },
    "customLineItems": [],
    "discountCodes": [],
    "paymentInfo": {
        "payments": [
            {
                "typeId": "payment",
                "id": "a159d162-a7c5-4c26-a146-2ee21ebc8896"
            },
            {
                "typeId": "payment",
                "id": "b81b6d87-130d-4b29-a3dd-60f7733bbce2"
            }
        ]
    },
    "inventoryMode": "None",
    "taxMode": "Platform",
    "taxRoundingMode": "HalfEven",
    "taxCalculationMode": "LineItemLevel",
    "deleteDaysAfterLastModification": 90,
    "refusedGifts": [],
    "origin": "Customer",
    "shippingAddress": {
        "firstName": "shakshi",
        "lastName": "poddar",
        "streetName": "1295 Charleston Road",
        "additionalStreetInfo": "5th lane",
        "postalCode": "94043",
        "city": "Mountain View",
        "region": "CA",
        "country": "US",
        "phone": "08808906634",
        "email": "shakshi.poddar@wipro.com"
    },
    "billingAddress": {
        "firstName": "shakshi",
        "lastName": "poddar",
        "streetName": "1295 Charleston Road",
        "additionalStreetInfo": "5th lane",
        "postalCode": "94043",
        "city": "Mountain View",
        "region": "CA",
        "country": "US",
        "phone": "08808906634",
        "email": "shakshi.poddar@wipro.com"
    },
    "itemShippingAddresses": []
}

export const getPayerAuthSetUpResponseUpdateObj =  
{
    id: '9f00aeb9-2a70-433b-a0d6-a44ff7a2be64',
    version: 10,
    lastMessageSequenceNumber: 1,
    createdAt: '2022-01-07T13:02:34.981Z',
    lastModifiedAt: '2022-01-07T13:02:34.981Z',
    lastModifiedBy: {
      clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
      isPlatformClient: false,
      customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' }
    },
    createdBy: {
      clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
      isPlatformClient: false,
      customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' }
    },
    customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' },
    amountPlanned: {
      type: 'centPrecision',
      currencyCode: 'USD',
      centAmount: 5980,
      fractionDigits: 2
    },
    paymentMethodInfo: {
      paymentInterface: 'cybersource',
      method: 'creditCardWithPayerAuthentication',
      name: { en: 'Credit Card Payer Authentication' }
    },
    custom: {
      type: { typeId: 'type', id: '87b9d9db-74a3-45d7-8e60-dde669866808' },
      fields: {
        isv_tokenCaptureContextSignature: 'eyJraWQiOiJ6dSIsImFsZyI6IlJTMjU2In0.eyJmbHgiOnsicGF0aCI6Ii9mbGV4L3YyL3Rva2VucyIsImRhdGEiOiI4eERzTXZVY2Z1d1JGMTkxbHQwYVR4QUFFTHRnWXZqbFFyQVdQUytZM29WWTJsQWd4QXZWK2kzSlRQUTI4MHRoV2R3NWJsOGFzRllGVmN3akVqMDNnUjA2VjNNc0Z6YTlicElGR2FUbUJ4WFJ3R1RMaGl1OFJ5QmpINTB0b1pUVlE2ai8iLCJvcmlnaW4iOiJodHRwczovL3Rlc3RmbGV4LmN5YmVyc291cmNlLmNvbSIsImp3ayI6eyJrdHkiOiJSU0EiLCJlIjoiQVFBQiIsInVzZSI6ImVuYyIsIm4iOiJnRS02WGtJZ0VfdTJVZkk1SU9qenU3VUFDQkJkaVduX0huaG1HUFQ1OUZJRkpWM3NoS1k0eVZJVVU2b0x4SVA3SmVtMll2V2pFcHRUTlZzbW9hU05zQ19YSFMtem5uanByaEdKX3NETXFadEN3cFVkVFI5eWNMazkzSUVFV2FiUlY0Y3VfZjVyaEU3aVNUY1JoeEg2MHhmMTdjeFdCWjBCcm9XQ1JZY1NVaU9TaDlGUWJrcW41WWpEMEhoUGw5MDdJbWRVRUNNWWM3REJFLWFsU2NoZGN2Uk1adTJOTGZNQmh2TU5INzB2RDh5OGtPSmdrVVRrSU9YYzFKYjVZNVRVa0ZpY3BFZnM2b2M0eFptSDdWUnYwdGE4cmVNTHRZeWRKWFRnOEc2bjVYNGZ5ZW5XLXZDa05nb1EtLVRUTUtDc1ZRQ3dicGpDejdYM0VHdS1CV3VBNFEiLCJraWQiOiIwOGRYQzZNRDhvNXpDUTlscWJ2ZmNNazJ4N1dIeks5eiJ9fSwiY3R4IjpbeyJkYXRhIjp7InRhcmdldE9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwIl0sIm1mT3JpZ2luIjoiaHR0cHM6Ly90ZXN0ZmxleC5jeWJlcnNvdXJjZS5jb20ifSwidHlwZSI6Im1mLTAuMTEuMCJ9XSwiaXNzIjoiRmxleCBBUEkiLCJleHAiOjE2NDE1NjE0NTQsImlhdCI6MTY0MTU2MDU1NCwianRpIjoiaFUzMndGWHZWVXdSWEZTTyJ9.LH--Cd-sS70Zro6H-cnUCmcwSbWQomt72Ro8VVTAeuqzZFUZ-3p5OTM1hjf5Xkff6pKAYleLnazjgwA18DFSkoOu5gnfMVQic0v057d0KOGZRvyEfOANnA-TEJaf4NMTjlNFJqXyN1k6nFJ7E23BDG7zRYg378OWnXtgyjuntZ0E_-5EPXlJhftevtZvqYAVu00bBQq4lrzQYSGU-AapvHiduSGnMISEna-h3bBM7NYccHqyoFMxXXt6kNqBocWT2VObnOy_DoiTcPU01IicSv7snrsA33D61FGBTypB9HnTzS_yQ32W2KpYgTIP-wzARENJaVufFN1ykVHtUxvgxw',
        isv_cardExpiryYear: '2025',
        isv_token: creditCard.isv_token,
        isv_maskedPan: '400000XXXXXX1091',
        isv_cardExpiryMonth: '01',
        isv_acceptHeader: '*/*',
        isv_cardType: '001',
        isv_userAgentHeader: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36',
        isv_tokenVerificationContext: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbHgiOnsicGF0aCI6Ii9mbGV4L3YyL3Rva2VucyIsImRhdGEiOiI4eERzTXZVY2Z1d1JGMTkxbHQwYVR4QUFFTHRnWXZqbFFyQVdQUytZM29WWTJsQWd4QXZWK2kzSlRQUTI4MHRoV2R3NWJsOGFzRllGVmN3akVqMDNnUjA2VjNNc0Z6YTlicElGR2FUbUJ4WFJ3R1RMaGl1OFJ5QmpINTB0b1pUVlE2ai8iLCJvcmlnaW4iOiJodHRwczovL3Rlc3RmbGV4LmN5YmVyc291cmNlLmNvbSIsImp3ayI6eyJrdHkiOiJSU0EiLCJlIjoiQVFBQiIsInVzZSI6ImVuYyIsIm4iOiJnRS02WGtJZ0VfdTJVZkk1SU9qenU3VUFDQkJkaVduX0huaG1HUFQ1OUZJRkpWM3NoS1k0eVZJVVU2b0x4SVA3SmVtMll2V2pFcHRUTlZzbW9hU05zQ19YSFMtem5uanByaEdKX3NETXFadEN3cFVkVFI5eWNMazkzSUVFV2FiUlY0Y3VfZjVyaEU3aVNUY1JoeEg2MHhmMTdjeFdCWjBCcm9XQ1JZY1NVaU9TaDlGUWJrcW41WWpEMEhoUGw5MDdJbWRVRUNNWWM3REJFLWFsU2NoZGN2Uk1adTJOTGZNQmh2TU5INzB2RDh5OGtPSmdrVVRrSU9YYzFKYjVZNVRVa0ZpY3BFZnM2b2M0eFptSDdWUnYwdGE4cmVNTHRZeWRKWFRnOEc2bjVYNGZ5ZW5XLXZDa05nb1EtLVRUTUtDc1ZRQ3dicGpDejdYM0VHdS1CV3VBNFEiLCJraWQiOiIwOGRYQzZNRDhvNXpDUTlscWJ2ZmNNazJ4N1dIeks5eiJ9fSwiY3R4IjpbeyJkYXRhIjp7InRhcmdldE9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwIl0sIm1mT3JpZ2luIjoiaHR0cHM6Ly90ZXN0ZmxleC5jeWJlcnNvdXJjZS5jb20ifSwidHlwZSI6Im1mLTAuMTEuMCJ9XSwiaXNzIjoiRmxleCBBUEkiLCJleHAiOjE2NDE1NjE0NTQsImlhdCI6MTY0MTU2MDU1NCwianRpIjoiaFUzMndGWHZWVXdSWEZTTyJ9.frW2WC2tR18si5PFJjmH9auEjguqzVCGaotxJBt6FSE'
      }
    },
    paymentStatus: {},
    transactions: [],
    interfaceInteractions: []
  }

 

export const getCardWith3dsResponeCartObj = {
    "type": "Cart",
    "id": "0f778a3e-e96b-4678-8c24-5b8d3de090d2",
    "version": 35,
    "lastMessageSequenceNumber": 1,
    "createdAt": "2021-10-11T05:15:54.861Z",
    "lastModifiedAt": "2021-10-11T12:09:31.407Z",
    "lastModifiedBy": {
        "clientId": "4OdEsQlt0ZNkkwpineHHUy3h",
        "isPlatformClient": false,
        "anonymousId": "47d6586f-6c7a-4d0e-93bb-344b25600a8a"
    },
    "createdBy": {
        "clientId": "4OdEsQlt0ZNkkwpineHHUy3h",
        "isPlatformClient": false,
        "anonymousId": "47d6586f-6c7a-4d0e-93bb-344b25600a8a"
    },
    "anonymousId": "47d6586f-6c7a-4d0e-93bb-344b25600a8a",
    "lineItems": [
        {
            "id": "f2cf2106-78cc-49db-8e8d-999093c0cbd4",
            "productId": "2add8864-32c9-489b-9548-e3d68eb2ab2a",
            "name": {
                "en": "Red Hat"
            },
            "productType": {
                "typeId": "product-type",
                "id": "75930739-3f43-4c60-a5c9-0f3759259a5b",
                "version": 1
            },
            "productSlug": {
                "en": "W1"
            },
            "variant": {
                "id": 1,
                "sku": "SKU-W1",
                "prices": [
                    {
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 6970,
                            "fractionDigits": 2
                        },
                        "id": "9c117381-db1c-404e-b6d9-5043b511cdba",
                        "country": "DE"
                    },
                    {
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 6970,
                            "fractionDigits": 2
                        },
                        "id": "3885ca18-9ab5-4f85-98bf-df83db18ea61",
                        "country": "US"
                    }
                ],
                "images": [
                    {
                        "url": "https://9201c2297b43c7bc2776-8cadb5e9564431db770c575c7afdaf66.ssl.cf1.rackcdn.com/red_hat-hIuVXCjq.jpg",
                        "dimensions": {
                            "w": 300,
                            "h": 375
                        }
                    }
                ],
                "attributes": [],
                "assets": []
            },
            "price": {
                "value": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                },
                "id": "3885ca18-9ab5-4f85-98bf-df83db18ea61",
                "country": "US"
            },
            "quantity": 1,
            "discountedPricePerQuantity": [],
            "taxRate": {
                "name": "test-tax-category",
                "amount": 0.2,
                "includedInPrice": true,
                "country": "US",
                "id": "aelaXUTz",
                "subRates": []
            },
            "addedAt": "2021-10-11T05:15:55.391Z",
            "lastModifiedAt": "2021-10-11T05:15:55.391Z",
            "state": [
                {
                    "quantity": 1,
                    "state": {
                        "typeId": "state",
                        "id": "772b6f85-d6e6-463b-b881-c74930b01a72"
                    }
                }
            ],
            "priceMode": "Platform",
            "totalPrice": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            },
            "taxedPrice": {
                "totalNet": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                },
                "totalGross": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                }
            },
            "lineItemMode": "Standard"
        }
    ],
    "cartState": "Active",
    "totalPrice": {
        "type": "centPrecision",
        "currencyCode": "USD",
        "centAmount": 6970,
        "fractionDigits": 2
    },
    "taxedPrice": {
        "totalNet": {
            "type": "centPrecision",
            "currencyCode": "USD",
            "centAmount": 6970,
            "fractionDigits": 2
        },
        "totalGross": {
            "type": "centPrecision",
            "currencyCode": "USD",
            "centAmount": 6970,
            "fractionDigits": 2
        },
        "taxPortions": [
            {
                "rate": 0.2,
                "amount": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                },
                "name": "test-tax-category"
            }
        ]
    },
    "country": "US",
    "shippingInfo": {
        "shippingMethodName": "DHL",
        "price": {
            "type": "centPrecision",
            "currencyCode": "USD",
            "centAmount": 6970,
            "fractionDigits": 2
        },
        "shippingRate": {
            "price": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            },
            "tiers": []
        },
        "taxRate": {
            "name": "test-tax-category",
            "amount": 0.2,
            "includedInPrice": true,
            "country": "US",
            "id": "aelaXUTz",
            "subRates": []
        },
        "taxCategory": {
            "typeId": "tax-category",
            "id": "6c643b8d-d95f-47b7-8cae-4f31493e9a79"
        },
        "deliveries": [],
        "shippingMethod": {
            "typeId": "shipping-method",
            "id": "d9ff8d60-20d3-46f7-b9d5-8f707833f4cf"
        },
        "taxedPrice": {
            "totalNet": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            },
            "totalGross": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            }
        },
        "shippingMethodState": "MatchesCart"
    },
    "customLineItems": [],
    "discountCodes": [],
    "paymentInfo": {
        "payments": [
            {
                "typeId": "payment",
                "id": "a159d162-a7c5-4c26-a146-2ee21ebc8896"
            },
            {
                "typeId": "payment",
                "id": "b81b6d87-130d-4b29-a3dd-60f7733bbce2"
            }
        ]
    },
    "inventoryMode": "None",
    "taxMode": "Platform",
    "taxRoundingMode": "HalfEven",
    "taxCalculationMode": "LineItemLevel",
    "deleteDaysAfterLastModification": 90,
    "refusedGifts": [],
    "origin": "Customer",
    "shippingAddress": {
        "firstName": "shakshi",
        "lastName": "poddar",
        "streetName": "1295 Charleston Road",
        "additionalStreetInfo": "5th lane",
        "postalCode": "94043",
        "city": "Mountain View",
        "region": "CA",
        "country": "US",
        "phone": "08808906634",
        "email": "shakshi.poddar@wipro.com"
    },
    "billingAddress": {
        "firstName": "shakshi",
        "lastName": "poddar",
        "streetName": "1295 Charleston Road",
        "additionalStreetInfo": "5th lane",
        "postalCode": "94043",
        "city": "Mountain View",
        "region": "CA",
        "country": "US",
        "phone": "08808906634",
        "email": "shakshi.poddar@wipro.com"
    },
    "itemShippingAddresses": []
}

export const getCardWith3dsResponeUpdateTransactions =  {
    id: '20d1179f-07a6-48db-aa4b-3ea4decefa03',
    timestamp: '2022-01-10T06:38:33.238Z',
    type: 'Authorization',
    amount: {
      type: 'centPrecision',
      currencyCode: 'USD',
      centAmount: 5980,
      fractionDigits: 2
    },
    state: 'Initial'
  }

  
  export const getCardWithout3dsResponeCartObj = {
    "type": "Cart",
    "id": "0f778a3e-e96b-4678-8c24-5b8d3de090d2",
    "version": 35,
    "lastMessageSequenceNumber": 1,
    "createdAt": "2021-10-11T05:15:54.861Z",
    "lastModifiedAt": "2021-10-11T12:09:31.407Z",
    "lastModifiedBy": {
        "clientId": "4OdEsQlt0ZNkkwpineHHUy3h",
        "isPlatformClient": false,
        "anonymousId": "47d6586f-6c7a-4d0e-93bb-344b25600a8a"
    },
    "createdBy": {
        "clientId": "4OdEsQlt0ZNkkwpineHHUy3h",
        "isPlatformClient": false,
        "anonymousId": "47d6586f-6c7a-4d0e-93bb-344b25600a8a"
    },
    "anonymousId": "47d6586f-6c7a-4d0e-93bb-344b25600a8a",
    "lineItems": [
        {
            "id": "f2cf2106-78cc-49db-8e8d-999093c0cbd4",
            "productId": "2add8864-32c9-489b-9548-e3d68eb2ab2a",
            "name": {
                "en": "Red Hat"
            },
            "productType": {
                "typeId": "product-type",
                "id": "75930739-3f43-4c60-a5c9-0f3759259a5b",
                "version": 1
            },
            "productSlug": {
                "en": "W1"
            },
            "variant": {
                "id": 1,
                "sku": "SKU-W1",
                "prices": [
                    {
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 6970,
                            "fractionDigits": 2
                        },
                        "id": "9c117381-db1c-404e-b6d9-5043b511cdba",
                        "country": "DE"
                    },
                    {
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 6970,
                            "fractionDigits": 2
                        },
                        "id": "3885ca18-9ab5-4f85-98bf-df83db18ea61",
                        "country": "US"
                    }
                ],
                "images": [
                    {
                        "url": "https://9201c2297b43c7bc2776-8cadb5e9564431db770c575c7afdaf66.ssl.cf1.rackcdn.com/red_hat-hIuVXCjq.jpg",
                        "dimensions": {
                            "w": 300,
                            "h": 375
                        }
                    }
                ],
                "attributes": [],
                "assets": []
            },
            "price": {
                "value": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                },
                "id": "3885ca18-9ab5-4f85-98bf-df83db18ea61",
                "country": "US"
            },
            "quantity": 1,
            "discountedPricePerQuantity": [],
            "taxRate": {
                "name": "test-tax-category",
                "amount": 0.2,
                "includedInPrice": true,
                "country": "US",
                "id": "aelaXUTz",
                "subRates": []
            },
            "addedAt": "2021-10-11T05:15:55.391Z",
            "lastModifiedAt": "2021-10-11T05:15:55.391Z",
            "state": [
                {
                    "quantity": 1,
                    "state": {
                        "typeId": "state",
                        "id": "772b6f85-d6e6-463b-b881-c74930b01a72"
                    }
                }
            ],
            "priceMode": "Platform",
            "totalPrice": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            },
            "taxedPrice": {
                "totalNet": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                },
                "totalGross": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                }
            },
            "lineItemMode": "Standard"
        }
    ],
    "cartState": "Active",
    "totalPrice": {
        "type": "centPrecision",
        "currencyCode": "USD",
        "centAmount": 6970,
        "fractionDigits": 2
    },
    "taxedPrice": {
        "totalNet": {
            "type": "centPrecision",
            "currencyCode": "USD",
            "centAmount": 6970,
            "fractionDigits": 2
        },
        "totalGross": {
            "type": "centPrecision",
            "currencyCode": "USD",
            "centAmount": 6970,
            "fractionDigits": 2
        },
        "taxPortions": [
            {
                "rate": 0.2,
                "amount": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                },
                "name": "test-tax-category"
            }
        ]
    },
    "country": "US",
    "shippingInfo": {
        "shippingMethodName": "DHL",
        "price": {
            "type": "centPrecision",
            "currencyCode": "USD",
            "centAmount": 6970,
            "fractionDigits": 2
        },
        "shippingRate": {
            "price": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            },
            "tiers": []
        },
        "taxRate": {
            "name": "test-tax-category",
            "amount": 0.2,
            "includedInPrice": true,
            "country": "US",
            "id": "aelaXUTz",
            "subRates": []
        },
        "taxCategory": {
            "typeId": "tax-category",
            "id": "6c643b8d-d95f-47b7-8cae-4f31493e9a79"
        },
        "deliveries": [],
        "shippingMethod": {
            "typeId": "shipping-method",
            "id": "d9ff8d60-20d3-46f7-b9d5-8f707833f4cf"
        },
        "taxedPrice": {
            "totalNet": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            },
            "totalGross": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            }
        },
        "shippingMethodState": "MatchesCart"
    },
    "customLineItems": [],
    "discountCodes": [],
    "paymentInfo": {
        "payments": [
            {
                "typeId": "payment",
                "id": "a159d162-a7c5-4c26-a146-2ee21ebc8896"
            },
            {
                "typeId": "payment",
                "id": "b81b6d87-130d-4b29-a3dd-60f7733bbce2"
            }
        ]
    },
    "inventoryMode": "None",
    "taxMode": "Platform",
    "taxRoundingMode": "HalfEven",
    "taxCalculationMode": "LineItemLevel",
    "deleteDaysAfterLastModification": 90,
    "refusedGifts": [],
    "origin": "Customer",
    "shippingAddress": {
        "firstName": "shakshi",
        "lastName": "poddar",
        "streetName": "1295 Charleston Road",
        "additionalStreetInfo": "5th lane",
        "postalCode": "94043",
        "city": "Mountain View",
        "region": "CA",
        "country": "US",
        "phone": "08808906634",
        "email": "shakshi.poddar@wipro.com"
    },
    "billingAddress": {
        "firstName": "shakshi",
        "lastName": "poddar",
        "streetName": "1295 Charleston Road",
        "additionalStreetInfo": "5th lane",
        "postalCode": "94043",
        "city": "Mountain View",
        "region": "CA",
        "country": "US",
        "phone": "08808906634",
        "email": "shakshi.poddar@wipro.com"
    },
    "itemShippingAddresses": []
}

export const getCardWithout3dsResponeUpdateTransactions =  {
    id: '0fb0d3bc-3d9e-4047-9b2f-2a5440d5adbf',
    timestamp: '2022-01-10T08:09:12.692Z',
    type: 'Authorization',
    amount: {
      type: 'centPrecision',
      currencyCode: 'USD',
      centAmount: 5980,
      fractionDigits: 2
    },
    state: 'Initial'
  }

  export const clickToPayResponeUpdatePaymentObj = {
    id: 'e1389f95-b621-4d31-b865-defbe5d889c9',
    version: 2,
    lastMessageSequenceNumber: 2,
    createdAt: '2022-01-10T08:46:10.728Z',
    lastModifiedAt: '2022-01-10T08:46:10.728Z',
    lastModifiedBy: {
      clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
      isPlatformClient: false,
      customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' }
    },
    createdBy: {
      clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
      isPlatformClient: false,
      customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' }
    },
    customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' },
    amountPlanned: {
      type: 'centPrecision',
      currencyCode: 'USD',
      centAmount: 5980,
      fractionDigits: 2
    },
    paymentMethodInfo: {
      paymentInterface: 'cybersource',
      method: 'visaCheckout',
      name: { en: 'Click to Pay' }
    },
    custom: {
      type: { typeId: 'type', id: '87b9d9db-74a3-45d7-8e60-dde669866808' },
      fields: {
        isv_token: cpay.isv_token,
        isv_deviceFingerprintId: '016bd52d-4592-4c90-8e5f-18a7592b4a4f'
      }
    },
    paymentStatus: {},
    transactions: [],
    interfaceInteractions: []
  }

  export const clickToPayResponeCartObj =  {
    "type": "Cart",
    "id": "0f778a3e-e96b-4678-8c24-5b8d3de090d2",
    "version": 35,
    "lastMessageSequenceNumber": 1,
    "createdAt": "2021-10-11T05:15:54.861Z",
    "lastModifiedAt": "2021-10-11T12:09:31.407Z",
    "lastModifiedBy": {
        "clientId": "4OdEsQlt0ZNkkwpineHHUy3h",
        "isPlatformClient": false,
        "anonymousId": "47d6586f-6c7a-4d0e-93bb-344b25600a8a"
    },
    "createdBy": {
        "clientId": "4OdEsQlt0ZNkkwpineHHUy3h",
        "isPlatformClient": false,
        "anonymousId": "47d6586f-6c7a-4d0e-93bb-344b25600a8a"
    },
    "anonymousId": "47d6586f-6c7a-4d0e-93bb-344b25600a8a",
    "lineItems": [
        {
            "id": "f2cf2106-78cc-49db-8e8d-999093c0cbd4",
            "productId": "2add8864-32c9-489b-9548-e3d68eb2ab2a",
            "name": {
                "en": "Red Hat"
            },
            "productType": {
                "typeId": "product-type",
                "id": "75930739-3f43-4c60-a5c9-0f3759259a5b",
                "version": 1
            },
            "productSlug": {
                "en": "W1"
            },
            "variant": {
                "id": 1,
                "sku": "SKU-W1",
                "prices": [
                    {
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "EUR",
                            "centAmount": 6970,
                            "fractionDigits": 2
                        },
                        "id": "9c117381-db1c-404e-b6d9-5043b511cdba",
                        "country": "DE"
                    },
                    {
                        "value": {
                            "type": "centPrecision",
                            "currencyCode": "USD",
                            "centAmount": 6970,
                            "fractionDigits": 2
                        },
                        "id": "3885ca18-9ab5-4f85-98bf-df83db18ea61",
                        "country": "US"
                    }
                ],
                "images": [
                    {
                        "url": "https://9201c2297b43c7bc2776-8cadb5e9564431db770c575c7afdaf66.ssl.cf1.rackcdn.com/red_hat-hIuVXCjq.jpg",
                        "dimensions": {
                            "w": 300,
                            "h": 375
                        }
                    }
                ],
                "attributes": [],
                "assets": []
            },
            "price": {
                "value": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                },
                "id": "3885ca18-9ab5-4f85-98bf-df83db18ea61",
                "country": "US"
            },
            "quantity": 1,
            "discountedPricePerQuantity": [],
            "taxRate": {
                "name": "test-tax-category",
                "amount": 0.2,
                "includedInPrice": true,
                "country": "US",
                "id": "aelaXUTz",
                "subRates": []
            },
            "addedAt": "2021-10-11T05:15:55.391Z",
            "lastModifiedAt": "2021-10-11T05:15:55.391Z",
            "state": [
                {
                    "quantity": 1,
                    "state": {
                        "typeId": "state",
                        "id": "772b6f85-d6e6-463b-b881-c74930b01a72"
                    }
                }
            ],
            "priceMode": "Platform",
            "totalPrice": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            },
            "taxedPrice": {
                "totalNet": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                },
                "totalGross": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                }
            },
            "lineItemMode": "Standard"
        }
    ],
    "cartState": "Active",
    "totalPrice": {
        "type": "centPrecision",
        "currencyCode": "USD",
        "centAmount": 6970,
        "fractionDigits": 2
    },
    "taxedPrice": {
        "totalNet": {
            "type": "centPrecision",
            "currencyCode": "USD",
            "centAmount": 6970,
            "fractionDigits": 2
        },
        "totalGross": {
            "type": "centPrecision",
            "currencyCode": "USD",
            "centAmount": 6970,
            "fractionDigits": 2
        },
        "taxPortions": [
            {
                "rate": 0.2,
                "amount": {
                    "type": "centPrecision",
                    "currencyCode": "USD",
                    "centAmount": 6970,
                    "fractionDigits": 2
                },
                "name": "test-tax-category"
            }
        ]
    },
    "country": "US",
    "shippingInfo": {
        "shippingMethodName": "DHL",
        "price": {
            "type": "centPrecision",
            "currencyCode": "USD",
            "centAmount": 6970,
            "fractionDigits": 2
        },
        "shippingRate": {
            "price": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            },
            "tiers": []
        },
        "taxRate": {
            "name": "test-tax-category",
            "amount": 0.2,
            "includedInPrice": true,
            "country": "US",
            "id": "aelaXUTz",
            "subRates": []
        },
        "taxCategory": {
            "typeId": "tax-category",
            "id": "6c643b8d-d95f-47b7-8cae-4f31493e9a79"
        },
        "deliveries": [],
        "shippingMethod": {
            "typeId": "shipping-method",
            "id": "d9ff8d60-20d3-46f7-b9d5-8f707833f4cf"
        },
        "taxedPrice": {
            "totalNet": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            },
            "totalGross": {
                "type": "centPrecision",
                "currencyCode": "USD",
                "centAmount": 6970,
                "fractionDigits": 2
            }
        },
        "shippingMethodState": "MatchesCart"
    },
    "customLineItems": [],
    "discountCodes": [],
    "paymentInfo": {
        "payments": [
            {
                "typeId": "payment",
                "id": "a159d162-a7c5-4c26-a146-2ee21ebc8896"
            },
            {
                "typeId": "payment",
                "id": "b81b6d87-130d-4b29-a3dd-60f7733bbce2"
            }
        ]
    },
    "inventoryMode": "None",
    "taxMode": "Platform",
    "taxRoundingMode": "HalfEven",
    "taxCalculationMode": "LineItemLevel",
    "deleteDaysAfterLastModification": 90,
    "refusedGifts": [],
    "origin": "Customer",
    "shippingAddress": {
        "firstName": "shakshi",
        "lastName": "poddar",
        "streetName": "1295 Charleston Road",
        "additionalStreetInfo": "5th lane",
        "postalCode": "94043",
        "city": "Mountain View",
        "region": "CA",
        "country": "US",
        "phone": "08808906634",
        "email": "shakshi.poddar@wipro.com"
    },
    "billingAddress": {
        "firstName": "shakshi",
        "lastName": "poddar",
        "streetName": "1295 Charleston Road",
        "additionalStreetInfo": "5th lane",
        "postalCode": "94043",
        "city": "Mountain View",
        "region": "CA",
        "country": "US",
        "phone": "08808906634",
        "email": "shakshi.poddar@wipro.com"
    },
    "itemShippingAddresses": []
}

export const clickToPayResponeUpdateTransactions = {
    id: 'e7ef95f2-e27c-46a6-85f7-f693bd4485fc',
    timestamp: '2022-01-10T08:46:15.360Z',
    type: 'Authorization',
    amount: {
      type: 'centPrecision',
      currencyCode: 'USD',
      centAmount: 5980,
      fractionDigits: 2
    },
    state: 'Initial'
  }

  export const updateCardHandlerTokens  = {
    alias: updateToken.alias,
    value: updateToken.value,
    cardType: updateToken.cardType,
    cardName: updateToken.cardName,
    cardNumber: updateToken.cardNumber,
    cardExpiryMonth: updateToken.cardExpiryMonth,
    cardExpiryYear: updateToken.cardExpiryYear,
    paymentToken: updateToken.paymentToken,
    flag: 'update',
    oldExpiryMonth: updateToken.oldExpiryMonth,
    oldExpiryYear: updateToken.oldExpiryYear
  }

  export const updateCardHandlerCustomerId = unit.customerId;
  
  export const orderManagementHandlerPaymentId = unit.paymentId;

  export const orderManagementHandlerUpdateTransactions = {
    id: '8d3dab83-6024-4c50-ba0e-c387a89762be',
    timestamp: '2022-01-11T06:37:11.153Z',
    type: 'Charge',
    amount: {
      type: 'centPrecision',
      currencyCode: 'USD',
      centAmount: 5980,
      fractionDigits: 2
    },
    state: 'Initial'
  }

export const deleteCardHandlerUpdateCustomerObj = {
    alias: deleteToken.alias,
    value: deleteToken.value,
    cardType: deleteToken.cardType,
    cardName: deleteToken.cardName,
    cardNumber: deleteToken.cardNumber,
    cardExpiryMonth: deleteToken.cardExpiryMonth,
    cardExpiryYear: deleteToken.cardExpiryYear,
    flag: 'delete'
  }

  export const deleteCardHandlerCutsomerId = unit.customerId

  export const applePaySessionHandlerFields = 
  {
    isv_deviceFingerprintId: '2cd0221d-e31e-42d3-9d6b-aaeedd0eb62c',
    isv_applePayValidationUrl: 'https://apple-pay-gateway-cert.apple.com/paymentservices/startSession',
    isv_acceptHeader: '*/*',
    isv_applePayDisplayName: 'Sunrise',
    isv_userAgentHeader: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15'
    }

  export const authoriationHandlerGPUpdatePaymentObject = 
  {
      "id":"58a12619-a284-46cc-9376-e839f5eb8b41",
      "version":2,
      "lastMessageSequenceNumber":2,
      "createdAt":"2022-02-01T09:27:28.609Z",
      "lastModifiedAt":"2022-02-01T09:27:28.609Z",
      "lastModifiedBy":
      {
          "clientId":"iFOAd29Lew5ADrpakIhQkz_N",
          "isPlatformClient":false,
          "customer":
          {
              "typeId":"customer",
              "id":"88c278f9-82d9-427c-96df-f98a4f23e543"
            }
        },
        "createdBy":
        {
            "clientId":"iFOAd29Lew5ADrpakIhQkz_N",
            "isPlatformClient":false,
            "customer":
            {
                "typeId":"customer",
                "id":"88c278f9-82d9-427c-96df-f98a4f23e543"
            }
        },
        "customer":
        {
            "typeId":"customer",
            "id":"88c278f9-82d9-427c-96df-f98a4f23e543"
        },
        "amountPlanned":
        {
            "type":"centPrecision",
            "currencyCode":"USD",
            "centAmount":6970,
            "fractionDigits":2
        },
        "paymentMethodInfo":
        {
            "paymentInterface":"cybersource",
            "method":"googlePay",
            "name":
            {
                "en":"Google Pay"
            }
        },
        "custom":
        {
            "type":
            {
                "typeId":"type",
                "id":"87b9d9db-74a3-45d7-8e60-dde669866808"
            },
            "fields":
            {
                "isv_token":googlePay.isv_token,
                "isv_deviceFingerprintId":"c115e1e8-5864-4217-bea2-e0a09ca06abd"
            }
        },
        "paymentStatus":{},
        "transactions":[],
        "interfaceInteractions":[]
    }

	export const authorizationHandlerUpdateTransactions = 
    {
        "id":"6f2129cc-76fc-441f-a1ae-cfa940184f6d",
        "timestamp":"2022-02-01T09:27:30.561Z",
        "type":"Authorization",
        "amount":
        {
            "type":"centPrecision",
            "currencyCode":"USD",
            "centAmount":6970,
            "fractionDigits":2
        },
        "state":"Initial"
    }

    export const authorizationHandlerVSUpdatePaymentObject = {
        id: 'e1389f95-b621-4d31-b865-defbe5d889c9',
        version: 2,
        lastMessageSequenceNumber: 2,
        createdAt: '2022-01-10T08:46:10.728Z',
        lastModifiedAt: '2022-01-10T08:46:10.728Z',
        lastModifiedBy: {
          clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
          isPlatformClient: false,
          customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' }
        },
        createdBy: {
          clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
          isPlatformClient: false,
          customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' }
        },
        customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' },
        amountPlanned: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 5980,
          fractionDigits: 2
        },
        paymentMethodInfo: {
          paymentInterface: 'cybersource',
          method: 'visaCheckout',
          name: { en: 'Click to Pay' }
        },
        custom: {
          type: { typeId: 'type', id: '87b9d9db-74a3-45d7-8e60-dde669866808' },
          fields: {
            isv_token: cpay.isv_token,
            isv_deviceFingerprintId: '016bd52d-4592-4c90-8e5f-18a7592b4a4f'
          }
        },
        paymentStatus: {},
        transactions: [],
        interfaceInteractions: []
      }

    export const authorizationHandlerCCUpdatePaymentObject = {
        id: '2c89cf32-2846-4030-b256-ffdb442a18d6',
        version: 12,
        lastMessageSequenceNumber: 2,
        createdAt: '2022-01-10T08:08:48.572Z',
        lastModifiedAt: '2022-01-10T08:09:08.339Z',
        lastModifiedBy: {
          clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
          isPlatformClient: false,
          customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' }
        },
        createdBy: {
          clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
          isPlatformClient: false,
          customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' }
        },
        customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' },
        amountPlanned: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 5980,
          fractionDigits: 2
        },
        paymentMethodInfo: {
          paymentInterface: 'cybersource',
          method: 'creditCard',
          name: { en: 'Credit Card' }
        },
        custom: {
          type: { typeId: 'type', id: '87b9d9db-74a3-45d7-8e60-dde669866808' },
          fields: {
            isv_tokenCaptureContextSignature: 'eyJraWQiOiJ6dSIsImFsZyI6IlJTMjU2In0.eyJmbHgiOnsicGF0aCI6Ii9mbGV4L3YyL3Rva2VucyIsImRhdGEiOiI1U05zMVduOWxXZnczZ2Z2b3QvTERSQUFFTzBrWUxFeTdmSHZSa09RZzMvMUs3S0lnNTl2ajJRWWJMKzNhU1dRUE1Vc0RhUGVKc0lNNHFvMTFERm5qNkcvV3NPZ1lrRndwVlZVQzJMQWxucWM1aHRqLzFjY2h6Q3g3NkMxTWUrMGZSZHIiLCJvcmlnaW4iOiJodHRwczovL3Rlc3RmbGV4LmN5YmVyc291cmNlLmNvbSIsImp3ayI6eyJrdHkiOiJSU0EiLCJlIjoiQVFBQiIsInVzZSI6ImVuYyIsIm4iOiJxTXdHNWl0WDVjdV8zbjZteFFlNWR3eWRHWjRpS1FjRmlmd0FsM3c2UDdENUMtUF83SXhFMkwyNTRFa05UYVNqNk9VOWZCaldxZWU0VDdfeUZHbUxnTldZODc0dTVaTmNkeWZjcUlVa2hnV2JSOXdleVRkQVpuREY5YnE4emN1LUhQT1puU3pJS25MdUN1QmlfN0lRVkRfMkFNaXlqTU0yM1lwNlh3clVfLXRiUzZDeGprNFRRT0NfWVpzdXd6UEZuZEJ1aExWcVpQOXlfczBMSHhEOGRhZ0toMUVlcDN2cDRFTXl2OHl3WDNLdExxSEdWNTNubXc0bXBfRUdNRjY3STUwMzgtOGU2OXB1RGZUUnNrVC1OMUFIOUxUVmFjLVV0NGpMSmRRU2dLb2txWlJaSGNUTUNiMlg4NmtNTTNuQ19WQnpjVlloNWFKWFhBSGF3WW85ZnciLCJraWQiOiIwOHVnNEtYMmt4SnRicWFCMjlOU2pnYVdUbFUyMUFUaCJ9fSwiY3R4IjpbeyJkYXRhIjp7InRhcmdldE9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwIl0sIm1mT3JpZ2luIjoiaHR0cHM6Ly90ZXN0ZmxleC5jeWJlcnNvdXJjZS5jb20ifSwidHlwZSI6Im1mLTAuMTEuMCJ9XSwiaXNzIjoiRmxleCBBUEkiLCJleHAiOjE2NDE4MDMwMjgsImlhdCI6MTY0MTgwMjEyOCwianRpIjoibTVEbnVSbnR1UU5pWm9RUSJ9.ATYmhFloIbOQtrp8UxwummoMvTVftvyVQFEBua-6g_YoDfr38d3TZrhr5DPaLvuYTxCUSxulFC97jzYSNyWqsgpIvdLXda_dal7uf3PZblNg5yBg9nOP_2RGSzbqHgRR8rWW55zKR-8xOvdIaJ4Kr9Hsf5zoC0rxIjcCCPmP494PaLdVXgfWOZwlp3jOeEqn_v78pP_7JwMLGEj4iEo2wpCSe_ra0_57aeJloq-pXS_C0SMKZq9CXytHpdJlL2uNpwisyBH9N6fdebaEvRARttHXHEkr0wAeFj0jEs46oW5DdjDQmTla2Qf4TSFkhZeUrYTce63nG8bAGd62MhwIng',
            isv_deviceFingerprintId: '016bd52d-4592-4c90-8e5f-18a7592b4a4f',
            isv_cardExpiryYear: '2024',
            isv_token: creditCard.isv_token,
            isv_maskedPan: '411111XXXXXX1111',
            isv_cardExpiryMonth: '01',
            isv_acceptHeader: '*/*',
            isv_cardType: '001',
            isv_userAgentHeader: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
            isv_tokenVerificationContext: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbHgiOnsicGF0aCI6Ii9mbGV4L3YyL3Rva2VucyIsImRhdGEiOiI1U05zMVduOWxXZnczZ2Z2b3QvTERSQUFFTzBrWUxFeTdmSHZSa09RZzMvMUs3S0lnNTl2ajJRWWJMKzNhU1dRUE1Vc0RhUGVKc0lNNHFvMTFERm5qNkcvV3NPZ1lrRndwVlZVQzJMQWxucWM1aHRqLzFjY2h6Q3g3NkMxTWUrMGZSZHIiLCJvcmlnaW4iOiJodHRwczovL3Rlc3RmbGV4LmN5YmVyc291cmNlLmNvbSIsImp3ayI6eyJrdHkiOiJSU0EiLCJlIjoiQVFBQiIsInVzZSI6ImVuYyIsIm4iOiJxTXdHNWl0WDVjdV8zbjZteFFlNWR3eWRHWjRpS1FjRmlmd0FsM3c2UDdENUMtUF83SXhFMkwyNTRFa05UYVNqNk9VOWZCaldxZWU0VDdfeUZHbUxnTldZODc0dTVaTmNkeWZjcUlVa2hnV2JSOXdleVRkQVpuREY5YnE4emN1LUhQT1puU3pJS25MdUN1QmlfN0lRVkRfMkFNaXlqTU0yM1lwNlh3clVfLXRiUzZDeGprNFRRT0NfWVpzdXd6UEZuZEJ1aExWcVpQOXlfczBMSHhEOGRhZ0toMUVlcDN2cDRFTXl2OHl3WDNLdExxSEdWNTNubXc0bXBfRUdNRjY3STUwMzgtOGU2OXB1RGZUUnNrVC1OMUFIOUxUVmFjLVV0NGpMSmRRU2dLb2txWlJaSGNUTUNiMlg4NmtNTTNuQ19WQnpjVlloNWFKWFhBSGF3WW85ZnciLCJraWQiOiIwOHVnNEtYMmt4SnRicWFCMjlOU2pnYVdUbFUyMUFUaCJ9fSwiY3R4IjpbeyJkYXRhIjp7InRhcmdldE9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwIl0sIm1mT3JpZ2luIjoiaHR0cHM6Ly90ZXN0ZmxleC5jeWJlcnNvdXJjZS5jb20ifSwidHlwZSI6Im1mLTAuMTEuMCJ9XSwiaXNzIjoiRmxleCBBUEkiLCJleHAiOjE2NDE4MDMwMjgsImlhdCI6MTY0MTgwMjEyOCwianRpIjoibTVEbnVSbnR1UU5pWm9RUSJ9.eEnpS5aFcJZEA4wuI7zNzYtTTt_s-ALIBMG2b3a22Pk' 
          }
        },
        paymentStatus: {},
        transactions: [],
        interfaceInteractions: []
      }
    
    export const authorizationHandler3DSUpdatePaymentObject = {
        id: 'd5dddb44-f941-4b9a-bb09-1c507088179c',
        version: 17,
        lastMessageSequenceNumber: 2,
        createdAt: '2022-01-10T06:29:25.858Z',
        lastModifiedAt: '2022-01-10T06:38:29.073Z',
        lastModifiedBy: {
          clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
          isPlatformClient: false,
          customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' }
        },
        createdBy: {
          clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
          isPlatformClient: false,
        customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' }
      },
      customer: { typeId: 'customer', id: '88c278f9-82d9-427c-96df-f98a4f23e543' },
      amountPlanned: {
        type: 'centPrecision',
        currencyCode: 'USD',
        centAmount: 5980,
        fractionDigits: 2
      },
      paymentMethodInfo: {
        paymentInterface: 'cybersource',
        method: 'creditCardWithPayerAuthentication',
        name: { en: 'Credit Card Payer Authentication' }
      },
      custom: {
        type: { typeId: 'type', id: '87b9d9db-74a3-45d7-8e60-dde669866808' },
        fields: {
          isv_deviceFingerprintId: '26a7d17b-426d-4b66-935d-db6593fe960d',
          isv_cardExpiryYear: '2024',
          isv_token: creditCard.isv_token,
          isv_merchantDefinedData_mddField_2: 'https://centinelapistag.cardinalcommerce.com/V1/Cruise/Collect',
          isv_maskedPan: '411111XXXXXX1111',
          isv_cardExpiryMonth: '01',
          isv_payerAuthenticationRequired: false,
          isv_requestJwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNzg5NzMzZS1mNTQ5LTQwOTktOTc1OC01ZDU1ZWMzZDU5NWEiLCJpYXQiOjE2NDE3OTY3MDQsImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTY0MTgwMDMwNCwiT3JnVW5pdElkIjoiNWEzZDAxZmU2ZmUzZDExMjdjZGJjOTFlIiwiUmVmZXJlbmNlSWQiOiJjN2UxMzI2Zi03OTI2LTQ2NjEtOTk4My1hMDg4Mjk4MDE2ZmUifQ.d4OMX7yrAj5en7UsV2lsKvD5sObvO4jVBOqOtEIg0ps',
          isv_tokenCaptureContextSignature: 'eyJraWQiOiJ6dSIsImFsZyI6IlJTMjU2In0.eyJmbHgiOnsicGF0aCI6Ii9mbGV4L3YyL3Rva2VucyIsImRhdGEiOiJYY3hJVnZYMEFHdjFVd3JMRjY3VnJSQUFFR0pMM1MxMXdHb0c2RHdpaWRVQ2UrZm9UaGQ1cUhCUEpWN2FLYm9meXlYVzhpb20wU1RxZGhwejRXYk42TmYySDE2VG1DNjlqVUpmVlh6VFdRSVNqT21NeWFaWS9GSFJGa0orVElwZk5EbUoiLCJvcmlnaW4iOiJodHRwczovL3Rlc3RmbGV4LmN5YmVyc291cmNlLmNvbSIsImp3ayI6eyJrdHkiOiJSU0EiLCJlIjoiQVFBQiIsInVzZSI6ImVuYyIsIm4iOiJ1dGVUU3NRc2FISjI0NGllQ1lSWjNldG9PdUhPUUxTMmhsa203STFZX3k3aURQU0VSMUVLZ0FlNl9MOWI3YW1HTFVOM2xPZDdIMnU3TDhXX1V1M2k1ZzNlV3RkN3p3MXc5SV9VNWlUcm0wUTRpaWV2ZVdpdnJHclIyMWpnWTZhZ3FVanVxbllvTUJvckkxN2ZuTlZST0xkN1cwZ2NuOWkwcW1HU3lGUC02a05heFFZQnJhSVlzajg3eTE2MER3X2VJc1lrQnlnMWdXNjVCUWRGQW4tNTdhQnhZSVZNdGJPdm1hZFlqSkxDQVh3d19qU3ZOWjZZRmw5SUJLa3ZUelktcGNVOUloTHpiT242VDJYT05icTRaZFRmTTJqU0FuOHktVFJHTTVVN3V1YkxXcy1iVWtiR1FYSFN2V21ieFk3ZmU0dzk4bDUxZDAyYjg1RDdBa3dyb1EiLCJraWQiOiIwOGZHZEIzbzk4cFZHN3p5MXB2MlpFWHQ2ZlRUMlNXQiJ9fSwiY3R4IjpbeyJkYXRhIjp7InRhcmdldE9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwIl0sIm1mT3JpZ2luIjoiaHR0cHM6Ly90ZXN0ZmxleC5jeWJlcnNvdXJjZS5jb20ifSwidHlwZSI6Im1mLTAuMTEuMCJ9XSwiaXNzIjoiRmxleCBBUEkiLCJleHAiOjE2NDE3OTcwNjUsImlhdCI6MTY0MTc5NjE2NSwianRpIjoieDRzb2FkWFl4MDdKSlhxeCJ9.LCYZBFSv3QK3mErxjFnDm6t4BrhxYbPOFext1Gz5G1UP5gIw-XK8-sb7rZafMIrMXt2WU_3zXfEv8rLMZrVi8706MWM8gArVg-AanTB-Eo3HefafC90ebro1aUsD1CB-Tmm6mn_JAL9b7PFJSxpLn_PeddBnxvk_Aq6hAIw1LoHqJGply5EDxE2df75p0GNXw69WfaJ1_7VdIyIwL953FrGJZ8whHtEV7hPNh_6-jd9U_xbE6cJmvj0bK2ijFFP67eSJ19Tde7TIi8BhXe-n6HE0_1BbjW8By1W0oY-ejJCcRCfWN1wd_dp5D_AjtwK6MirFwTWT3IOhgMJM6NxRXQ',
          isv_acceptHeader: '*/*',
          isv_cardType: '001',
          isv_payerAuthenticationTransactionId: 'sMeBwXxMOsOFgqBsM3N0',
          isv_merchantDefinedData_mddField_1: 'c7e1326f-7926-4661-9983-a088298016fe',
          isv_userAgentHeader: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
          isv_tokenVerificationContext: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbHgiOnsicGF0aCI6Ii9mbGV4L3YyL3Rva2VucyIsImRhdGEiOiJYY3hJVnZYMEFHdjFVd3JMRjY3VnJSQUFFR0pMM1MxMXdHb0c2RHdpaWRVQ2UrZm9UaGQ1cUhCUEpWN2FLYm9meXlYVzhpb20wU1RxZGhwejRXYk42TmYySDE2VG1DNjlqVUpmVlh6VFdRSVNqT21NeWFaWS9GSFJGa0orVElwZk5EbUoiLCJvcmlnaW4iOiJodHRwczovL3Rlc3RmbGV4LmN5YmVyc291cmNlLmNvbSIsImp3ayI6eyJrdHkiOiJSU0EiLCJlIjoiQVFBQiIsInVzZSI6ImVuYyIsIm4iOiJ1dGVUU3NRc2FISjI0NGllQ1lSWjNldG9PdUhPUUxTMmhsa203STFZX3k3aURQU0VSMUVLZ0FlNl9MOWI3YW1HTFVOM2xPZDdIMnU3TDhXX1V1M2k1ZzNlV3RkN3p3MXc5SV9VNWlUcm0wUTRpaWV2ZVdpdnJHclIyMWpnWTZhZ3FVanVxbllvTUJvckkxN2ZuTlZST0xkN1cwZ2NuOWkwcW1HU3lGUC02a05heFFZQnJhSVlzajg3eTE2MER3X2VJc1lrQnlnMWdXNjVCUWRGQW4tNTdhQnhZSVZNdGJPdm1hZFlqSkxDQVh3d19qU3ZOWjZZRmw5SUJLa3ZUelktcGNVOUloTHpiT242VDJYT05icTRaZFRmTTJqU0FuOHktVFJHTTVVN3V1YkxXcy1iVWtiR1FYSFN2V21ieFk3ZmU0dzk4bDUxZDAyYjg1RDdBa3dyb1EiLCJraWQiOiIwOGZHZEIzbzk4cFZHN3p5MXB2MlpFWHQ2ZlRUMlNXQiJ9fSwiY3R4IjpbeyJkYXRhIjp7InRhcmdldE9yaWdpbnMiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwIl0sIm1mT3JpZ2luIjoiaHR0cHM6Ly90ZXN0ZmxleC5jeWJlcnNvdXJjZS5jb20ifSwidHlwZSI6Im1mLTAuMTEuMCJ9XSwiaXNzIjoiRmxleCBBUEkiLCJleHAiOjE2NDE3OTcwNjUsImlhdCI6MTY0MTc5NjE2NSwianRpIjoieDRzb2FkWFl4MDdKSlhxeCJ9.RXEfST3kVUZ4-oPjVM63UuUbYn8rn3H-42DHx6Hs3kA'
        }
      },
      paymentStatus: {},
      transactions: [],
      interfaceInteractions: []
    }

    export const authorizationHandlerAPUpdatePaymentObject =
    {
        id: '8efb864e-e0e9-4cd2-aebd-983ef3358633',
        version: 15,
        lastMessageSequenceNumber: 4,
        createdAt: '2022-01-25T09:34:33.160Z',
        lastModifiedAt: '2022-01-25T12:06:07.316Z',
        lastModifiedBy: {
          clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
          isPlatformClient: false,
          anonymousId: '033cd1c3-801d-4d2b-9729-fef0064dd3be'
        },
        createdBy: {
          clientId: 'iFOAd29Lew5ADrpakIhQkz_N',
          isPlatformClient: false,
          anonymousId: '033cd1c3-801d-4d2b-9729-fef0064dd3be'
        },
        customer: { typeId: 'customer', id: 'e6a74099-888c-4070-90bd-c920c3ba7804' },
        amountPlanned: {
          type: 'centPrecision',
          currencyCode: 'USD',
          centAmount: 5980,
          fractionDigits: 2
        },
        paymentMethodInfo: {
          paymentInterface: 'cybersource',
          method: 'applePay',
          name: { en: 'Apple Pay' }
        },
        custom: {
          type: { typeId: 'type', id: '87b9d9db-74a3-45d7-8e60-dde669866808' },
          fields: {
            isv_deviceFingerprintId: '5f39f56e-fb1f-4c29-80af-5168603ab5ce',
            isv_cardExpiryYear: '23  ',
            isv_token: applePay.isv_token,     
            isv_maskedPan: '483196XXXXXX5772',
            isv_cardExpiryMonth: '12',
            isv_userAgentHeader: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.2 Safari/605.1.15',
            isv_acceptHeader: '*/*',
            isv_cardType: '001'
          }
        },
        paymentStatus: {},
        transactions: [
          {
            id: 'ab75ae47-843b-4792-ac96-64e99dea2c74',
            timestamp: '2022-01-25T09:34:59.615Z',
            type: 'Authorization',
            amount: {
                type: 'centPrecision',
                currencyCode: 'USD',
                centAmount: 6970,
                fractionDigits: 2
            },
            interactionId: applePay.authReversalId,
            state: 'Success'
          }
        ],
        interfaceInteractions: [],
        anonymousId: '033cd1c3-801d-4d2b-9729-fef0064dd3be'
      }