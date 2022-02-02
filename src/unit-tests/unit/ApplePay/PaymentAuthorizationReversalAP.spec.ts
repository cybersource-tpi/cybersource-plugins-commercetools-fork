import test from 'ava';
import dotenv from 'dotenv';
dotenv.config();
import { authReversalId, authReversalID, cart,  payment, payments} from '../../const/ApplePay/PaymentAuthorizationReversalConstAP';
import authReversalResponse from '../../../service/payment/PaymentAuthorizationReversal';

let paymentResponse = {
    httpCode: null,
    transactionId: null,
    status: null,
    message: null,
  };

test.serial('Reversing a payment with invalid amount ', async(t)=>{
  const result:any = await authReversalResponse.authReversalResponse(payments, cart, authReversalId);
    paymentResponse.httpCode = result.httpCode;
    paymentResponse.transactionId = result.transactionId;
    paymentResponse.status = result.status;
    paymentResponse.message = result.message;
    t.not(paymentResponse.httpCode, 201);
})

test.serial('Check status for auth reversal with invalid amount ', async(t)=>{
  t.not(paymentResponse.status, 'REVERSED');
})

test.serial('Reversing a payment', async(t)=>{
    const result:any = await authReversalResponse.authReversalResponse(payment, cart, authReversalId);
    paymentResponse.httpCode = result.httpCode;
    paymentResponse.transactionId = result.transactionId;
    paymentResponse.status = result.status;
    paymentResponse.message = result.message;
    t.is(paymentResponse.httpCode, 201);
})

test.serial('Check status for auth reversal ', async(t)=>{
  t.is(paymentResponse.status, 'REVERSED');
})

test.serial('Reversing an invalid payment ', async(t)=>{
  const result:any = await authReversalResponse.authReversalResponse(payment, cart, authReversalID);
  paymentResponse.httpCode = result.httpCode;
  paymentResponse.transactionId = result.transactionId;
  paymentResponse.status = result.status;
  paymentResponse.message = result.message;
  t.not(paymentResponse.httpCode, 201)
})

test.serial('Check status for  auth reversal for invalid payment ', async(t)=>{
  t.not(paymentResponse.status, 'REVERSED');
})