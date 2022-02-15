import restApi from 'cybersource-rest-client';
import path from 'path';
import { Constants } from '../../constants';
import paymentService from '../../utils/PaymentService';

const getVisaCheckoutData = async (paymentResponse) => {
  let errorData: any;
  let exceptionData: any;
  let visaCheckoutData = {
    httpCode: null,
    billToFieldGroup: null,
    shipToFieldGroup: null,
    cardFieldGroup: null,
    message: null,
  };
  let runEnvironment: any;
  try {
    if (null != paymentResponse) {
      const id = paymentResponse.transactionId;
      if (null != id) {
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
        const apiClient = new restApi.ApiClient();
        const instance = new restApi.TransactionDetailsApi(configObject, apiClient);
        return await new Promise((resolve, reject) => {
          instance.getTransaction(id, function (error, data, response) {
            if (data) {
              visaCheckoutData.httpCode = response[Constants.STRING_RESPONSE_STATUS];
              visaCheckoutData.billToFieldGroup = data.orderInformation.billTo;
              visaCheckoutData.shipToFieldGroup = data.orderInformation.shipTo;
              visaCheckoutData.cardFieldGroup = data.paymentInformation.card;
              resolve(visaCheckoutData);
            } else if (error) {
              if (Constants.STRING_RESPONSE in error && Constants.STRING_TEXT in error.response) {
                errorData = JSON.parse(error.response.text.replace(Constants.REGEX_DOUBLE_SLASH, Constants.STRING_EMPTY));
                paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_GET_VISA_CHECKOUT_DATA, Constants.LOG_INFO, errorData);
                visaCheckoutData.message = errorData.message;
              } else {
                paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_GET_VISA_CHECKOUT_DATA, Constants.LOG_INFO, error);
              }
              visaCheckoutData.httpCode = error.status;
              reject(visaCheckoutData);
            } else {
              reject(visaCheckoutData);
            }
          });
        }).catch((error) => {
          return visaCheckoutData;
        });
      } else {
        paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_GET_VISA_CHECKOUT_DATA, Constants.LOG_INFO, Constants.ERROR_MSG_INVALID_INPUT);
        return visaCheckoutData;
      }
    } else {
      paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_GET_VISA_CHECKOUT_DATA, Constants.LOG_INFO, Constants.ERROR_MSG_INVALID_INPUT);
      return visaCheckoutData;
    }
  } catch (exception) {
    if (typeof exception === 'string') {
      exceptionData = exception.toUpperCase();
    } else if (exception instanceof Error) {
      exceptionData = exception.message;
    } else {
      exceptionData = exception;
    }
    paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_GET_VISA_CHECKOUT_DATA, Constants.LOG_ERROR, exceptionData);
    return visaCheckoutData;
  }
};

export default { getVisaCheckoutData };
