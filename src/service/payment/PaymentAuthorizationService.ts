import restApi from 'cybersource-rest-client';
import path from 'path';
import paymentService from '../../utils/PaymentService';
import { Constants } from '../../constants';

const authorizationResponse = async (payment, cart, service, cardTokens) => {
  let errorData: any;
  let exceptionData: any;
  let j = Constants.VAL_ZERO;
  let totalAmount = Constants.VAL_FLOAT_ZERO;
  let unitPrice = Constants.VAL_FLOAT_ZERO;
  let shippingCost = Constants.VAL_FLOAT_ZERO;
  let actionList = new Array();
  let runEnvironment: any;
  let paymentResponse = {
    httpCode: null,
    transactionId: null,
    status: null,
    message: null,
    data: null,
  };
  try {
    if (null != payment && null != cart && null != service) {
      const apiClient = new restApi.ApiClient();
      var requestObj = new restApi.CreatePaymentRequest();
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
      var clientReferenceInformation = new restApi.Ptsv2paymentsClientReferenceInformation();
      clientReferenceInformation.code = payment.id;
      requestObj.clientReferenceInformation = clientReferenceInformation;

      var clientReferenceInformationpartner = new restApi.Ptsv2paymentsClientReferenceInformationPartner();
      clientReferenceInformationpartner.solutionId = Constants.ISV_PAYMENT_PARTNER_SOLUTION_ID;
      clientReferenceInformation.partner = clientReferenceInformationpartner;
      requestObj.clientReferenceInformation = clientReferenceInformation;

      var processingInformation = new restApi.Ptsv2paymentsProcessingInformation();
      if (Constants.STRING_FALSE == process.env.ISV_PAYMENT_DECISION_MANAGER) {
        actionList.push(Constants.ISV_PAYMENT_DECISION_SKIP);
      } else {
        processingInformation.actionList = actionList;
      }
      if (Constants.VALIDATION == service) {
        actionList.push(Constants.ISV_PAYMENT_VALIDATE_CONSUMER_AUTHENTICATION);
      }
      if (null == payment.custom.fields.isv_savedToken && Constants.ISV_TOKEN_ALIAS in payment.custom.fields) {
        actionList.push(Constants.ISV_PAYMENT_TOKEN_CREATE);
        if (null != cardTokens && null != cardTokens.customerTokenId) {
          processingInformation.actionTokenTypes = Constants.ISV_PAYMENT_TOKEN_ACTION_TYPES_CUSTOMER_EXISTS;
        } else {
          processingInformation.actionTokenTypes = Constants.ISV_PAYMENT_TOKEN_ACTION_TYPES;
        }
      }
      processingInformation.actionList = actionList;
      var paymentInformation = new restApi.Ptsv2paymentsPaymentInformation();
      var tokenInformation = new restApi.Ptsv2paymentsTokenInformation();
      if (Constants.CREDIT_CARD == payment.paymentMethodInfo.method || Constants.CC_PAYER_AUTHENTICATION == payment.paymentMethodInfo.method) {
        if (Constants.ISV_SAVED_TOKEN in payment.custom.fields) {
          var paymentInformationCustomer = new restApi.Ptsv2paymentsPaymentInformationCustomer();
          paymentInformationCustomer.id = cardTokens.customerTokenId;
          paymentInformation.customer = paymentInformationCustomer;
          var paymentInformatioPaymentInstrument = new restApi.Ptsv2paymentsPaymentInformationPaymentInstrument();
          paymentInformatioPaymentInstrument.id = cardTokens.paymentInstrumentId;
          paymentInformation.paymentInstrument = paymentInformatioPaymentInstrument;
        } else {
          if (null != cardTokens && null != cardTokens.customerTokenId) {
            var paymentInformationCustomer = new restApi.Ptsv2paymentsPaymentInformationCustomer();
            paymentInformationCustomer.id = cardTokens.customerTokenId;
            paymentInformation.customer = paymentInformationCustomer;
          }
          var paymentInformationCard = new restApi.Ptsv2paymentsPaymentInformationCard();
          paymentInformationCard.typeSelectionIndicator = Constants.VAL_ONE;
          paymentInformation.card = paymentInformationCard;
          tokenInformation.transientTokenJwt = payment.custom.fields.isv_token;
          requestObj.tokenInformation = tokenInformation;
        }
        if (Constants.VALIDATION == service) {
          var consumerAuthenticationInformation = new restApi.Ptsv2paymentsConsumerAuthenticationInformation();
          consumerAuthenticationInformation.authenticationTransactionId = payment.custom.fields.isv_payerAuthenticationTransactionId;
          consumerAuthenticationInformation.signedPares = payment.custom.fields.isv_payerAuthenticationPaReq;
          requestObj.consumerAuthenticationInformation = consumerAuthenticationInformation;
        }
      } else if (Constants.VISA_CHECKOUT == payment.paymentMethodInfo.method) {
        processingInformation.paymentSolution = payment.paymentMethodInfo.method;
        processingInformation.visaCheckoutId = payment.custom.fields.isv_token;
      } else if (Constants.GOOGLE_PAY == payment.paymentMethodInfo.method) {
        processingInformation.paymentSolution = Constants.ISV_PAYMENT_GOOGLE_PAY_PAYMENT_SOLUTION;
        var fluidData = new restApi.Ptsv2paymentsPaymentInformationFluidData();
        fluidData.value = payment.custom.fields.isv_token;
        paymentInformation.fluidData = fluidData;
      } else if (Constants.APPLE_PAY == payment.paymentMethodInfo.method) {
        processingInformation.paymentSolution = Constants.ISV_PAYMENT_APPLE_PAY_PAYMENT_SOLUTION;
        var paymentInformationFluidData = new restApi.Ptsv2paymentsPaymentInformationFluidData();
        paymentInformationFluidData.value = payment.custom.fields.isv_token;
        paymentInformation.fluidData = paymentInformationFluidData;
      }
      requestObj.processingInformation = processingInformation;
      requestObj.paymentInformation = paymentInformation;

      totalAmount = paymentService.convertCentToAmount(payment.amountPlanned.centAmount);

      var orderInformation = new restApi.Ptsv2paymentsOrderInformation();
      var orderInformationAmountDetails = new restApi.Ptsv2paymentsOrderInformationAmountDetails();
      orderInformationAmountDetails.totalAmount = totalAmount;
      orderInformationAmountDetails.currency = payment.amountPlanned.currencyCode;
      orderInformation.amountDetails = orderInformationAmountDetails;

      var orderInformationBillTo = new restApi.Ptsv2paymentsOrderInformationBillTo();
      orderInformationBillTo.firstName = cart.billingAddress.firstName;
      orderInformationBillTo.lastName = cart.billingAddress.lastName;
      orderInformationBillTo.address1 = cart.billingAddress.streetName;
      orderInformationBillTo.locality = cart.billingAddress.city;
      orderInformationBillTo.administrativeArea = cart.billingAddress.region;
      orderInformationBillTo.postalCode = cart.billingAddress.postalCode;
      orderInformationBillTo.country = cart.billingAddress.country;
      orderInformationBillTo.email = cart.billingAddress.email;
      orderInformationBillTo.phoneNumber = cart.billingAddress.phone;
      orderInformation.billTo = orderInformationBillTo;
      requestObj.orderInformation = orderInformation;

      var orderInformationShipTo = new restApi.Ptsv2paymentsOrderInformationShipTo();
      orderInformationShipTo.firstName = cart.shippingAddress.firstName;
      orderInformationShipTo.lastName = cart.shippingAddress.lastName;
      orderInformationShipTo.address1 = cart.shippingAddress.streetName;
      orderInformationShipTo.locality = cart.shippingAddress.city;
      orderInformationShipTo.administrativeArea = cart.shippingAddress.region;
      orderInformationShipTo.postalCode = cart.shippingAddress.postalCode;
      orderInformationShipTo.country = cart.shippingAddress.country;
      orderInformationShipTo.email = cart.shippingAddress.email;
      orderInformationShipTo.phoneNumber = cart.shippingAddress.phone;
      orderInformation.shipTo = orderInformationShipTo;
      requestObj.orderInformation = orderInformation;

      orderInformation.lineItems = [];
      cart.lineItems.forEach((lineItem) => {
        var orderInformationLineItems = new restApi.Ptsv2paymentsOrderInformationLineItems();
        unitPrice = paymentService.convertCentToAmount(lineItem.price.value.centAmount);
        orderInformationLineItems.productName = lineItem.name.en;
        orderInformationLineItems.quantity = lineItem.quantity;
        orderInformationLineItems.productSku = lineItem.variant.sku;
        orderInformationLineItems.productCode = lineItem.productId;
        orderInformationLineItems.unitPrice = unitPrice;
        orderInformation.lineItems[j] = orderInformationLineItems;
        j++;
      });
      if (Constants.SHIPPING_INFO in cart) {
        var orderInformationLineItems = new restApi.Ptsv2paymentsOrderInformationLineItems();
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

      var deviceInformation = new restApi.Ptsv2paymentsDeviceInformation();
      deviceInformation.fingerprintSessionId = payment.custom.fields.isv_deviceFingerprintId;
      requestObj.deviceInformation = deviceInformation;
      const instance = new restApi.PaymentsApi(configObject, apiClient);
      return await new Promise(function (resolve, reject) {
        instance.createPayment(requestObj, function (error, data, response) {
          if (data) {
            paymentResponse.httpCode = response[Constants.STATUS_CODE];
            paymentResponse.transactionId = data.id;
            paymentResponse.status = data.status;
            paymentResponse.message = data.message;
            paymentResponse.data = data;
            resolve(paymentResponse);
          } else {
            errorData = JSON.parse(error.response.text.replace(Constants.REGEX_DOUBLE_SLASH, Constants.STRING_EMPTY));
            paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_AUTHORIZATION_RESPONSE, Constants.LOG_INFO, errorData.message);
            paymentResponse.httpCode = error.status;
            paymentResponse.transactionId = errorData.id;
            paymentResponse.status = errorData.status;
            paymentResponse.message = errorData.message;
            reject(paymentResponse);
          }
        });
      }).catch((error) => {
        paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_AUTHORIZATION_RESPONSE, Constants.LOG_INFO, error.message);
        return paymentResponse;
      });
    } else {
      paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_AUTHORIZATION_RESPONSE, Constants.LOG_INFO, Constants.ERROR_MSG_INVALID_INPUT);
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
    paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_AUTHORIZATION_RESPONSE, Constants.LOG_ERROR, exceptionData);
    return paymentResponse;
  }
};

export default { authorizationResponse };
