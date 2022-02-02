/* eslint-disable functional/immutable-data */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */
import test from 'ava';
import dotenv from 'dotenv';

dotenv.config();
import { authId, authID, cart, payment } from '../../const/ApplePay/PaymentCaptureServiceConstAP';
import capture from '../../../service/payment/PaymentCaptureService';

var paymentResponse = {
    httpCode: null,
    transactionId: null,
    status: null,
    message: null,
  };
  var paymentResponseObject = {
    httpCode: null,
    transactionId: null,
    status: null,
    message: null,
  };

test.serial('Capturing a payment', async(t)=>{
    const result: any = await capture.captureResponse(payment, cart, authId);
    paymentResponse.httpCode = result.httpCode;
    paymentResponse.transactionId = result.transactionId;
    paymentResponse.status = result.status;
    paymentResponse.message = result.message;
    t.is(paymentResponse.httpCode, 201);
      
  
})

test.serial('Check status for payment capture ', async(t)=>{

  t.is(paymentResponse.status, 'PENDING');
  
})

test.serial('Capturing an invalid payment ', async(t)=>{
  const result: any = await capture.captureResponse(payment, cart, authID);
  paymentResponseObject.httpCode = result.httpCode;
  paymentResponseObject.transactionId = result.transactionId;
  paymentResponseObject.status = result.status;
  paymentResponseObject.message = result.message;
  t.not(paymentResponseObject.httpCode, 201);
})

test('Check status for an invalid capture ', async(t)=>{

  t.not(paymentResponseObject.status, 'PENDING');

})
