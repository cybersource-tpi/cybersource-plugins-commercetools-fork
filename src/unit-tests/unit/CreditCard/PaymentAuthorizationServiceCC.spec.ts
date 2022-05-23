/* eslint-disable sort-imports */
/* eslint-disable prefer-const */
/* eslint-disable functional/no-let */
/* eslint-disable functional/immutable-data */
/* eslint-disable import/order */

import test from 'ava';
import dotenv from 'dotenv';
dotenv.config();

<<<<<<< HEAD
import { cart, cardTokens, cardTokensObject, cardTokenInvalidObject, payment, payments, service, dontSaveTokenFlag } from '../../const/CreditCard/PaymentAuthorizationServiceConstCC';
=======
import { cart, cardTokens, cardTokensObject, cardTokenInvalidObject, payment, payments, paymentToken, service, dontSaveTokenFlag, payerAuthMandateFlag } from '../../const/CreditCard/PaymentAuthorizationServiceConstCC';
>>>>>>> feature
import auth from '../../../service/payment/PaymentAuthorizationService';

let paymentResponse = {
  httpCode: null,
  status: null,
};

<<<<<<< HEAD
test.serial.skip('Authorizing a payment and check http code', async (t) => {
  const result: any = await auth.authorizationResponse(payment, cart, service, cardTokens, dontSaveTokenFlag);
  console.log("result   1", result);
=======
test.serial('Authorizing a payment and check http code', async (t) => {
  const result: any = await auth.authorizationResponse(payment, cart, service, cardTokens, dontSaveTokenFlag, payerAuthMandateFlag);
>>>>>>> feature
  paymentResponse.httpCode = result.httpCode;
  paymentResponse.status = result.status;
  t.is(paymentResponse.httpCode, 201);
});

<<<<<<< HEAD
test.serial.skip('Check status of payment authorization', async (t) => {
=======
test.serial('Check status of payment authorization', async (t) => {
>>>>>>> feature
  if (paymentResponse.status == 'AUTHORIZED') {
    t.is(paymentResponse.status, 'AUTHORIZED');
  } else if (paymentResponse.status == 'AUTHORIZED_PENDING_REVIEW') {
    t.is(paymentResponse.status, 'AUTHORIZED_PENDING_REVIEW');
  } else if (paymentResponse.status == 'DECLINED') {
    t.is(paymentResponse.status, 'DECLINED');
  }
});

<<<<<<< HEAD
test.serial.skip('Authorizing a payment using saved card and check http code', async (t) => {
  const result: any = await auth.authorizationResponse(payments, cart, service, cardTokens, dontSaveTokenFlag);
=======
test.serial('Authorizing a payment using saved card and check http code', async (t) => {
  const result: any = await auth.authorizationResponse(payments, cart, service, cardTokens, dontSaveTokenFlag, payerAuthMandateFlag);
>>>>>>> feature
  paymentResponse.httpCode = result.httpCode;
  paymentResponse.status = result.status;
  t.is(paymentResponse.httpCode, 201);
});

<<<<<<< HEAD
test.serial.skip('Check status of payment authorization using saved card', async (t) => {
=======
test.serial('Check status of payment authorization using saved card', async (t) => {
>>>>>>> feature
  if (paymentResponse.status == 'AUTHORIZED') {
    t.is(paymentResponse.status, 'AUTHORIZED');
  } else if (paymentResponse.status == 'AUTHORIZED_PENDING_REVIEW') {
    t.is(paymentResponse.status, 'AUTHORIZED_PENDING_REVIEW');
  } else if (paymentResponse.status == 'DECLINED') {
    t.is(paymentResponse.status, 'DECLINED');
  }
});

<<<<<<< HEAD

test.serial('Authorizing a payment using saved card with invalid customer and check http code', async (t) => {
  const result: any = await auth.authorizationResponse(payments, cart, service, cardTokensObject, dontSaveTokenFlag);
=======
test.serial('Authorizing a payment using invalid access token and check http code', async (t) => {
  const result: any = await auth.authorizationResponse(paymentToken, cart, service, cardTokens, dontSaveTokenFlag, payerAuthMandateFlag);
  paymentResponse.httpCode = result.httpCode;
  paymentResponse.status = result.status;
  t.not(paymentResponse.httpCode, 201);
});

test.serial('Check status of payment authorization with invalid access token', async (t) => {
  var i = 0;
  if (paymentResponse.status == 'AUTHORIZED' || paymentResponse.status == 'DECLINED' || paymentResponse.status == 'AUTHORIZED_PENDING_REVIEW') {
    i++;
  }
  t.is(i, 0);
});

test.serial('Authorizing a payment using saved card with invalid customer and check http code', async (t) => {
  const result: any = await auth.authorizationResponse(payments, cart, service, cardTokensObject, dontSaveTokenFlag, payerAuthMandateFlag);
>>>>>>> feature
  paymentResponse.httpCode = result.httpCode;
  paymentResponse.status = result.status;
  t.not(paymentResponse.httpCode, 201);
});

test.serial('Check status of payment authorization with invalid customer', async (t) => {
  var i = 0;
  if (paymentResponse.status == 'AUTHORIZED' || paymentResponse.status == 'DECLINED' || paymentResponse.status == 'AUTHORIZED_PENDING_REVIEW') {
    i++;
  }
  t.is(i, 0);
});

test.serial('Authorizing a payment using invalid saved card ', async (t) => {
<<<<<<< HEAD
  const result: any = await auth.authorizationResponse(payments, cart, service, cardTokenInvalidObject, dontSaveTokenFlag);
=======
  const result: any = await auth.authorizationResponse(payments, cart, service, cardTokenInvalidObject, dontSaveTokenFlag, payerAuthMandateFlag);
>>>>>>> feature
  paymentResponse.httpCode = result.httpCode;
  paymentResponse.status = result.status;
  t.not(paymentResponse.httpCode, 201);
});

test.serial('Check status of payment authorization with invalid saved token', async (t) => {
  var i = 0;
  if (paymentResponse.status == 'AUTHORIZED' || paymentResponse.status == 'DECLINED' || paymentResponse.status == 'AUTHORIZED_PENDING_REVIEW') {
    i++;
  }
  t.is(i, 0);
});
