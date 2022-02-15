import restApi from 'cybersource-rest-client';
import path from 'path';
import paymentService from '../../utils/PaymentService';
import { Constants } from '../../constants';

const updateTokenResponse = async (tokens) => {
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
  let runEnvironment: any;
  try {
    if (null != tokens && Constants.STRING_VALUE in tokens && Constants.STRING_PAYMENT_TOKEN in tokens && Constants.STRING_CARD_EXPIRY_MONTH in tokens && Constants.STRING_CARD_EXPIRY_YEAR in tokens) {
      customerTokenId = tokens.value;
      paymentInstrumentTokenId = tokens.paymentToken;
      const apiClient = new restApi.ApiClient();
      var requestObj = new restApi.PatchCustomerPaymentInstrumentRequest();
      if (process.env.ISV_PAYMENT_RUN_ENVIRONMENT?.toUpperCase() == Constants.TEST_ENVIRONMENT) {
        runEnvironment = Constants.CONFIG_TEST_ENVIRONMENT;
      } else if (process.env.ISV_PAYMENT_RUN_ENVIRONMENT?.toUpperCase() == Constants.LIVE_ENVIRONMENT) {
        runEnvironment = Constants.CONFIG_PRODUCTION_ENVIRONMENT;
      }
      const configObject = {
        authenticationType: Constants.ISV_PAYMENT_AUTHENTICATION_TYPE,
        runEnvironment: runEnvironment,
        merchantID: process.env.ISV_PAYMENT_MERCHANT_ID,
        merchantKeyId: process.env.ISV_PAYMENT_MERCHANT_KEY_ID,
        merchantsecretKey: process.env.ISV_PAYMENT_MERCHANT_SECRET_KEY,
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
            if (Constants.STRING_RESPONSE in error && Constants.STRING_TEXT in error.response) {
              errorData = JSON.parse(error.response.text.replace(Constants.REGEX_DOUBLE_SLASH, Constants.STRING_EMPTY));
              paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_UPDATE_TOKEN_RESPONSE, Constants.LOG_INFO, errorData);
              tokenResponse.message = errorData.message;
            } else {
              paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_UPDATE_TOKEN_RESPONSE, Constants.LOG_INFO, error);
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
