/* eslint-disable sort-imports */
/* eslint-disable no-var */
/* eslint-disable functional/immutable-data */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable import/order */
import test from 'ava';

import dotenv from 'dotenv';
dotenv.config();
import unit from '../JSON/unit.json'

import paymentHandler from '../../utils/PaymentHandler';

import {updateCardHandlerCustomerId,updateCardHandlerTokens, updateCardHandlerCustomerObj} from '../const/PaymentHandlerConst';
import {orderManagementHandlerPaymentId,  orderManagementHandlerUpdateTransactions} from '../const/PaymentHandlerConst'
import {deleteCardHandlerUpdateCustomerObj, deleteCardHandlerCutsomerId} from '../const/PaymentHandlerConst';
import {applePaySessionHandlerFields} from '../const/PaymentHandlerConst';
import { authorizationHandlerAPUpdatePaymentObject,authorizationHandler3DSUpdatePaymentObject,authorizationHandlerCCUpdatePaymentObject, authoriationHandlerGPUpdatePaymentObject,authorizationHandlerVSUpdatePaymentObject, authorizationHandlerUpdateTransactions } from '../const/PaymentHandlerConst';
import {getPayerAuthEnrollResponseUpdatePaymentObj} from '../const/PaymentHandlerConst';
import {getPayerAuthReversalHandlerUpdatePaymentObject, getPayerAuthReversalHandlerPaymentResponse, getPayerAuthReversalHandlerUpdateTransactions, getPayerAuthReversalHandlerUpdateActions, getPayerAuthValidateResponseUpdatePaymentObj} from '../const/PaymentHandlerConst'
import CommercetoolsApi from '../../utils/api/CommercetoolsApi';



test.serial.skip('Check for report handller ', async (t)=>{
    const result =await paymentHandler.reportHandler();
    if(result.error=='There were no payment details found to update')
    {
        t.is(result.error, 'There were no payment details found to update');
        t.is(result.message, '');
    }
    else if(result.message=='Successfully completed DecisionSync')
    {
        t.is(result.message, 'Successfully completed DecisionSync');
        t.is(result.error, '');
    }
    else
    {
        t.is(result.error, 'Please enable Decision sync');
        t.is(result.message, '');
    }
})

test.serial.skip('Get update card handller data', async(t)=>{
    const result = await paymentHandler.updateCardHandler(updateCardHandlerTokens, updateCardHandlerCustomerId, updateCardHandlerCustomerObj);
    t.is(result.actions[0].action, "setCustomType");
})

test.serial.skip('Get order management handller for capture ', async(t)=>{
    const orderManagementHandlerUpdatePaymentObj  =await CommercetoolsApi.retrievePayment(unit.paymentId);
    const result = await paymentHandler.orderManagementHandler(orderManagementHandlerPaymentId, orderManagementHandlerUpdatePaymentObj, orderManagementHandlerUpdateTransactions);
    
    t.is(result.actions[0].action, 'changeTransactionInteractionId');
    t.is(result.actions[1].action, 'changeTransactionState');
    t.is(result.actions[1].state, 'Success');
})

test.serial.skip('Get delete card handler data ', async (t)=>{
    const result =await paymentHandler.deleteCardHandler(deleteCardHandlerUpdateCustomerObj, deleteCardHandlerCutsomerId);
    t.is(result.actions[0].action, "setCustomType");
    t.is(result.actions[0].type.key, "isv_payments_customer_tokens");
})

test.serial.skip('Get apple Pay Session Handler response ', async(t)=>{
    const result = await paymentHandler.applePaySessionHandler(applePaySessionHandlerFields);
    t.is(result.actions[0].action, 'setCustomField')
    t.is(result.actions[0].name, 'isv_applePaySessionData');
})

test.serial.skip('get authorization handller for google pay', async(t)=>{
    const result = await paymentHandler.authorizationHandler(authoriationHandlerGPUpdatePaymentObject, authorizationHandlerUpdateTransactions);
    if(result.actions[0]==undefined)
    {
        t.deepEqual(result.actions, []);
    }
    else
    {
        t.is(result.actions[0].action, 'changeTransactionInteractionId');
        t.is(result.actions[1].action, 'changeTransactionState');
    
    }
})

test.serial.skip('get authorization handller for click to pay', async(t)=>{
    const result = await paymentHandler.authorizationHandler(authorizationHandlerVSUpdatePaymentObject, authorizationHandlerUpdateTransactions);
    if(result.actions[0]==undefined)
    {
        t.deepEqual(result.actions, []);
    }
    else
    {
        t.is(result.actions[0].action, 'changeTransactionInteractionId');
        t.is(result.actions[1].action, 'changeTransactionState');
    
    }
})

