import restApi from 'cybersource-rest-client';
import path from 'path';
import paymentService from '../../utils/PaymentService';
import { Constants } from '../../constants';

const authReversalResponse = async (payment, cart, authReversalId) => {
  let errorData: any;
  let exceptionData: any;
  let j = Constants.VAL_ZERO;
  let shippingCost = Constants.VAL_FLOAT_ZERO;
  let totalAmount = Constants.VAL_FLOAT_ZERO;
  let paymentResponse = {
    httpCode: null,
    transactionId: null,
    status: null,
    message: null,
  };
  let runEnvironment: any;
  try {
    if (null != authReversalId && null != payment && null != cart) {
      const apiClient = new restApi.ApiClient();
      var requestObj = new restApi.AuthReversalRequest();
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
      var clientReferenceInformation = new restApi.Ptsv2paymentsidreversalsClientReferenceInformation();
      clientReferenceInformation.code = payment.id;
      requestObj.clientReferenceInformation = clientReferenceInformation;

      var clientReferenceInformationpartner = new restApi.Ptsv2paymentsidreversalsClientReferenceInformationPartner();
      clientReferenceInformationpartner.solutionId = Constants.ISV_PAYMENT_PARTNER_SOLUTION_ID;
      clientReferenceInformation.partner = clientReferenceInformationpartner;
      requestObj.clientReferenceInformation = clientReferenceInformation;

      if (Constants.VISA_CHECKOUT == payment.paymentMethodInfo.method) {
        var processingInformation = new restApi.Ptsv2paymentsidreversalsProcessingInformation();
        processingInformation.paymentSolution = payment.paymentMethodInfo.method;
        processingInformation.visaCheckoutId = payment.custom.fields.isv_token;
        requestObj.processingInformation = processingInformation;
      } else if (Constants.GOOGLE_PAY == payment.paymentMethodInfo.method) {
        var processingInformation = new restApi.Ptsv2paymentsidreversalsProcessingInformation();
        processingInformation.paymentSolution = Constants.ISV_PAYMENT_GOOGLE_PAY_PAYMENT_SOLUTION;
        requestObj.processingInformation = processingInformation;
      } else if (Constants.APPLE_PAY == payment.paymentMethodInfo.method) {
        var processingInformation = new restApi.Ptsv2paymentsidreversalsProcessingInformation();
        processingInformation.paymentSolution = Constants.ISV_PAYMENT_APPLE_PAY_PAYMENT_SOLUTION;
        requestObj.processingInformation = processingInformation;
      }

      var orderInformation = new restApi.Ptsv2paymentsidreversalsOrderInformation();

      orderInformation.lineItems = [];
      cart.lineItems.forEach((lineItem) => {
        var orderInformationLineItems = new restApi.Ptsv2paymentsidreversalsOrderInformationLineItems();
        const unitPrice = paymentService.convertCentToAmount(lineItem.price.value.centAmount);
        orderInformationLineItems.productName = lineItem.name.en;
        orderInformationLineItems.quantity = lineItem.quantity;
        orderInformationLineItems.productSku = lineItem.variant.sku;
        orderInformationLineItems.productCode = lineItem.productId;
        orderInformationLineItems.unitPrice = unitPrice;
        orderInformation.lineItems[j] = orderInformationLineItems;
        j++;
      });
      if (Constants.SHIPPING_INFO in cart) {
        var orderInformationLineItems = new restApi.Ptsv2paymentsidreversalsOrderInformationLineItems();
        shippingCost = paymentService.convertCentToAmount(cart.shippingInfo.price.centAmount);
        orderInformationLineItems.productName = cart.shippingInfo.shippingMethodName;
        orderInformationLineItems.quantity = Constants.VAL_ONE;
        orderInformationLineItems.productSku = Constants.SHIPPING_AND_HANDLING;
        orderInformationLineItems.productCode = Constants.SHIPPING_AND_HANDLING;
        orderInformationLineItems.unitPrice = shippingCost;
        orderInformationLineItems.tax = cart.shippingInfo.taxRate.amount;
        orderInformation.lineItems[j] = orderInformationLineItems;
      }
      requestObj.orderInformation = orderInformation;

      totalAmount = paymentService.convertCentToAmount(payment.amountPlanned.centAmount);

      var orderInformationAmountDetails = new restApi.Ptsv2paymentsidreversalsOrderInformationAmountDetails();
      orderInformationAmountDetails.totalAmount = totalAmount;
      orderInformationAmountDetails.currency = payment.amountPlanned.currencyCode;
      orderInformation.amountDetails = orderInformationAmountDetails;

      var instance = new restApi.ReversalApi(configObject, apiClient);
      return await new Promise((resolve, reject) => {
        instance.authReversal(authReversalId, requestObj, function (error, data, response) {
          if (data) {
            paymentResponse.httpCode = response[Constants.STATUS_CODE];
            paymentResponse.transactionId = data.id;
            paymentResponse.status = data.status;
            paymentResponse.message = data.message;
            resolve(paymentResponse);
          } else if (error) {
            if (Constants.STRING_RESPONSE in error && Constants.STRING_TEXT in error.response) {
              errorData = JSON.parse(error.response.text.replace(Constants.REGEX_DOUBLE_SLASH, Constants.STRING_EMPTY));
              paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_AUTH_REVERSAL_RESPONSE, Constants.LOG_INFO, errorData);
              paymentResponse.transactionId = errorData.id;
              paymentResponse.status = errorData.status;
              paymentResponse.message = errorData.message;
            } else {
              paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_AUTH_REVERSAL_RESPONSE, Constants.LOG_INFO, error);
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
      paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_AUTH_REVERSAL_RESPONSE, Constants.LOG_INFO, Constants.ERROR_MSG_INVALID_INPUT);
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
    paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_AUTH_REVERSAL_RESPONSE, Constants.LOG_ERROR, exceptionData);
    return paymentResponse;
  }
};

export default { authReversalResponse };
