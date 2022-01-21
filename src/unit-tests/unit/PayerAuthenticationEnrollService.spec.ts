/* eslint-disable no-var */
/* eslint-disable functional/immutable-data */
/* eslint-disable import/order */
import test from 'ava';
import dotenv from 'dotenv';
dotenv.config();

import {cardinalReferenceId, cart , payment, paymentObjects} from '../const/PayerAuthenticationEnrollServiceConst';
import enrollAuth from '../../service/payment/PayerAuthenticationEnrollService';

var enrollmentCheckResponse = {
    httpCode: null,
    transactionId: null,
    status: null,
    message: null,
    data: null,
    cardinalReferenceId: null,
  };


test.serial('Payer auth enrollment', async(t)=>{
    const result: any = await enrollAuth.payerAuthEnrollmentCheck(payment,
        cart,
        cardinalReferenceId);
        enrollmentCheckResponse.httpCode = result.httpCode;
        enrollmentCheckResponse.transactionId = result.transactionId;
        enrollmentCheckResponse.status = result.status;
        enrollmentCheckResponse.message = result.message;
        enrollmentCheckResponse.data = result.data;
        enrollmentCheckResponse.cardinalReferenceId = result.cardinalReferenceId;
    t.pass();
})

test.serial('Check http code for payer auth enrollment', async(t)=>{
    
    t.is(enrollmentCheckResponse.httpCode, 201);

})

test.serial('Check status for payer auth enrollment ', async(t)=>{
    
    let i =0;
    if(enrollmentCheckResponse.status=='PENDING_AUTHENTICATION' || enrollmentCheckResponse.status=='AUTHENTICATION_SUCCESSFUL')
    {
        i++;
    }
    t.is(i, 1);

})

test.serial('Payer auth enrollment with invalid token', async(t)=>{
    const result: any = await enrollAuth.payerAuthEnrollmentCheck(paymentObjects,
        cart,
        cardinalReferenceId);
        enrollmentCheckResponse.httpCode = result.httpCode;
        enrollmentCheckResponse.transactionId = result.transactionId;
        enrollmentCheckResponse.status = result.status;
        enrollmentCheckResponse.message = result.message;
        enrollmentCheckResponse.data = result.data;
        enrollmentCheckResponse.cardinalReferenceId = result.cardinalReferenceId;
    t.pass();
})

test.serial('Check http code for payer auth enrollment with invalid token', async(t)=>{
    
    t.not(enrollmentCheckResponse.httpCode, 201);

})

test.serial('Check status for payer auth enrollment for invalid token', async(t)=>{
    
    let i =0;
    if(enrollmentCheckResponse.status=='PENDING_AUTHENTICATION' || enrollmentCheckResponse.status=='AUTHENTICATION_SUCCESSFUL')
    {
        i++;
    }
    t.is(i, 0);

})

