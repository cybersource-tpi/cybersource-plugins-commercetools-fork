import restApi from 'cybersource-rest-client';
import path from 'path';
import paymentService from '../../utils/PaymentService';
import { Constants } from '../../constants';

const refundResponse = async (payment, captureId, updateTransactions) => {
  let runEnvironment: any;
  let errorData: any;
  let exceptionData: any;
  let paymentResponse = {
    httpCode: null,
    transactionId: null,
    status: null,
    message: null,
  };
  try {
    if (null != captureId && null != payment && null != updateTransactions) {
      const apiClient = new restApi.ApiClient();
      var requestObj = new restApi.RefundPaymentRequest();
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
<<<<<<< HEAD
=======
        logConfiguration: {
          enableLog: false,
        },
>>>>>>> feature
      };
      var clientReferenceInformation = new restApi.Ptsv2paymentsClientReferenceInformation();
      clientReferenceInformation.code = payment.id;
      requestObj.clientReferenceInformation = clientReferenceInformation;

      var clientReferenceInformationpartner = new restApi.Ptsv2paymentsidClientReferenceInformationPartner();
      clientReferenceInformationpartner.solutionId = Constants.PAYMENT_GATEWAY_PARTNER_SOLUTION_ID;
      clientReferenceInformation.partner = clientReferenceInformationpartner;
      requestObj.clientReferenceInformation = clientReferenceInformation;

<<<<<<< HEAD
      if (Constants.VISA_CHECKOUT == payment.paymentMethodInfo.method) {
=======
      if (Constants.CLICK_TO_PAY == payment.paymentMethodInfo.method) {
>>>>>>> feature
        var processingInformation = new restApi.Ptsv2paymentsidrefundsProcessingInformation();
        processingInformation.paymentSolution = payment.paymentMethodInfo.method;
        processingInformation.visaCheckoutId = payment.custom.fields.isv_token;
        requestObj.processingInformation = processingInformation;
      } else if (Constants.GOOGLE_PAY == payment.paymentMethodInfo.method) {
        var processingInformation = new restApi.Ptsv2paymentsidrefundsProcessingInformation();
        processingInformation.paymentSolution = Constants.PAYMENT_GATEWAY_GOOGLE_PAY_PAYMENT_SOLUTION;
        requestObj.processingInformation = processingInformation;
      } else if (Constants.APPLE_PAY == payment.paymentMethodInfo.method) {
        var processingInformation = new restApi.Ptsv2paymentsidrefundsProcessingInformation();
        processingInformation.paymentSolution = Constants.PAYMENT_GATEWAY_APPLE_PAY_PAYMENT_SOLUTION;
        requestObj.processingInformation = processingInformation;
      }

      var orderInformation = new restApi.Ptsv2paymentsidrefundsOrderInformation();
      var orderInformationAmountDetails = new restApi.Ptsv2paymentsidcapturesOrderInformationAmountDetails();

      const refundAmount = paymentService.convertCentToAmount(updateTransactions.amount.centAmount);

      orderInformationAmountDetails.totalAmount = refundAmount;
      orderInformationAmountDetails.currency = payment.amountPlanned.currencyCode;
      orderInformation.amountDetails = orderInformationAmountDetails;

      requestObj.orderInformation = orderInformation;
      const instance = new restApi.RefundApi(configObject, apiClient);
      return await new Promise(function (resolve, reject) {
        instance.refundPayment(requestObj, captureId, function (error, data, response) {
          if (data) {
            paymentResponse.httpCode = response[Constants.STATUS_CODE];
            paymentResponse.transactionId = data.id;
            paymentResponse.status = data.status;
            paymentResponse.message = data.message;
            resolve(paymentResponse);
          } else if (error) {
<<<<<<< HEAD
            if (Constants.STRING_RESPONSE in error && null != error.response && Constants.STRING_TEXT in error.response) {
              errorData = JSON.parse(error.response.text.replace(Constants.REGEX_DOUBLE_SLASH, Constants.STRING_EMPTY));
              paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_REFUND_RESPONSE, Constants.LOG_INFO, errorData);
=======
            if (error.hasOwnProperty(Constants.STRING_RESPONSE) && Constants.VAL_ZERO < Object.keys(error.response).length && error.response.hasOwnProperty(Constants.STRING_TEXT) && Constants.VAL_ZERO < Object.keys(error.response.text).length) {
              errorData = JSON.parse(error.response.text.replace(Constants.REGEX_DOUBLE_SLASH, Constants.STRING_EMPTY));
              paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_REFUND_RESPONSE, Constants.LOG_INFO, errorData.message);
>>>>>>> feature
              paymentResponse.transactionId = errorData.id;
              paymentResponse.status = errorData.status;
              paymentResponse.message = errorData.message;
            } else {
<<<<<<< HEAD
              paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_REFUND_RESPONSE, Constants.LOG_INFO, error);
=======
              if (typeof error === 'object') {
                errorData = JSON.stringify(error);
              } else {
                errorData = error;
              }
              paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_REFUND_RESPONSE, Constants.LOG_INFO, errorData);
>>>>>>> feature
            }
            paymentResponse.httpCode = error.status;
            reject(paymentResponse);
          } else {
            reject(paymentResponse);
          }
        });
      }).catch((error) => {
        return paymentResponse;
      });
    } else {
      paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_REFUND_RESPONSE, Constants.LOG_INFO, Constants.ERROR_MSG_INVALID_INPUT);
      return paymentResponse;
    }
  } catch (exception) {
    if (typeof exception === 'string') {
      exceptionData = exception.toUpperCase();
    } else if (exception instanceof Error) {
      exceptionData = exception.message;
    } else {
      exceptionData = exception;
    }
    paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_REFUND_RESPONSE, Constants.LOG_ERROR, exceptionData);
    return paymentResponse;
  }
};

export default { refundResponse };
