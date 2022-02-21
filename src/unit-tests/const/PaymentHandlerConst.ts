/* eslint-disable import/order */
import googlePay from '../JSON/googlePay.json';
import applePay from '../JSON/applePay.json';
import creditCard from '../JSON/creditCard.json';
import cpay from '../JSON/clickToPay.json';
import unit from '../JSON/unit.json';
import updateToken from '../JSON/updateToken.json';
import deleteToken from '../JSON/deleteToken.json';


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

   