test.serial.skip('get authorization handller for credit card', async(t)=>{
    const result = await paymentHandler.authorizationHandler(authorizationHandlerCCUpdatePaymentObject, authorizationHandlerUpdateTransactions);
    if(result.actions[0]==undefined)
    {
        t.deepEqual(result.actions, []);
    }
    else
    {
        t.is(result.actions[0].action, 'changeTransactionInteractionId');
        t.is(result.actions[1].action, 'changeTransactionState');
    
    }})

test.serial.skip('get authorization handller for payer auth', async(t)=>{
    const result = await paymentHandler.authorizationHandler(authorizationHandler3DSUpdatePaymentObject, authorizationHandlerUpdateTransactions);
    if(result.actions[0]==undefined)
    {
        t.deepEqual(result.actions, []);
    }
    else
    {
        t.is(result.actions[0].action, 'changeTransactionInteractionId');
        t.is(result.actions[1].action, 'changeTransactionState');
    
    }
})

test.serial.skip('get authorization handller for apple pay', async(t)=>{
    const result = await paymentHandler.authorizationHandler(authorizationHandlerAPUpdatePaymentObject, authorizationHandlerUpdateTransactions);
    if(result.actions[0]==undefined)
    {
        t.deepEqual(result.actions, []);
    }
    else
    {
        t.is(result.actions[0].action, 'changeTransactionInteractionId');
        t.is(result.actions[1].action, 'changeTransactionState');
    
    }
   })

test.serial.skip('get payer auth set up response ', async(t)=>{
    const result = await paymentHandler.getPayerAuthSetUpResponse(authorizationHandler3DSUpdatePaymentObject);
   if(result.actions[0]==undefined)
    {
        t.deepEqual(result.actions, []);
        t.deepEqual(result.errors, []);
    }
    else
    {
        t.is(result.actions[0].action, 'setCustomField');
        t.is(result.actions[0].name,  'isv_requestJwt');
        t.is(result.actions[1].action, 'setCustomField');
        t.is(result.actions[1].name,   'isv_cardinalReferenceId');
        t.is(result.actions[2].action, 'setCustomField');
        t.is(result.actions[2].name,   'isv_deviceDataCollectionUrl');
    }
})

test.serial.skip('Check the run sync ', async(t)=>{
    const result = await paymentHandler.syncHandler();
    if(result.error=='Please enable Run sync')
    {
        t.is(result.message, '');
        t.is(result.error, 'Please enable Run sync');
    }
    else if(result.error=='')
    {
        t.is(result.message, 'Successfully updated payment details');
        t.is(result.error, '');
    }
    else if(result.error=='There were no payment details found to update')
    {
        t.is(result.message, '');
        t.is(result.error, 'There were no payment details found to update');
    }
})

test.serial.skip('Get Payer Auth Enroll Response', async(t)=>{
    const result = await paymentHandler.getPayerAuthEnrollResponse(getPayerAuthEnrollResponseUpdatePaymentObj);
    if(result.actions.length<=0)
    {
        t.deepEqual(result.actions, []);
        t.is(result.errors[0].code, 'InvalidInput');
        t.is(result.errors[0].message, 'Cannot process the payment due to invalid input');
    }
    else
    {
        t.is(result.actions[0].action, 'setCustomField');
        t.is(result.actions[0].name, 'isv_payerEnrollTransactionId');
        t.is(result.actions[1].name, 'isv_payerEnrollHttpCode');
        t.is(result.actions[2].name, 'isv_payerEnrollStatus');
    }
})

test.serial.skip('Get Payer AuthReversal Handler', async(t)=>{
    const result  = await paymentHandler.getPayerAuthReversalHandler(getPayerAuthReversalHandlerUpdatePaymentObject, getPayerAuthReversalHandlerPaymentResponse, getPayerAuthReversalHandlerUpdateTransactions, getPayerAuthReversalHandlerUpdateActions);
    t.is(result.actions[0].action, 'changeTransactionInteractionId');
    t.is(result.actions[1].action, 'changeTransactionState');
    t.is(result.actions[1].state, 'Success');
    t.is(result.actions[2].action, 'addTransaction');
    t.is(result.actions[2].transaction.type, 'CancelAuthorization');
})

test.serial.skip('get Payer Auth Validate Response', async(t)=>{
    const result = await paymentHandler.getPayerAuthValidateResponse(getPayerAuthValidateResponseUpdatePaymentObj);
    t.is(result.actions[0].action, 'setCustomField');
    t.is(result.actions[0].name,  'isv_payerEnrollTransactionId');
    t.is(result.actions[1].name, 'isv_payerEnrollHttpCode');
    t.is(result.actions[2].name, 'isv_payerEnrollStatus');
    t.is(result.actions[3].name,  'isv_payerAuthenticationRequired');
})


