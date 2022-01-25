/* eslint-disable functional/immutable-data */
/* eslint-disable no-var */
import test from 'ava';
import dotenv from 'dotenv';

dotenv.config();
import deleteToken from '../../service/payment/DeleteTokenService';
import { customerTokenObj, customerTokenObject} from '../const/DeleteTokenServiceConst';

var result = {
    httpCode:null,
    deletedToken:null,
    message:null
}

test.serial('Deleting a token', async (t)=>{
    const response:any = await deleteToken.deleteCustomerToken(customerTokenObj);
    result.httpCode=response.httpCode;
    result.deletedToken=response.deletedToken;
    result.message=response.message;
    t.pass()
})


test.serial('Check http code for token deletion', async(t)=>{
    
    t.is(result.httpCode, 204);

})

test.serial('Check returned message after token deletion', async(t)=>{
   
    t.is(result.message, '');

 })

 test.serial('Deleting an invalid token', async (t)=>{
    const response:any = await deleteToken.deleteCustomerToken(customerTokenObject);
    result.httpCode=response.httpCode;
    result.deletedToken = response.deletedToken;
     result.message=response.message;
    t.pass()
})


test.serial('Check http code for deleting invalid token', async(t)=>{
    
    t.not(result.httpCode, 204);

})

test.serial('Check for value of deleted token for deleting invalid token', async(t)=>{
    
    t.is(result.deletedToken, '');
 })