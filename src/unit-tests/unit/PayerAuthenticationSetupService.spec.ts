/* eslint-disable sort-imports */
/* eslint-disable functional/immutable-data */
/* eslint-disable import/order */
import test from 'ava';
import dotenv from 'dotenv';

dotenv.config();
import { payments, paymentObject } from '../const/PayerAuthenticationSetupServiceConst';
import setupService from '../../service/payment/PayerAuthenticationSetupService';

const paymentResponse = {
  accessToken: null,
  referenceId: null,
  deviceDataCollectionUrl: null,
  httpCode: null,
  transactionId: null,
  status: null,
  message: null,
};

test.serial('Setting set up service for payer auth', async (t) => {
  const result: any = await setupService.payerAuthSetupResponse(payments, null);
  paymentResponse.accessToken = result.accessToken;
  paymentResponse.referenceId = result.refernceId;
  paymentResponse.deviceDataCollectionUrl = result.deviceDataCollectionUrl;
  paymentResponse.httpCode = result.httpCode;
  paymentResponse.transactionId = result.transactionId;
  paymentResponse.status = result.status;
  paymentResponse.message = result.messsage;
  t.pass();
});

test.serial('Check http code for payer auth set up', async (t) => {
  t.is(paymentResponse.httpCode, 201);
});

test.serial('Check status fo payer auth set up', async (t) => {
  t.is(paymentResponse.status, 'COMPLETED');
});

test.serial('Payer auth enroll  with invalid token ', async (t) => {
  const result: any = await setupService.payerAuthSetupResponse(paymentObject, null);
  paymentResponse.accessToken = result.accessToken;
  paymentResponse.referenceId = result.refernceId;
  paymentResponse.deviceDataCollectionUrl = result.deviceDataCollectionUrl;
  paymentResponse.httpCode = result.httpCode;
  paymentResponse.transactionId = result.transactionId;
  paymentResponse.status = result.status;
  paymentResponse.message = result.messsage;
  t.pass();
});

test.serial('Check http code for payer auth enroll for invalid token', async (t) => {
  t.not(paymentResponse.httpCode, 201);
});

test.serial('Check status for payer auth enroll for ivalid token', async (t) => {
  t.not(paymentResponse.status, 'COMPLETED');
});
