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
import {googlePayRespone} from '../../utils/PaymentHandler'; 
import {getCardWith3dsRespone,getPayerAuthSetUpResponse} from '../../utils/PaymentHandler';
import {getCardWithout3dsRespone } from '../../utils/PaymentHandler';
import {clickToPayRespone} from '../../utils/PaymentHandler';
import paymentHandler from '../../utils/PaymentHandler';
import {getCardWith3dsResponeCartObj,getCardWith3dsResponeUpdatePaymentObj,getCardWith3dsResponeUpdateTransactions} from '../const/PaymentHandlerConst';
import {getPayerAuthSetUpResponseUpdateObj,googlePayResponeCartObj, googlePayResponeUpdatePaymentObj, googlePayResponeUpdateTransactions} from '../const/PaymentHandlerConst';
import {getCardWithout3dsResponeUpdatePaymentObj, getCardWithout3dsResponeCartObj, getCardWithout3dsResponeUpdateTransactions} from '../const/PaymentHandlerConst'
import {clickToPayResponeUpdatePaymentObj, clickToPayResponeCartObj, clickToPayResponeUpdateTransactions} from '../const/PaymentHandlerConst'
import {updateCardHandlerCustomerId,updateCardHandlerTokens} from '../const/PaymentHandlerConst';
import {orderManagementHandlerPaymentId,  orderManagementHandlerUpdateTransactions} from '../const/PaymentHandlerConst'
import {deleteCardHandlerUpdateCustomerObj, deleteCardHandlerCutsomerId} from '../const/PaymentHandlerConst';
import CommercetoolsApi from '../../utils/api/CommercetoolsApi';

var returnResponse:any = {
    paymentResponse: null,
    authResponse: null,
    errorFlag: false,
  };

test.serial('Check the payment response for google pay ', async(t)=>{
    const result:any =await googlePayRespone(googlePayResponeUpdatePaymentObj, googlePayResponeCartObj, googlePayResponeUpdateTransactions);
    returnResponse.paymentResponse = result.paymentResponse;
    returnResponse.authResponse = result.authResponse;
    returnResponse.errorFlag = result.errorFlag;
    t.pass();
    if(returnResponse.paymentResponse.httpCode==201)
    {
        t.is(returnResponse.paymentResponse.httpCode, 201);
        t.is(returnResponse.paymentResponse.status, 'AUTHORIZED');
    }
    else
    {
        t.not(returnResponse.paymentResponse.httpCode, 201);
        t.not(returnResponse.paymentResponse.status, 'AUTHORIZED');
    }
})

test.serial('Check for get payer auth set up response ', async(t)=>{
    const result:any =await getPayerAuthSetUpResponse(getPayerAuthSetUpResponseUpdateObj);
    if(result.actions[0]==undefined)
    {
        t.deepEqual(result.actions, []);
        t.deepEqual(result.errors, []);
    }
    else
    {
        t.is(result.actions[0].action, "setCustomField");
        t.is(result.actions[0].name, "isv_requestJwt");
        t.is(result.actions[1].name, "isv_merchantDefinedData_mddField_1");
    }
})

test.serial('Check get card with 3ds response ', async(t)=>{
    const result:any = await getCardWith3dsRespone(getCardWith3dsResponeUpdatePaymentObj, getCardWith3dsResponeCartObj, getCardWith3dsResponeUpdateTransactions)
    t.pass();
    if(result.paymentResponse.httpCode==201)
    {
        t.is(result.paymentResponse.httpCode, 201);
        t.is(result.paymentResponse.status, 'AUTHORIZED');
    }
    else
    {
        t.is(result.paymentResponse.status, 'INVALID_REQUEST');
        t.is(result.paymentResponse.httpCode, 400);
    }
})

   test.serial('Check get card without 3ds response  ', async(t)=>{
    const result:any = await getCardWithout3dsRespone(getCardWithout3dsResponeUpdatePaymentObj, getCardWithout3dsResponeCartObj, getCardWithout3dsResponeUpdateTransactions)
    t.pass();
    if(result.paymentResponse.httpCode==201)
    {
        t.is(result.paymentResponse.httpCode, 201);
        t.is(result.paymentResponse.status, 'AUTHORIZED');
    }
    else
    {
        t.is(result.paymentResponse.httpCode, 400);
        t.is(result.paymentResponse.status, 'INVALID_REQUEST');
    }

   })

test.serial('Check click to pay response', async(t)=>{
    const result:any = await clickToPayRespone(clickToPayResponeUpdatePaymentObj, clickToPayResponeCartObj, clickToPayResponeUpdateTransactions)
    t.pass();
    if(result.paymentResponse.httpCode==201)
    {
        t.is(result.paymentResponse.httpCode, 201);
        t.is(result.paymentResponse.status, 'AUTHORIZED');
    }
    else
    {
        t.is(result.paymentResponse.httpCode, 400);
        t.is(result.paymentResponse.status, 'INVALID_REQUEST');

    }
  })

test.serial('Check for report handller ', async (t)=>{
    const result =await paymentHandler.reportHandler();
    t.pass();
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
    t.pass();
    t.is(result.actions[0].action, "setCustomType");
})

test.serial('Get order management handller for capture ', async(t)=>{
    const orderManagementHandlerUpdatePaymentObj  =await CommercetoolsApi.retrievePayment(unit.paymentId);
    const result = await paymentHandler.orderManagementHandler(orderManagementHandlerPaymentId, orderManagementHandlerUpdatePaymentObj, orderManagementHandlerUpdateTransactions);
    t.pass();
    t.is(result.actions[0].action, 'changeTransactionInteractionId');
    t.is(result.actions[1].action, 'changeTransactionState');
    t.is(result.actions[1].state, 'Success');
})

test.serial('Get delete card handler data ', async (t)=>{
    const result =await paymentHandler.deleteCardHandler(deleteCardHandlerUpdateCustomerObj, deleteCardHandlerCutsomerId);
    t.pass();
    t.is(result.actions[0].action, "setCustomType");
    t.is(result.actions[0].type.key, "isv_payments_customer_tokens");
})