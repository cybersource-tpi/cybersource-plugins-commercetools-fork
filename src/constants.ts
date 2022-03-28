export abstract class Constants {
  //function name
  static readonly GET_AUTH_REVERSAL = 'getAuthReversal';
  static readonly GET_CAPTURE = 'getCapture';
  static readonly GET_DECISION_SYNC = 'getDecisionSync';
  static readonly GET_ORDERS = 'getOrders';
  static readonly GET_REFUND = 'getRefund';
  static readonly GET_PAYMENT_DETAILS = 'getPaymentDetails';
  static readonly POST_CUSTOMER_UPDATE = 'postCustomerUpdate';
  static readonly POST_PAYMENT_CREATE = 'postPaymentCreate';
  static readonly POST_PAYMENT_UPDATE = 'postPaymentUpdate';

  static readonly FUNC_ADD_TRANSACTION = 'FuncAddTransaction';
  static readonly FUNC_APPLE_PAY_SESSION_HANDLER = 'FuncApplePaySessionHandler';
  static readonly FUNC_AUTHORIZATION_HANDLER = 'FuncAuthorizationHandler';
  static readonly FUNC_AUTHORIZATION_RESPONSE = 'FuncAuthorizationResponse';
  static readonly FUNC_AUTH_REVERSAL_RESPONSE = 'FuncAuthReversalResponse';
  static readonly FUNC_CAPTURE_RESPONSE = 'FuncCaptureResponse';
  static readonly FUNC_CHANGE_STATE = 'FuncChangeState ';
  static readonly FUNC_CLICK_TO_PAY = 'FuncClickToPayResponse';
  static readonly FUNC_CONVERSION_DETAILS = 'FuncConversionDetails';
  static readonly FUNC_CREATE_RESPONSE = 'FuncCreateResponse';
  static readonly FUNC_CREATE_ORDER_FROM_CART = 'FuncCreateOrderFromCart';
  static readonly FUNC_DELETE_CARD_HANDLER = 'FuncDeleteCardHandler';
  static readonly FUNC_DELETE_CUSTOMER_TOKEN = 'FuncDeleteCustomerToken';
  static readonly FUNC_DELETE_TOKEN = 'FunDeleteToken';
  static readonly FUNC_FAILURE_RESPONSE = 'FuncFailureResponse';
  static readonly FUNC_FIELD_MAPPER = 'FuncFieldMapper';
  static readonly FUNC_GET_APPLICATIONS_PRESENT = 'FuncGetApplicationsPresent';
  static readonly FUNC_GET_AUTH_RESPONSE = 'FuncGetAuthResponse';
  static readonly FUNC_GET_CAPTURED_AMOUNT = 'FuncGetCapturedAmount';
  static readonly FUNC_GET_CARD_WITH_3DS_RESPONSE = 'FuncGetCardWith3dsResponse';
  static readonly FUNC_GET_CARD_WITHOUT_3DS_RESPONSE = 'FuncGetCardWithout3dsResponse';
  static readonly FUNC_GET_CART_DETAILS_BY_PAYMENT_ID = 'FuncGetCartDetailsByPaymentId';
  static readonly FUNC_GET_CLIENT = 'FuncGetClient';
  static readonly FUNC_GET_CUSTOMER = 'FuncGetCustomer';
  static readonly FUNC_GET_TRANSACTION_SEARCH_RESPONSE = 'FuncGetTransactionSearchResponse';
  static readonly FUNC_GET_ORDERS = 'FuncGetOrders';
  static readonly FUNC_GET_PAYER_AUTH_ENROLL_RESPONSE = 'FuncGetPayerAuthEnrollResponse';
  static readonly FUNC_GET_PAYER_AUTH_SETUP_RESPONSE = 'FuncGetPayerAuthSetUpResponse';
  static readonly FUNC_GET_SERVICE_RESPONSE = 'FuncGetOMServiceResponse';
  static readonly FUNC_GET_VISA_CHECKOUT_DATA = 'FuncGetVisaCheckoutData';
  static readonly FUNC_GOOGLE_PAY_RESPONSE = 'FuncGooglePayResponse';
  static readonly FUNC_KEYS = 'FuncKeys';
  static readonly FUNC_PAYER_AUTH_ACTIONS = 'FuncPayerAuthActions';
  static readonly FUNC_PAYER_AUTH_SETUP_RESPONSE = "FuncPayerAuthSetupResponse";
  static readonly FUNC_PAYER_ENROLL_ACTIONS = 'FuncPayerEnrollActions';
  static readonly FUNC_PAYMENT_RESPONSE = 'FuncPaymentResponse';
  static readonly FUNC_ORDER_MANAGEMENT_HANDLER = 'FuncOrderManagementHandler';
  static readonly FUNC_REFUND_RESPONSE = 'FuncRefundResponse';
  static readonly FUNC_REPORT_HANDLER = 'FuncReportHandler';
  static readonly FUNC_RETRIEVE_CART_BY_ANONYMOUS_ID = 'FuncRetrieveCartByAnonymousId';
  static readonly FUNC_RETRIEVE_CART_BY_CUSTOMER_ID = 'FuncRetrieveCartByCustomerId';
  static readonly FUNC_RETRIEVE_CART_BY_PAYMENT_ID = 'FuncRetrieveCartByPaymentId';
  static readonly FUNC_RETRIEVE_PAYMENT = 'FuncRetrievePayment';
  static readonly FUNC_RUN_SYNC_ADD_TRANSACTION = 'FuncRunSyncAddTransaction';
  static readonly FUNC_SET_CUSTOMER_TOKEN_DATA = 'FuncSetCustomerTokenData';
  static readonly FUNC_SET_CUSTOMER_TOKENS = 'FuncSetCustomerTokens';
  static readonly FUNC_SET_CUSTOM_TYPE = 'FuncSetCustomType';
  static readonly FUNC_SET_TRANSACTION_ID = 'FuncSetTransactionId';
  static readonly FUNC_SYNC_HANDLER = 'FuncSyncHandler';
  static readonly FUNC_UPDATE_CART_BY_PAYMENT_ID = 'FuncUpdateCartByPaymentId';
  static readonly FUNC_UPDATE_CARD_HANDLER = 'FuncUpdateCardHandler';
  static readonly FUNC_UPDATE_DECISION_SYNC = 'FuncUpdateDecisionSync';
  static readonly FUNC_UPDATE_TOKEN_RESPONSE = 'FuncUpdateTokenResponse';
  static readonly FUNC_UPDATE_SYNC = 'FuncUpdateSync';
  static readonly FUNC_SYNC_ADD_TRANSACTION = 'FuncSyncAddTransaction';
  static readonly FUNC_SYNC_VISA_CARD_DETAILS = 'FuncSyncVisaCardDetails';
  static readonly FUNC_UPDATE_VISA_DETAILS = 'FuncUpdateVisaDetails';
  static readonly FUNC_VISA_CARD_DETAILS_ACTION = 'FuncVisaCardDetailsAction';

  //Numbers
  static readonly VAL_NEGATIVE_ONE = -1;
  static readonly VAL_ZERO = 0;
  static readonly VAL_FLOAT_ZERO = 0.0;
  static readonly VAL_ONE = 1;
  static readonly VAL_TWO = 2;
  static readonly VAL_TWENTY_THREE = 23;
  static readonly VAL_FIFTY = 50;
  static readonly VAL_FIFTY_NINE = 59;
  static readonly VAL_HUNDRED = 100;
  static readonly VAL_FOUR_SEVENTY_FIVE = 475;
  static readonly VAL_FOUR_EIGHTY = 480;
  static readonly VAL_FOUR_EIGHTY_ONE = 481;
  static readonly VAL_TWO_THOUSAND = 2000;

  //Payments data
  static readonly ISV_PAYMENT_TEST_ENVIRONMENT = 'apitest.cybersource.com';
  static readonly ISV_PAYMENT_PRODUCTION_ENVIRONMENT = 'api.cybersource.com';
  static readonly TEST_ENVIRONMENT = 'TEST';
  static readonly LIVE_ENVIRONMENT = 'PRODUCTION';
  static readonly ISV_PAYMENT_APPLE_PAY_INITIATIVE = 'web';
  static readonly ISV_PAYMENT_APPLE_PAY_PAYMENT_SOLUTION = '001';
  static readonly ISV_PAYMENT_AUTHENTICATION_TYPE = 'http_signature';
  static readonly ISV_PAYMENT_CONSUMER_AUTHENTICATION = 'CONSUMER_AUTHENTICATION';
  static readonly ISV_PAYMENT_DECISION_SKIP = 'DECISION_SKIP';
  static readonly ISV_PAYMENT_ENCRYPTION_TYPE = 'RsaOaep';
  static readonly ISV_PAYMENT_GOOGLE_PAY_PAYMENT_SOLUTION = '012';
  static readonly ISV_PAYMENT_JWT_FORMAT = 'JWT';
  static readonly ISV_PAYMENT_PARTNER_SOLUTION_ID = 'YBBY8SIG';
  static readonly ISV_PAYMENT_TOKEN_ACTION_TYPES = 'customer,paymentInstrument,instrumentIdentifier';
  static readonly ISV_PAYMENT_TOKEN_ACTION_TYPES_CUSTOMER_EXISTS = 'paymentInstrument,instrumentIdentifier';
  static readonly ISV_PAYMENT_TOKEN_CREATE = 'TOKEN_CREATE';
  static readonly ISV_PAYMENT_ACS_WINDOW_SIZE = '01';
  static readonly ISV_PAYMENT_VALIDATE_CONSUMER_AUTHENTICATION = 'VALIDATE_CONSUMER_AUTHENTICATION';

  static readonly HTTP_METHOD_GET = 'GET';
  static readonly HTTP_METHOD_POST = 'POST';

  //Payment status codes
  static readonly HTTP_CODE_TWO_HUNDRED = 200;
  static readonly HTTP_CODE_TWO_HUNDRED_ONE = 201;
  static readonly HTTP_CODE_TWO_HUNDRED_FOUR = 204;

  //Payment response
  static readonly API_STATUS_AUTHORIZED = 'AUTHORIZED';
  static readonly API_STATUS_AUTHORIZED_RISK_DECLINED = 'AUTHORIZED_RISK_DECLINED';
  static readonly API_STATUS_COMPLETED = 'COMPLETED';
  static readonly API_STATUS_PENDING = 'PENDING';
  static readonly API_STATUS_PENDING_REVIEW = 'AUTHORIZED_PENDING_REVIEW';
  static readonly API_STATUS_PENDING_AUTHENTICATION = 'PENDING_AUTHENTICATION';
  static readonly API_STATUS_REVERSED = 'REVERSED';
  static readonly HTTP_STATUS_DECISION_ACCEPT = 'ACCEPT';
  static readonly HTTP_STATUS_DECISION_REJECT = 'REJECT';

  //Regex
  static readonly CLICK_TO_PAY_CARD_MASK = 'XXXXXX';
  static readonly REGEX_DOUBLE_SLASH = '//';
  static readonly REGEX_DOT = '.';
  static readonly STRING_EMPTY = '';
  static readonly STRING_HYPHEN = ' - ';
  static readonly DOMAIN_REGEX = /^[^:/.]*[:/]+/i;

  //Payment methods
  static readonly CREDIT_CARD = 'creditCard';
  static readonly CC_PAYER_AUTHENTICATION = 'creditCardWithPayerAuthentication';
  static readonly VISA_CHECKOUT = 'visaCheckout';
  static readonly APPLE_PAY = 'applePay';
  static readonly GOOGLE_PAY = 'googlePay';

  //Strings
  static readonly ACTIVE_CART_STATE = 'cartState="Active"';
  static readonly ANONYMOUS_ID = 'anonymousId';
  static readonly CUSTOMER_ID = 'customerId';
  static readonly DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss[Z]';
  static readonly DESC_ORDER = 'desc';
  static readonly LAST_MODIFIED_AT = 'lastModifiedAt';
  static readonly PAYMENT_INSTRUMENT = 'paymentInstrument';
  static readonly REFUND_ID = 'refundId';
  static readonly REFUND_AMOUNT = 'refundAmount';
  static readonly SHIPPING_AND_HANDLING = 'shipping_and_handling';
  static readonly SHIPPING_INFO = 'shippingInfo';
  static readonly STRING_BODY = 'body';
  static readonly STRING_CARD = 'card';
  static readonly STRING_CARD_EXPIRY_MONTH = 'cardExpiryMonth';
  static readonly STRING_CARD_EXPIRY_YEAR = 'cardExpiryYear';
  static readonly STRING_CART_STATE = 'Active';
  static readonly STATUS_CODE = 'statusCode';
  static readonly STRING_CUSTOM = 'custom';
  static readonly STRING_CUSTOMER = 'customer';
  static readonly STRING_CUSTOMER_TOKEN_ID = 'customerTokenId';
  static readonly STRING_DELETE = 'delete';
  static readonly STRING_ENROLL_CHECK = 'enrollCheck';
  static readonly STRING_EXPIRATION_MONTH = 'expirationMonth';
  static readonly STRING_EXPIRATION_YEAR = 'expirationYear';
  static readonly STRING_FALSE = 'false';
  static readonly STRING_FIELDS = 'fields';
  static readonly STRING_FLAG = 'flag';
  static readonly STRING_GOOGLE = 'google';
  static readonly STRING_HOURS = 'hours';
  static readonly STRING_ID = 'id';
  static readonly STRING_OBJ = 'obj';
  static readonly STRING_PAYMENT_TOKEN = 'paymentToken';
  static readonly STRING_QUERY = 'query';
  static readonly STRING_RESOURCE = 'resource';
  static readonly STRING_RESPONSE = 'response';
  static readonly STRING_RESPONSE_STATUS = 'status';
  static readonly STRING_RESULTS = 'results';
  static readonly STRING_SUCCESS = 'success';
  static readonly STRING_SYNC_AUTH_NAME = 'ics_auth';
  static readonly STRING_SYNC_AUTH_REVERSAL_NAME = 'ics_auth_reversal';
  static readonly STRING_SYNC_CAPTURE_NAME = 'ics_bill';
  static readonly STRING_SYNC_QUERY = 'submitTimeUtc:[NOW/DAY-1DAY TO NOW/HOUR+1HOUR}';
  static readonly STRING_SYNC_REFUND_NAME = 'ics_credit';
  static readonly STRING_SYNC_SORT = 'submitTimeUtc:desc';
  static readonly STRING_TRUE = 'true';
  static readonly STRING_TEXT = 'text';
  static readonly STRING_PAYER_AUTH_RETURN_URL = '/payerAuthReturnUrl';
  static readonly STRING_UPDATE = 'update';
  static readonly STRING_UPDATED = 'updated';
  static readonly STRING_VALUE = 'value';
  static readonly STRING_VISA = 'visa';

  static readonly LOG_ERROR = 'error';
  static readonly LOG_INFO = 'info';
  static readonly LOG_WARN = 'warn';
  static readonly TOKEN_INFORMATION = 'tokenInformation';
  static readonly VALIDATION = 'validation';
  static readonly VALIDATION_CALLBACK = 'validationCallback';

  //CT transaction type
  static readonly CT_TRANSACTION_TYPE_AUTHORIZATION = 'Authorization';
  static readonly CT_TRANSACTION_TYPE_CANCEL_AUTHORIZATION = 'CancelAuthorization';
  static readonly CT_TRANSACTION_TYPE_CHARGE = 'Charge';
  static readonly CT_TRANSACTION_TYPE_REFUND = 'Refund';

  //CT transaction state
  static readonly CT_TRANSACTION_STATE_FAILURE = 'Failure';
  static readonly CT_TRANSACTION_STATE_INITIAL = 'Initial';
  static readonly CT_TRANSACTION_STATE_PENDING = 'Pending';
  static readonly CT_TRANSACTION_STATE_SUCCESS = 'Success';

  //CT custom fields
  static readonly ADD_INTERFACE_INTERACTION = 'addInterfaceInteraction';
  static readonly ADD_TRANSACTION = 'addTransaction';
  static readonly CHANGE_TRANSACTION_INTERACTION_ID = 'changeTransactionInteractionId';
  static readonly CHANGE_TRANSACTION_STATE = 'changeTransactionState';
  static readonly INVALID_OPERATION = 'InvalidOperation';
  static readonly INVALID_INPUT = 'InvalidInput';
  static readonly ISV_ACCEPT_HEADER = 'isv_acceptHeader';
  static readonly ISV_ACS_URL = 'isv_payerAuthenticationAcsUrl';
  static readonly ISV_APPLE_PAY_DISPLAY_NAME = 'isv_applePayDisplayName';
  static readonly ISV_APPLE_PAY_VALIDATION_URL = 'isv_applePayValidationUrl';
  static readonly ISV_CARDINAL_REFERENCE_ID = 'isv_cardinalReferenceId';
  static readonly ISV_DDC_URL = 'isv_deviceDataCollectionUrl';
  static readonly ISV_DEVICE_FINGERPRINT_ID = 'isv_deviceFingerprintId';
  static readonly ISV_CAPTURE_CONTEXT_SIGNATURE = 'isv_tokenCaptureContextSignature';
  static readonly ISV_CARD_EXPIRY_MONTH = 'isv_cardExpiryMonth';
  static readonly ISV_CARD_EXPIRY_YEAR = 'isv_cardExpiryYear';
  static readonly ISV_CARD_TYPE = 'isv_cardType';
  static readonly ISV_ENROLMENT_CHECK = 'isv_payments_payer_authentication_enrolment_check';
  static readonly ISV_IP_ADDRESS = 'isv_customerIpAddress';
  static readonly ISV_MASKED_PAN = 'isv_maskedPan';
  static readonly ISV_PAREQ = 'isv_payerAuthenticationPaReq';
  static readonly ISV_PAYMENT_APPLE_PAY_SESSION_DATA = 'isv_applePaySessionData';
  static readonly ISV_PAYER_AUTHENTICATION_ENROLL_HTTP_CODE = 'isv_payerEnrollHttpCode';
  static readonly ISV_PAYER_AUTHENTICATION_ENROLL_TRANSACTION_ID = 'isv_payerEnrollTransactionId';
  static readonly ISV_PAYER_AUTHENTICATION_ENROLL_STATUS = 'isv_payerEnrollStatus';
  static readonly ISV_PAYER_AUTHENTICATION_REQUIRED = 'isv_payerAuthenticationRequired';
  static readonly ISV_PAYER_AUTHENTICATION_TRANSACTION_ID = 'isv_payerAuthenticationTransactionId';
  static readonly ISV_PAYER_AUTHENTICATION_VALIDATE_RESULT = 'isv_payments_payer_authentication_validate_result';
  static readonly ISV_PAYMENTS_CUSTOMER_TOKENS = 'isv_payments_customer_tokens';
  static readonly ISV_PAYMENT_FAILURE = 'isv_payment_failure';
  static readonly ISV_RESPONSE_JWT = 'isv_responseJwt';
  static readonly ISV_SAVED_TOKEN = 'isv_savedToken';
  static readonly ISV_STEPUP_URL = 'isv_stepUpUrl';
  static readonly ISV_TOKEN = 'isv_token';
  static readonly ISV_TOKEN_ALIAS = 'isv_tokenAlias';
  static readonly ISV_TOKEN_VERIFICATION_CONTEXT = 'isv_tokenVerificationContext';
  static readonly ISV_TOKENS = 'isv_tokens';
  static readonly ISV_USER_AGENT_HEADER = 'isv_userAgentHeader';
  static readonly SET_BILLING_ADDRESS = 'setBillingAddress';
  static readonly SET_CUSTOM_FIELD = 'setCustomField';
  static readonly SET_CUSTOM_TYPE = 'setCustomType';
  static readonly TYPE_ID_TYPE = 'type';

  //Success messages
  static readonly SUCCESS_MSG_CAPTURE_SERVICE = 'Capture is completed successfully';
  static readonly SUCCESS_MSG_CARD_TOKENS_UPDATE = 'Successfully updated card tokens';
  static readonly SUCCESS_MSG_DECISION_SYNC_SERVICE = 'Successfully completed Decision sync';
  static readonly SUCCESS_MSG_REFUND_SERVICE = 'Refund is completed successfully';
  static readonly SUCCESS_MSG_REVERSAL_SERVICE = 'Authorization reversal is completed successfully';
  static readonly SUCCESS_MSG_SYNC_SERVICE = 'Successfully updated payment details';
  static readonly SUCCESS_MSG_UPDATE_CLICK_TO_PAY_CARD_DETAILS = 'Updated click to pay card details successfully';

  //Exception messages
  static readonly EXCEPTION_MSG_ADD_TRANSACTION = 'An exception occurred while adding transaction to the payment';
  static readonly EXCEPTION_MSG_AUTHORIZING_PAYMENT = 'An exception occurred while authorizing the payment';
  static readonly EXCEPTION_MSG_CART_UPDATE = 'An exception occurred while updating the cart';
  static readonly EXCEPTION_MSG_CART_DETAILS = 'An exception occurred while fetching cart details';
  static readonly EXCEPTION_MSG_CREATE_ORDER = 'An exception occurred while creating order';
  static readonly EXCEPTION_MSG_COMMERCETOOLS_CONNECT = 'An exception occurred while connecting to commercetools';
  static readonly EXCEPTION_MSG_CONVERSION_DETAILS = 'An exception occurred while fetching conversion details';
  static readonly EXCEPTION_MSG_CUSTOMER_UPDATE = 'An exception occurred while updating card tokens to customer';
  static readonly EXCEPTION_MSG_DECISION_SYNC = 'An exception occurred while fetching conversion detail report';
  static readonly EXCEPTION_MSG_FETCH_PAYMENT_DETAILS = 'An exception occurred while fetching payment details';
  static readonly EXCEPTION_MSG_FETCH_ORDER_DETAILS = 'An exception occurred while fetching order details';
  static readonly EXCEPTION_MSG_PAYER_AUTH = 'An exception occurred while authenticating the payment';
  static readonly EXCEPTION_MSG_SERVICE_PROCESS = 'An exception occurred while processing your payment';
  static readonly EXCEPTION_MSG_SYNC_DETAILS = 'An exception occurred while fetching sync conversion details';

  //Error messges
  static readonly ERROR_MSG_ADD_TRANSACTION_DETAILS = 'There was an error while adding transaction details, please try again';
  static readonly ERROR_MSG_APPLICATION_DETAILS = 'Unable to fetch transaction application details';
  static readonly ERROR_MSG_EMPTY_PAYMENT_DATA = 'There was an error while fetching payment details';
  static readonly ERROR_MSG_EMPTY_TRANSACTION_DETAILS = 'There was an error while fetching transaction details, please try again';
  static readonly ERROR_MSG_ENABLE_SYNC = 'Please enable Run sync';
  static readonly ERROR_MSG_CART_DETAILS = 'Unable to fetch cart details';
  static readonly ERROR_MSG_CAPTURE_FAILURE = 'Cannot process the capture as there are no transaction id available';
  static readonly ERROR_MSG_CAPTURE_SERVICE = 'Error in triggering capture service, please try again';
  static readonly ERROR_MSG_CANNOT_PROCESS = 'Unable to process your transaction, please try again';
  static readonly ERROR_MSG_CREATE_ORDER = 'Unable to create order';
  static readonly ERROR_MSG_CLICK_TO_PAY_DATA = 'There was an error while fetching click to pay data';
  static readonly ERROR_MSG_COMMERCETOOLS_CONNECT = 'There was an error connecting to Commercetools';
  static readonly ERROR_MSG_CUSTOMER_DETAILS = 'Unable to fetch customer details';
  static readonly ERROR_MSG_EMPTY_CART = 'There is no cart available for the payment';
  static readonly ERROR_MSG_EMPTY_CUSTOM_FIELDS = 'There was an error processing your request';
  static readonly ERROR_MSG_ENABLE_DECISION_SYNC = 'Please enable Decision sync';
  static readonly ERROR_MSG_FETCH_TRANSACTIONS = 'Unable to fetch transactions details';
  static readonly ERROR_MSG_FLEX_TOKEN_KEYS = 'Failed to generate one time key for Flex token';
  static readonly ERROR_MSG_INVALID_CUSTOMER_INPUT = 'Cannot delete the token due to invalid input';
  static readonly ERROR_MSG_INVALID_OPERATION = 'Cannot process the payment due to invalid operation';
  static readonly ERROR_MSG_INVALID_INPUT = 'Cannot process the payment due to invalid input';
  static readonly ERROR_MSG_NO_CARD_DETAILS = 'There are no card details available for the payment';
  static readonly ERROR_MSG_NO_ORDER_DETAILS = 'Unable to retrieve order details, please try again';
  static readonly ERROR_MSG_NO_PAYMENT_METHODS = 'There are no payment method available for the payment';
  static readonly ERROR_MSG_NO_SYNC_DETAILS = 'There were no payment details found to update';
  static readonly ERROR_MSG_NO_TOKENS = 'There are no tokens to update';
  static readonly ERROR_MSG_NO_TRANSACTION = 'There are no transactions created for the payment';
  static readonly ERROR_MSG_PAYMENT_DETAILS = 'Unable to fetch payment details';
  static readonly ERROR_MSG_REFUND_EXCEEDS_CAPTURE_AMOUNT = 'Cannot perform refund as the entered amount exceeds captured amount';
  static readonly ERROR_MSG_REFUND_FAILURE = 'Cannot process refund as there are no transaction id available';
  static readonly ERROR_MSG_REFUND_GREATER_THAN_ZERO = 'Refund amount should be greater than zero';
  static readonly ERROR_MSG_REFUND_SERVICE = 'Error in triggering refund service, please try again';
  static readonly ERROR_MSG_REFUND_AMOUNT = 'Refund amount must be a number and should be greater than zero';
  static readonly ERROR_MSG_RETRIEVE_PAYMENT_DETAILS = 'Unable to retrieve payment details';
  static readonly ERROR_MSG_REVERSAL_FAILURE = 'Cannot process authorization reversal as there are no transaction id available';
  static readonly ERROR_MSG_REVERSAL_SERVICE = 'Error in triggering authorization reversal service';
  static readonly ERROR_MSG_SERVICE_PROCESS = 'Unable to process your request';
  static readonly ERROR_MSG_SYNC_PAYMENT_DETAILS = 'An error occurred while trying to sync the payments details';
  static readonly ERROR_MSG_TOKEN_UPDATE = 'Failed to update card tokens';
  static readonly ERROR_MSG_UPDATE_CLICK_TO_PAY_DATA = 'Unable to update click to pay card details';
}
