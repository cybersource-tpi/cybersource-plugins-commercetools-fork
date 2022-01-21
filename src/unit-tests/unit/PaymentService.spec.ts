/* eslint-disable sort-imports */
/* eslint-disable import/order */
import test from  'ava';
import dotenv from 'dotenv';
dotenv.config();
import paymentService from '../../utils/PaymentService';
import {fieldMapperFields, fieldMapperFieldObject,getAuthResponsePaymentResponse,getAuthResponsePaymentResponseObject,getAuthResponseTransactionDetail,getOMServiceResponsePaymentResponse,getOMServiceResponsePaymentResponseObject,getOMServiceResponseTransactionDetail,visaCardDetailsActionVisaCheckoutData} from '../const/PaymentServiceConst';

test.serial('Field mapping for flex keys', async(t)=>{
    const result = await paymentService.fieldMapper(fieldMapperFields);
    t.pass();
    t.is(result[0].action, 'setCustomField');
    t.is(result[0].name, 'isv_tokenCaptureContextSignature');
    t.is(result[1].action, 'setCustomField');
    t.is(result[1].name, 'isv_tokenVerificationContext');
})

test.serial('Field mapping for saved token', async(t)=>{
    const result = await paymentService.fieldMapper(fieldMapperFieldObject);
    t.pass();
    t.is(result[0].action, 'setCustomField');
    t.is(result[0].name, 'isv_payerAuthenticationTransactionId');
    t.is(result[1].action, 'setCustomField');
    t.is(result[1].name, 'isv_payerAuthenticationRequired');
})

test.serial('Check visa card detail action ', async(t)=>{
    const result = await paymentService.visaCardDetailsAction(visaCardDetailsActionVisaCheckoutData);
    t.pass();
    t.is(result[0].action, 'setCustomField');
    t.is(result[0].name, 'isv_maskedPan');
    t.is(result[1].action, 'setCustomField');
    t.is(result[1].name, 'isv_cardExpiryMonth');
    t.is(result[2].action, 'setCustomField');
    t.is(result[2].name, 'isv_cardExpiryYear');
    t.is(result[3].action, 'setCustomField');
    t.is(result[3].name, 'isv_cardType');
})

test.serial("Get OM Service Response", async(t)=>{
    const result:any = await paymentService.getOMServiceResponse(getOMServiceResponsePaymentResponse, getOMServiceResponseTransactionDetail);
    t.pass();
    t.is(result.actions[0].action, 'changeTransactionInteractionId');
    t.is(result.actions[1].action, 'changeTransactionState');
    t.is(result.actions[1].state, 'Success');
})

test.serial("Get OM Service Response for failure", async(t)=>{
    const result:any = await paymentService.getOMServiceResponse(getOMServiceResponsePaymentResponseObject, getOMServiceResponseTransactionDetail);
    t.pass();
    t.is(result.actions[0].action, 'changeTransactionInteractionId');
    t.is(result.actions[1].action, 'changeTransactionState');
    t.is(result.actions[1].state, 'Failure');
    t.is(result.actions[2].action, "addInterfaceInteraction" )
    t.is(result.actions[2].type.key, "isv_payment_failure");
})

test.serial('Check response of get auth response with successful auth', async(t)=>{
    const result = await paymentService.getAuthResponse(getAuthResponsePaymentResponse, getAuthResponseTransactionDetail);
    t.pass();
    t.is(result.actions[0].action, 'changeTransactionInteractionId');
    t.is(result.actions[1].action, 'changeTransactionState');
    t.is(result.actions[1].state, 'Success');
})

test.serial('Check response of get auth response object when auth is pending', async(t)=>{
    const result = await paymentService.getAuthResponse(getAuthResponsePaymentResponseObject, getAuthResponseTransactionDetail);
    t.pass();
    t.is(result.actions[0].action, 'changeTransactionInteractionId');
    t.is(result.actions[1].action, 'changeTransactionState');
    t.is(result.actions[1].state, 'Pending');
})