import googlePay from '../../JSON/googlePay.json';
import creditCard from '../../JSON/creditCard.json'
export const payment = {
    "id":"33e68f3d-8143-4d07-ac13-2314c7039251",
    "version":2,
    "lastMessageSequenceNumber":2,
    "createdAt":"2021-12-21T10:19:02.132Z",
    "lastModifiedAt":"2021-12-21T10:19:02.132Z",
    "lastModifiedBy":
    {
        "clientId":"iFOAd29Lew5ADrpakIhQkz_N",
        "isPlatformClient":false,
        "anonymousId":"ad175f34-543f-4a33-956a-39c30cd0aa61"
    },
    "createdBy":
    {
        "clientId":"iFOAd29Lew5ADrpakIhQkz_N",
        "isPlatformClient":false,
        "anonymousId":"ad175f34-543f-4a33-956a-39c30cd0aa61"
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
        }},
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
        "interfaceInteractions":[],
        "anonymousId":"ad175f34-543f-4a33-956a-39c30cd0aa61"
    }

    export const cart = {
        "type":"Cart",
        "id":"e11aeb84-1de5-481d-aa64-551305f678c1",
        "version":10,
        "lastMessageSequenceNumber":1,
        "createdAt":"2021-12-21T10:18:40.730Z",
        "lastModifiedAt":"2021-12-21T10:19:03.124Z",
        "lastModifiedBy":
        {
            "clientId":"iFOAd29Lew5ADrpakIhQkz_N",
            "isPlatformClient":false,
            "anonymousId":"ad175f34-543f-4a33-956a-39c30cd0aa61"
        },
        "createdBy":
        {
            "clientId":"iFOAd29Lew5ADrpakIhQkz_N",
            "isPlatformClient":false,
            "anonymousId":"ad175f34-543f-4a33-956a-39c30cd0aa61"
        },
        "anonymousId":"ad175f34-543f-4a33-956a-39c30cd0aa61",
        "lineItems":
        [{
            "id":"c3da9420-ec2e-4876-889a-806cc4282b6c",
            "productId":"cb359cbc-e75a-4bc5-8677-006bfd5bc250",
            "name":
            {
                "en":"Suit"
            },
            "productType":
            {
                "typeId":"product-type",
                "id":"31d56c4e-d578-4dab-a313-780b5f1e7556","version":1},
                "productSlug":{
                    "en":"a2"
                },
                "variant":{
                    "id":1,
                    "sku":"SKU-2",
                    "prices":
                    [{
                        "value":
                        {
                            "type":"centPrecision",
                            "currencyCode":"EUR",
                            "centAmount":15845,
                            "fractionDigits":2
                        },
                        "id":"8875dd28-99b3-4610-8103-ac8e615fd745",
                        "country":"US"
                    },
                    {
                        "value":
                        {
                            "type":"centPrecision",
                            "currencyCode":"USD",
                            "centAmount":5980,
                            "fractionDigits":2
                        },
                        "id":"cf5dad3a-df1c-4940-be45-1c3b2caea494",
                        "country":"US"
                    }],
                    "images":
                    [{
                        "url":"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2019/6/17/2a24f4d1-1324-4f82-90ab-4c8bc72503ec1560745075753-1.jpg",
                        "dimensions":
                        {
                            "w":300,
                            "h":375
                        }
                    }
                ],
                "attributes":[],
                "assets":[]
            },
            "price":
            {
                "value":
                {
                    "type":"centPrecision",
                    "currencyCode":"USD",
                    "centAmount":5980,
                    "fractionDigits":2},
                    "id":"cf5dad3a-df1c-4940-be45-1c3b2caea494",
                    "country":"US"
                },
                "quantity":1,
                "discountedPricePerQuantity":[],
                "taxRate":
                {
                    "name":"test-tax-category",
                    "amount":0.2,
                    "includedInPrice":true,
                    "country":"US",
                    "id":"HxMyojUT",
                    "subRates":[]
                },
                "addedAt":"2021-12-21T10:18:41.049Z",
                "lastModifiedAt":"2021-12-21T10:18:41.049Z",
                "state":
                [{
                    "quantity":1,
                    "state":
                    {
                        "typeId":"state",
                        "id":"438c0901-36c4-41ec-9a86-2853d6c73d0d"
                    }}
                ],
                "priceMode":"Platform",
                "totalPrice":
                {
                    "type":"centPrecision",
                    "currencyCode":"USD",
                    "centAmount":5980,
                    "fractionDigits":2
                },
                "taxedPrice":
                {
                    "totalNet":
                    {
                        "type":"centPrecision",
                        "currencyCode":"USD",
                        "centAmount":4983,
                        "fractionDigits":2
                    },
                    "totalGross":
                    {
                        "type":"centPrecision",
                        "currencyCode":"USD",
                        "centAmount":5980,
                        "fractionDigits":2
                    }},
                    "lineItemMode":"Standard"
                }],
                "cartState":"Active",
                "totalPrice":
                {
                    "type":"centPrecision",
                    "currencyCode":"USD",
                    "centAmount":5980,
                    "fractionDigits":2
                },
                "taxedPrice":
                {
                    "totalNet":{
                        "type":"centPrecision",
                        "currencyCode":"USD",
                        "centAmount":4983,
                        "fractionDigits":2
                    },
                    "totalGross":{
                        "type":"centPrecision",
                        "currencyCode":"USD",
                        "centAmount":5980,
                        "fractionDigits":2
                    },
                    "taxPortions":
                    [{
                        "rate":0.2,
                        "amount":{
                            "type":"centPrecision",
                            "currencyCode":"USD",
                            "centAmount":997,
                            "fractionDigits":2
                        },
                        "name":"test-tax-category"
                    }]},
                    "country":"US",
                    "customLineItems":[],
                    "discountCodes":[],
                    "paymentInfo":
                    {
                        "payments":
                        [{
                            "typeId":"payment",
                            "id":"33e68f3d-8143-4d07-ac13-2314c7039251"
                        }]},
                        "inventoryMode":"None",
                        "taxMode":"Platform",
                        "taxRoundingMode":"HalfEven",
                        "taxCalculationMode":"LineItemLevel",
                        "deleteDaysAfterLastModification":90,
                        "refusedGifts":[],
                        "origin":"Customer",
                        "shippingAddress":{
                            "firstName":"shakshi",
                            "lastName":"poddar",
                            "streetName":"1295 Charleston Road",
                            "additionalStreetInfo":"5th lane",
                            "postalCode":"94043",
                            "city":"Mountain View",
                            "region":"CA",
                            "country":"US",
                            "phone":"08808906634",
                            "email":"shakshi.poddar@wipro.com"
                        },
                        "billingAddress":
                        {
                            "firstName":"shakshi",
                            "lastName":"poddar",
                            "streetName":"1295 Charleston Road",
                            "additionalStreetInfo":"5th lane",
                            "postalCode":"94043",
                            "city":"Mountain View",
                            "region":"CA",
                            "country":"US",
                            "phone":"08808906634",
                            "email":"shakshi.poddar@wipro.com"
                        },
                        "itemShippingAddresses":[]
                    }

