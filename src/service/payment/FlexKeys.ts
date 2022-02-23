import restApi from 'cybersource-rest-client';
import path from 'path';
import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';
import { Constants } from '../../constants';
import paymentService from '../../utils/PaymentService';

const keys = async () => {
  let runEnvironment: any;
  let errorData: any;
  let exceptionData: any;
  let contextWithoutSignature: string;
  let parsedContext: string;
  let isv_tokenCaptureContextSignature = Constants.STRING_EMPTY;
  let isv_tokenVerificationContext = Constants.STRING_EMPTY;
  const format = Constants.ISV_PAYMENT_JWT_FORMAT;
  try {
    const apiClient = new restApi.ApiClient();
    if (process.env.ISV_PAYMENT_RUN_ENVIRONMENT?.toUpperCase() == Constants.TEST_ENVIRONMENT) {
      runEnvironment = Constants.ISV_PAYMENT_TEST_ENVIRONMENT;
    } else if (process.env.ISV_PAYMENT_RUN_ENVIRONMENT?.toUpperCase() == Constants.LIVE_ENVIRONMENT) {
      runEnvironment = Constants.ISV_PAYMENT_PRODUCTION_ENVIRONMENT;
    }
    const configObject = {
      authenticationType: Constants.ISV_PAYMENT_AUTHENTICATION_TYPE,
      runEnvironment: runEnvironment,
      merchantID: process.env.ISV_PAYMENT_MERCHANT_ID,
      merchantKeyId: process.env.ISV_PAYMENT_MERCHANT_KEY_ID,
      merchantsecretKey: process.env.ISV_PAYMENT_MERCHANT_SECRET_KEY,
    };
    // eslint-disable-next-line no-var
    var requestObj = new restApi.GeneratePublicKeyRequest();
    requestObj.encryptionType = Constants.ISV_PAYMENT_ENCRYPTION_TYPE;
    requestObj.targetOrigin = process.env.ISV_PAYMENT_TARGET_ORIGIN;
    const instance = new restApi.KeyGenerationApi(configObject, apiClient);
    return await new Promise(function (resolve, reject) {
      instance.generatePublicKey(format, requestObj, function (error, data, response) {
        if (data) {
          isv_tokenCaptureContextSignature = data.keyId;
          contextWithoutSignature = isv_tokenCaptureContextSignature.substring(Constants.VAL_ZERO, isv_tokenCaptureContextSignature.lastIndexOf(Constants.REGEX_DOT) + Constants.VAL_ONE);
          parsedContext = jwt_decode(contextWithoutSignature);
          isv_tokenVerificationContext = jwt.sign(parsedContext, process.env.ISV_PAYMENT_VERIFICATION_KEY);
          resolve({
            isv_tokenCaptureContextSignature,
            isv_tokenVerificationContext,
          });
        } else if (error) {
          if (Constants.STRING_RESPONSE in error && Constants.STRING_TEXT in error.response) {
            errorData = JSON.parse(error.response.text.replace(Constants.REGEX_DOUBLE_SLASH, Constants.STRING_EMPTY));
            paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_KEYS, Constants.LOG_INFO, Constants.ERROR_MSG_FLEX_TOKEN_KEYS + Constants.STRING_HYPHEN + errorData);
          } else {
            paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_KEYS, Constants.LOG_INFO, Constants.ERROR_MSG_FLEX_TOKEN_KEYS + Constants.STRING_HYPHEN + error);
          }
          isv_tokenCaptureContextSignature = Constants.STRING_EMPTY;
          isv_tokenVerificationContext = Constants.STRING_EMPTY;
          reject({
            isv_tokenCaptureContextSignature,
            isv_tokenVerificationContext,
          });
        } else {
          reject({
            isv_tokenCaptureContextSignature,
            isv_tokenVerificationContext,
          });
        }
      });
    }).catch((error) => {
      return { isv_tokenCaptureContextSignature, isv_tokenVerificationContext };
    });
  } catch (exception) {
    if (typeof exception === 'string') {
      exceptionData = exception.toUpperCase();
    } else if (exception instanceof Error) {
      exceptionData = exception.message;
    } else {
      exceptionData = exception;
    }
    paymentService.logData(path.parse(path.basename(__filename)).name, Constants.FUNC_KEYS, Constants.LOG_ERROR, exceptionData);
    return { isv_tokenCaptureContextSignature, isv_tokenVerificationContext };
  }
};

export default { keys };
