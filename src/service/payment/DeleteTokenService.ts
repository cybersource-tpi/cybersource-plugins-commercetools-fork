import restApi from 'cybersource-rest-client';
import path from 'path';
import paymentService from '../../utils/PaymentService';
import { Constants } from '../../constants';

const deleteCustomerToken = async (customerTokenObj) => {
  let errorData: any;
  let exceptionData: any;
  let customerTokenDeleteResponse = {
    httpCode: null,
    message: Constants.STRING_EMPTY,
    deletedToken: Constants.STRING_EMPTY,
  };
  let opts = new Array();
  try {
    if (null != customerTokenObj) {
      var customerTokenId = customerTokenObj.value;
      const configObject = {
        authenticationType: Constants.ISV_PAYMENT_AUTHENTICATION_TYPE,
        runEnvironment: process.env.CONFIG_RUN_ENVIRONMENT,
        merchantID: process.env.ISV_PAYMENT_MERCHANT_ID,
        merchantKeyId: process.env.ISV_PAYMENT_MERCHANT_KEY_ID,
        merchantsecretKey: process.env.ISV_PAYMENT_MERCHANT_SECRET_KEY,
      };
      const apiClient = new restApi.ApiClient();
      var instance = new restApi.CustomerApi(configObject, apiClient);
      return await new Promise(function (resolve, reject) {
        instance.deleteCustomer(customerTokenId, opts, function (error, data, response) {
          if (Constants.HTTP_CODE_TWO_HUNDRED_FOUR == response.status) {
            customerTokenDeleteResponse.httpCode = response.status;
            customerTokenDeleteResponse.deletedToken = customerTokenId;
            resolve(customerTokenDeleteResponse);
          } else {
            errorData = JSON.parse(error.response.text.replace(Constants.REGEX_DOUBLE_SLASH, Constants.STRING_EMPTY));
            paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_CUSTOMER_TOKEN_DELETE_RESPONSE, Constants.LOG_INFO, errorData.message);
            customerTokenDeleteResponse.httpCode = response.status;
            customerTokenDeleteResponse.message = errorData.message;
            reject(customerTokenDeleteResponse);
          }
        });
      }).catch((error) => {
        paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_CUSTOMER_TOKEN_DELETE_RESPONSE, Constants.LOG_INFO, error.message);
        return customerTokenDeleteResponse;
      });
    } else {
      paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_CUSTOMER_TOKEN_DELETE_RESPONSE, Constants.LOG_INFO, Constants.ERROR_MSG_INVALID_CUSTOMER_INPUT);
      return customerTokenDeleteResponse;
    }
  } catch (exception) {
    if (typeof exception === 'string') {
      exceptionData = exception.toUpperCase();
    } else if (exception instanceof Error) {
      exceptionData = exception.message;
    } else {
      exceptionData = exception;
    }
    paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_CUSTOMER_TOKEN_DELETE_RESPONSE, Constants.LOG_ERROR, exceptionData);
    return customerTokenDeleteResponse;
  }
};

export default { deleteCustomerToken };
