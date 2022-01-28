/* eslint-disable functional/no-let */
/* eslint-disable prefer-const */
/* eslint-disable import/order */
/* eslint-disable functional/immutable-data */
import test from 'ava';
import dotenv from 'dotenv';
dotenv.config();
import { captureId, captureID, payment, updateTransaction } from '../../const/ApplePay/PaymentRefundServiceConstAP';
import refundResponse from '../../../service/payment/PaymentRefundService';

let paymentResponse = {
    httpCode: null,
    transactionId: null,
    status: null,
    message: null,
  };

  let paymentResponseObject = {
    httpCode: null,
    transactionId: null,
    status: null,
    message: null,
  };

test.serial('Refunding a payment', async(t)=>{
    const result:any = await refundResponse.refundResponse(payment, captureId, updateTransaction);
    paymentResponse.httpCode = result.httpCode;
    paymentResponse.transactionId = result.transactionId;
    paymentResponse.status = result.status;
    paymentResponse.message = result.message;
    t.is(paymentResponse.httpCode, 201);
})

test.serial('Check status for payment refund ', async(t)=>{
  t.is(paymentResponse.status, 'PENDING');
})

test.serial('Refunding an invalid payment', async(t)=>{
  const result:any = await refundResponse.refundResponse(payment, captureID, updateTransaction);
  paymentResponseObject.httpCode = result.httpCode;
  paymentResponseObject.transactionId = result.transactionId;
  paymentResponseObject.status = result.status;
  paymentResponseObject.message = result.message;
  t.not(paymentResponseObject.httpCode, 201);
})

test.serial('Check status for invalid refund ', async(t)=>{
  t.not(paymentResponseObject.status, 'PENDING')
})

