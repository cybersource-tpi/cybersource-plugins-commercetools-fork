/* eslint-disable sort-imports */
/* eslint-disable prefer-const */
/* eslint-disable functional/no-let */
/* eslint-disable functional/immutable-data */
/* eslint-disable import/order */

import test from 'ava';
import dotenv from 'dotenv';
dotenv.config();

import { cart, payment, payments, service } from '../../const/ApplePay/PaymentAuthorizationServiceConstAP';
import auth from '../../../service/payment/PaymentAuthorizationService';

let paymentResponse = {
  httpCode: null,
  transactionId: null,
  status: null,
  message: null,
  data: null,
};

test.serial('Authorizing a payment', async (t) => {
  const result: any = await auth.authorizationResponse(payment, cart, service, null);
  paymentResponse.httpCode = result.httpCode;
  paymentResponse.transactionId = result.transactionId;
  paymentResponse.status = result.status;
  paymentResponse.message = result.message;
  paymentResponse.data = result.data;
  t.is(paymentResponse.httpCode, 201);
});

test.serial('Check status for authorization ', async (t) => {
  if (paymentResponse.status == 'AUTHORIZED') {
    t.is(paymentResponse.status, 'AUTHORIZED');
  } else if (paymentResponse.status == 'AUTHORIZED_PENDING_REVIEW') {
    t.is(paymentResponse.status, 'AUTHORIZED_PENDING_REVIEW');
  }
});

test.serial('Authorizing a payment using invalid token', async (t) => {
  const result: any = await auth.authorizationResponse(payments, cart, service, null);
  paymentResponse.httpCode = result.httpCode;
  paymentResponse.transactionId = result.transactionId;
  paymentResponse.status = result.status;
  paymentResponse.message = result.message;
  paymentResponse.data = result.data;
  t.not(paymentResponse.httpCode, 201);
});

test.serial('Check status for invalid auth', async (t) => {
  t.not(paymentResponse.status, 'AUTHORIZED');
});