export const service = 'google'

export const payments = {
    "id":"33e68f3d-8143-4d07-ac13-2314c7039251",
    "version":2,
    "lastMessageSequenceNumber":2,
    "createdAt":"2021-12-21T10:19:02.132Z",
    "lastModifiedAt":"2021-12-21T10:19:02.132Z",
    "lastModifiedBy":
    {
        "clientId":"iFOAd29Lew5ADrpakIhQkz_N",
        "isPlatformClient":false,
        "anonymousId":"ad175f34-543f-4a33-956a-39c30cd0aa61"
    },
    "createdBy":
    {
        "clientId":"iFOAd29Lew5ADrpakIhQkz_N",
        "isPlatformClient":false,
        "anonymousId":"ad175f34-543f-4a33-956a-39c30cd0aa61"
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
        }},
        "custom":
        {
            "type":
            {
                "typeId":"type",
                "id":"87b9d9db-74a3-45d7-8e60-dde669866808"
            },
            "fields":
            {
                "isv_token":"eyJzaWduYXR1cmUiOiJNRVFDSUQ0RmI3YTJNUndKMjJGL3BCRVBZaFA2ZHdtN2R6VWt4bVQ2MGVKMEpPOHRBaUJyOFNvZVd5TTRxTmt5N3ltbDZOektqMjlFSzNoZlk2SGs4bURTbm1YRmF3XHUwMDNkXHUwMDNkIiwicHJvdG9jb2xWZXJzaW9uIjoiRUN2MSIsInNpZ25lZE1lc3NhZ2UiOiJ7XCJlbmNyeXB0ZWRNZXNzYWdlXCI6XCJYNFluRmpqeFMzRk92Z2NxYkh5OGFpdC93N2UvMmZJcG5kWlVXZ3pmR2FiUE9kbHhKRWFKK3JnL2xCWWU4dVh6RkZEb2loQWU1bnJlSFN0RUVVR2dBcEVZMW1uWkxmWkplZTB0WXNLOWVZeTVBYVkvNEdQR2s3ZVZ3TlllTWhCY01ZeWUwMjN5bUZOL1VzMmtNeUFqRFlGNkFPQkRRK0tUNTQrbzMwNGptdFkzdzV0R1NYOWtPZnFuU3V0aFFYMFlXVVVHUU0wSmdQL2duMW5WSDFJeFNyTmpmbHFtY1k5MWlWSk5ZTXB1a1E1WmFieEhlaTQvcDFYVXppNUcyVEZSN1RhaEM3UTJGRWpqeGs2d3o3cWJkMUhBNlg0RUE3TnEzMjFHTm1LaFAyQVZPVmtqRy9ZVW5VSWNJQlNMb3BmZVhPYWxMVFVsdnR2ZDN1QkUzTDhRcTFyVHIxSnE2UCtVaFJSY1doRXlsVVNvbkxURGlqM0cxVFNCSTJ1UVZUd2U4RXVjbThaNDYzZnJUOVNpQjlCc0NGeVZzM25mNC9aa0pIckNmemVvSFVzdTVkYklrNFMzNDRqRG1iZVhSM3hVSjVlNVwiLFwiZXBoZW1lcmFsUHVibGljS2V5XCI6XCJCQ3hCRk5LV3NBZUwyQ0NGR2hVRWptOFBVbmxVZWdmYlFYNWRQdy9KSGIvUGVPL3QxZ3FuYlpoYlRrU2tlOE93akU5UUwraFBiNzNEN0llQlNKMDNkN0FcXHUwMDNkXCIsXCJ0YWdcIjpcIkYvMzJpb2o4blNtdU5ZU3JIYUdTeEkzYWR5a3pSSVNQUmMvQVlHSldoREVcXHUwMDNkXCJ9In0"
            }
        },
        "paymentStatus":{},
        "transactions":[],
        "interfaceInteractions":[],
        "anonymousId":"ad175f34-543f-4a33-956a-39c30cd0aa61"
    }

    export const cardTokens = {
        customerTokenId: creditCard.savedTokenId,
        paymentInstrumentId: creditCard.savedToken
      } 