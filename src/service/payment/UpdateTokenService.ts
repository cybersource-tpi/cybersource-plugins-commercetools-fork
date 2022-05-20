import restApi from 'cybersource-rest-client';
import path from 'path';
import paymentService from '../../utils/PaymentService';
import { Constants } from '../../constants';

const updateTokenResponse = async (tokens) => {
  let runEnvironment: any;
  let errorData: any;
  let exceptionData: any;
  let customerTokenId: null;
  let paymentInstrumentTokenId: null;
  let tokenResponse = {
    httpCode: null,
    default: null,
    card: null,
    message: null,
  };
  try {
    if (null != tokens && Constants.STRING_VALUE in tokens && Constants.STRING_PAYMENT_TOKEN in tokens && Constants.STRING_CARD_EXPIRY_MONTH in tokens && Constants.STRING_CARD_EXPIRY_YEAR in tokens) {
      customerTokenId = tokens.value;
      paymentInstrumentTokenId = tokens.paymentToken;
      const apiClient = new restApi.ApiClient();
      var requestObj = new restApi.PatchCustomerPaymentInstrumentRequest();
      if (process.env.PAYMENT_GATEWAY_RUN_ENVIRONMENT?.toUpperCase() == Constants.TEST_ENVIRONMENT) {
        runEnvironment = Constants.PAYMENT_GATEWAY_TEST_ENVIRONMENT;
      } else if (process.env.PAYMENT_GATEWAY_RUN_ENVIRONMENT?.toUpperCase() == Constants.LIVE_ENVIRONMENT) {
        runEnvironment = Constants.PAYMENT_GATEWAY_PRODUCTION_ENVIRONMENT;
      }
      const configObject = {
        authenticationType: Constants.PAYMENT_GATEWAY_AUTHENTICATION_TYPE,
        runEnvironment: runEnvironment,
        merchantID: process.env.PAYMENT_GATEWAY_MERCHANT_ID,
        merchantKeyId: process.env.PAYMENT_GATEWAY_MERCHANT_KEY_ID,
        merchantsecretKey: process.env.PAYMENT_GATEWAY_MERCHANT_SECRET_KEY,
      };

      var card = new restApi.Tmsv2customersEmbeddedDefaultPaymentInstrumentCard();
      card.expirationMonth = tokens.cardExpiryMonth;
      card.expirationYear = tokens.cardExpiryYear;
      requestObj.card = card;

      var opts = [];

      const instance = new restApi.CustomerPaymentInstrumentApi(configObject, apiClient);
      return await new Promise(function (resolve, reject) {
        instance.patchCustomersPaymentInstrument(customerTokenId, paymentInstrumentTokenId, requestObj, opts, function (error, data, response) {
          if (data) {
            tokenResponse.httpCode = response[Constants.STATUS_CODE];
            tokenResponse.default = data.default;
            tokenResponse.card = data.card;
            resolve(tokenResponse);
          } else if (error) {
            if (error.hasOwnProperty(Constants.STRING_RESPONSE) && null != error.response && Constants.VAL_ZERO < Object.keys(error.response).length && error.response.hasOwnProperty(Constants.STRING_TEXT) && null != error.response.text && Constants.VAL_ZERO < Object.keys(error.response.text).length) {
              paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_UPDATE_TOKEN_RESPONSE, Constants.LOG_INFO, error.response.text);
            } else {
              if (typeof error === 'object') {
                errorData = JSON.stringify(error);
              } else {
                errorData = error;
              }
              paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_UPDATE_TOKEN_RESPONSE, Constants.LOG_INFO, errorData);
            }
            tokenResponse.httpCode = error.status;
            reject(tokenResponse);
          } else {
            reject(tokenResponse);
          }
        });
      }).catch((error) => {
        return tokenResponse;
      });
    } else {
      paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_UPDATE_TOKEN_RESPONSE, Constants.LOG_INFO, Constants.ERROR_MSG_INVALID_INPUT);
      return tokenResponse;
    }
  } catch (exception) {
    if (typeof exception === 'string') {
      exceptionData = exception.toUpperCase();
    } else if (exception instanceof Error) {
      exceptionData = exception.message;
    } else {
      exceptionData = exception;
    }
    paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_UPDATE_TOKEN_RESPONSE, Constants.LOG_ERROR, exceptionData);
    return tokenResponse;
  }
};

export default { updateTokenResponse };
