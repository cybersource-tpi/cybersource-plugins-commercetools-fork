/* eslint-disable sort-imports */
/* eslint-disable prefer-const */
/* eslint-disable functional/no-let */
/* eslint-disable functional/immutable-data */
/* eslint-disable import/order */

import test from 'ava';
import dotenv from 'dotenv';
dotenv.config();

<<<<<<< HEAD
import { cart, cardTokens, payment, payments, service, dontSaveTokenFlag } from '../../const/ApplePay/PaymentAuthorizationServiceConstAP';
=======
import { cart, cardTokens, payment, payments, service, dontSaveTokenFlag, payerAuthMandateFlag } from '../../const/ApplePay/PaymentAuthorizationServiceConstAP';
>>>>>>> feature
import auth from '../../../service/payment/PaymentAuthorizationService';

let paymentResponse = {
  httpCode: null,
  status: null,
};

test.serial('Authorizing a payment and check http code', async (t) => {
<<<<<<< HEAD
  const result: any = await auth.authorizationResponse(payment, cart, service, cardTokens, dontSaveTokenFlag);
=======
  const result: any = await auth.authorizationResponse(payment, cart, service, cardTokens, dontSaveTokenFlag, payerAuthMandateFlag);
>>>>>>> feature
  paymentResponse.httpCode = result.httpCode;
  paymentResponse.status = result.status;
  t.is(paymentResponse.httpCode, 201);
});

test.serial('Check status for payment authorization ', async (t) => {
  if (paymentResponse.status == 'AUTHORIZED') {
    t.is(paymentResponse.status, 'AUTHORIZED');
  } else if (paymentResponse.status == 'AUTHORIZED_PENDING_REVIEW') {
    t.is(paymentResponse.status, 'AUTHORIZED_PENDING_REVIEW');
  } else if (paymentResponse.status == 'DECLINED') {
    t.is(paymentResponse.status, 'DECLINED');
  }
});

test.serial('Authorizing a payment using invalid token and check http code', async (t) => {
<<<<<<< HEAD
  const result: any = await auth.authorizationResponse(payments, cart, service, cardTokens, dontSaveTokenFlag);
=======
  const result: any = await auth.authorizationResponse(payments, cart, service, cardTokens, dontSaveTokenFlag, payerAuthMandateFlag);
>>>>>>> feature
  paymentResponse.httpCode = result.httpCode;
  paymentResponse.status = result.status;
  t.not(paymentResponse.httpCode, 201);
});

test.serial('Check status for invalid authorization', async (t) => {
  var i = 0;
  if (paymentResponse.status == 'AUTHORIZED' || paymentResponse.status == 'DECLINED' || paymentResponse.status == 'AUTHORIZED_PENDING_REVIEW') {
    i++;
  }
  t.is(i, 0);
});
