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

import {updateCardHandlerCustomerId,updateCardHandlerTokens} from '../const/PaymentHandlerConst';
import {orderManagementHandlerPaymentId,  orderManagementHandlerUpdateTransactions} from '../const/PaymentHandlerConst'
import {deleteCardHandlerUpdateCustomerObj, deleteCardHandlerCutsomerId} from '../const/PaymentHandlerConst';
import {applePaySessionHandlerFields} from '../const/PaymentHandlerConst';
import CommercetoolsApi from '../../utils/api/CommercetoolsApi';



test.serial('Check for report handller ', async (t)=>{
    const result =await paymentHandler.reportHandler();
    if(result.error=='Conversion details not found')
    {
        t.is(result.error, 'Conversion details not found');
        t.is(result.message, '');
    }
    else if(result.message=='Successfully completed DecisionSync')
    {
        t.is(result.message, 'Successfully completed DecisionSync');
        t.is(result.error, '');
    }
    else
    {
        t.is(result.error, 'Please enable DecisionSync');
        t.is(result.message, '');
    }
})

test.serial('update card', async(t)=>{
    const result = await paymentHandler.updateCardHandler(updateCardHandlerTokens, updateCardHandlerCustomerId);
    t.is(result.actions[0].action, "setCustomType");
})

test.serial('Get order management handller for capture ', async(t)=>{
    const orderManagementHandlerUpdatePaymentObj  =await CommercetoolsApi.retrievePayment(unit.paymentId);
    const result = await paymentHandler.orderManagementHandler(orderManagementHandlerPaymentId, orderManagementHandlerUpdatePaymentObj, orderManagementHandlerUpdateTransactions);
    t.is(result.actions[0].action, 'changeTransactionInteractionId');
    t.is(result.actions[1].action, 'changeTransactionState');
    t.is(result.actions[1].state, 'Success');
})

test.serial('Get delete card handler data ', async (t)=>{
    const result =await paymentHandler.deleteCardHandler(deleteCardHandlerUpdateCustomerObj, deleteCardHandlerCutsomerId);
    t.is(result.actions[0].action, "setCustomType");
    t.is(result.actions[0].type.key, "isv_payments_customer_tokens");
})

test.serial('Get apple Pay Session Handler response ', async(t)=>{
    const result = await paymentHandler.applePaySessionHandler(applePaySessionHandlerFields);
    t.is(result.actions[0].action, 'setCustomField')
    t.is(result.actions[0].name, 'isv_merchantDefinedData_mddField_22');
})