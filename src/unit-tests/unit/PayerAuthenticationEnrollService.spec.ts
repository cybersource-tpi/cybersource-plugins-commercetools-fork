/* eslint-disable no-var */
/* eslint-disable functional/immutable-data */
/* eslint-disable import/order */
import test from 'ava';
import dotenv from 'dotenv';
dotenv.config();

import {cardTokensObject, cardTokenInvalidObject,cardinalReferenceId, cart , payment, paymentObjects, paymentSavedToken, cardTokensInvalidCustomerObject} from '../const/PayerAuthenticationEnrollServiceConst';
import enrollAuth from '../../service/payment/PayerAuthenticationEnrollService';

var enrollmentCheckResponse = {
    httpCode: null,
    status: null,
    };

var enrollmentCheckResponseObject = {
    httpCode: null,
    status: null,
    };


test.serial('Check http code for payer auth enrollment', async(t)=>{
    const result: any = await enrollAuth.payerAuthEnrollmentCheck(payment,
        cart,
        cardinalReferenceId,cardTokensObject);
        enrollmentCheckResponse.httpCode = result.httpCode;
        enrollmentCheckResponse.status = result.status;
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

test.serial('Check http code for payer auth enrollment with invalid token', async(t)=>{
    const result: any = await enrollAuth.payerAuthEnrollmentCheck(paymentObjects,
        cart,
        cardinalReferenceId, cardTokensObject);
        enrollmentCheckResponseObject.httpCode = result.httpCode;
        enrollmentCheckResponseObject.status = result.status;
        t.not(enrollmentCheckResponseObject.httpCode, 201);
})

test.serial('Check status for payer auth enrollment for invalid token', async(t)=>{
    
    let i =0;
    if(enrollmentCheckResponseObject.status=='PENDING_AUTHENTICATION' || enrollmentCheckResponseObject.status=='AUTHENTICATION_SUCCESSFUL')
    {
        i++;
    }
    t.is(i, 0);

})

test.serial('Check http code for payer auth enrollment with saved token', async(t)=>{
    const result: any = await enrollAuth.payerAuthEnrollmentCheck(paymentSavedToken,
        cart,
        cardinalReferenceId, cardTokensObject);
        enrollmentCheckResponse.httpCode = result.httpCode;
        enrollmentCheckResponse.status = result.status;
        t.is(enrollmentCheckResponse.httpCode, 201);
})

test.serial('Check status for payer auth enrollment with saved token', async(t)=>{
    
    let i =0;
    if(enrollmentCheckResponse.status=='PENDING_AUTHENTICATION' || enrollmentCheckResponse.status=='AUTHENTICATION_SUCCESSFUL')
    {
        i++;
    }
    t.is(i, 1);

})

test.serial('Check http code for payer auth enrollment with invalid saved token', async(t)=>{
    const result: any = await enrollAuth.payerAuthEnrollmentCheck(paymentSavedToken,
        cart,
        cardinalReferenceId, cardTokenInvalidObject);
        enrollmentCheckResponse.httpCode = result.httpCode;
        enrollmentCheckResponse.status = result.status;
        t.not(enrollmentCheckResponse.httpCode, 201);
})

test.serial('Check status for payer auth enrollment with invalid saved token', async(t)=>{
    
    let i =0;
    if(enrollmentCheckResponse.status=='PENDING_AUTHENTICATION' || enrollmentCheckResponse.status=='AUTHENTICATION_SUCCESSFUL')
    {
        i++;
    }
    t.is(i, 0);

})

test.serial('Check http code for payer auth enrollment with Invalid customer', async(t)=>{
    const result: any = await enrollAuth.payerAuthEnrollmentCheck(paymentSavedToken,
        cart,
        cardinalReferenceId, cardTokensInvalidCustomerObject);
        enrollmentCheckResponse.httpCode = result.httpCode;
        enrollmentCheckResponse.status = result.status;
        t.not(enrollmentCheckResponse.httpCode, 201);
})

test.serial('Check status for payer auth enrollment with invalid customer', async(t)=>{
    
    let i =0;
    if(enrollmentCheckResponse.status=='PENDING_AUTHENTICATION' || enrollmentCheckResponse.status=='AUTHENTICATION_SUCCESSFUL')
    {
        i++;
    }
    t.is(i, 0);

})

