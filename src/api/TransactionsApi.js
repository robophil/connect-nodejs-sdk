/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var CaptureTransactionResponse = require('../model/CaptureTransactionResponse');
var ChargeRequest = require('../model/ChargeRequest');
var ChargeResponse = require('../model/ChargeResponse');
var CreateRefundRequest = require('../model/CreateRefundRequest');
var CreateRefundResponse = require('../model/CreateRefundResponse');
var ListRefundsResponse = require('../model/ListRefundsResponse');
var ListTransactionsResponse = require('../model/ListTransactionsResponse');
var RetrieveTransactionResponse = require('../model/RetrieveTransactionResponse');
var VoidTransactionResponse = require('../model/VoidTransactionResponse');

/**
 * Transactions service.
 * @module api/TransactionsApi
 */

/**
 * Constructs a new TransactionsApi. 
 * @alias module:api/TransactionsApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * @deprecated
   * CaptureTransaction
   * Captures a transaction that was created with the [Charge](#endpoint-charge) endpoint with a &#x60;delay_capture&#x60; value of &#x60;true&#x60;.  ---  - __Deprecation date__: 2019-08-15 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2021-09-01 - [Migration guide](/payments-api/migrate-from-transactions-api)  ---  See [Delayed capture transactions](/payments/transactions/overview#delayed-capture) for more information.
   * @param {String} locationId 
   * @param {String} transactionId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CaptureTransactionResponse} and HTTP response
   */
  this.captureTransactionWithHttpInfo = function(locationId, transactionId) {
    console.warn("\x1b[33m%s\x1b[0m","Calling deprecated API: TransactionsApi.captureTransaction");
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling captureTransaction");
    }

    // verify the required parameter 'transactionId' is set
    if (transactionId === undefined || transactionId === null) {
      throw new Error("Missing the required parameter 'transactionId' when calling captureTransaction");
    }


    var pathParams = {
      'location_id': locationId,
      'transaction_id': transactionId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-02-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CaptureTransactionResponse;

    return this.apiClient.callApi(
      '/v2/locations/{location_id}/transactions/{transaction_id}/capture', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CaptureTransaction
   * Captures a transaction that was created with the [Charge](#endpoint-charge) endpoint with a &#x60;delay_capture&#x60; value of &#x60;true&#x60;.  ---  - __Deprecation date__: 2019-08-15 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2021-09-01 - [Migration guide](/payments-api/migrate-from-transactions-api)  ---  See [Delayed capture transactions](/payments/transactions/overview#delayed-capture) for more information.
   * @param {String} locationId 
   * @param {String} transactionId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CaptureTransactionResponse}
   */
  this.captureTransaction = function(locationId, transactionId) {
    return this.captureTransactionWithHttpInfo(locationId, transactionId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * @deprecated
   * Charge
   * Charges a card represented by a card nonce or a customer&#39;s card on file.  Deprecated - recommend using [CreatePayment](#endpoint-payments-createpayment)  ---  - __Deprecation date__: 2019-08-15 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2021-09-01 - [Migration guide](/payments-api/migrate-from-transactions-api)  ---  Your request to this endpoint must include _either_:  - A value for the &#x60;card_nonce&#x60; parameter (to charge a card nonce generated with the &#x60;SqPaymentForm&#x60;) - Values for the &#x60;customer_card_id&#x60; and &#x60;customer_id&#x60; parameters (to charge a customer&#39;s card on file)  In order for an eCommerce payment to potentially qualify for [Square chargeback protection](https://squareup.com/help/article/5394), you _must_ provide values for the following parameters in your request:  - &#x60;buyer_email_address&#x60; - At least one of &#x60;billing_address&#x60; or &#x60;shipping_address&#x60;  When this response is returned, the amount of Square&#39;s processing fee might not yet be calculated. To obtain the processing fee, wait about ten seconds and call [RetrieveTransaction](#endpoint-retrievetransaction). See the &#x60;processing_fee_money&#x60; field of each [Tender included](#type-tender) in the transaction.
   * @param {String} locationId The ID of the location to associate the created transaction with.
   * @param {module:model/ChargeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ChargeResponse} and HTTP response
   */
  this.chargeWithHttpInfo = function(locationId, body) {
    console.warn("\x1b[33m%s\x1b[0m","Calling deprecated API: TransactionsApi.charge");
    var postBody = body;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling charge");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling charge");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-02-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ChargeResponse;

    return this.apiClient.callApi(
      '/v2/locations/{location_id}/transactions', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * Charge
   * Charges a card represented by a card nonce or a customer&#39;s card on file.  Deprecated - recommend using [CreatePayment](#endpoint-payments-createpayment)  ---  - __Deprecation date__: 2019-08-15 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2021-09-01 - [Migration guide](/payments-api/migrate-from-transactions-api)  ---  Your request to this endpoint must include _either_:  - A value for the &#x60;card_nonce&#x60; parameter (to charge a card nonce generated with the &#x60;SqPaymentForm&#x60;) - Values for the &#x60;customer_card_id&#x60; and &#x60;customer_id&#x60; parameters (to charge a customer&#39;s card on file)  In order for an eCommerce payment to potentially qualify for [Square chargeback protection](https://squareup.com/help/article/5394), you _must_ provide values for the following parameters in your request:  - &#x60;buyer_email_address&#x60; - At least one of &#x60;billing_address&#x60; or &#x60;shipping_address&#x60;  When this response is returned, the amount of Square&#39;s processing fee might not yet be calculated. To obtain the processing fee, wait about ten seconds and call [RetrieveTransaction](#endpoint-retrievetransaction). See the &#x60;processing_fee_money&#x60; field of each [Tender included](#type-tender) in the transaction.
   * @param {String} locationId The ID of the location to associate the created transaction with.
   * @param {module:model/ChargeRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ChargeResponse}
   */
  this.charge = function(locationId, body) {
    return this.chargeWithHttpInfo(locationId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * @deprecated
   * CreateRefund
   * Initiates a refund for a previously charged tender.  Deprecated - recommend using [RefundPayment](#endpoint-refunds-refundpayment)  ---  - __Deprecation date__: 2019-08-15 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2021-09-01 - [Migration guide](/payments-api/migrate-from-transactions-api)  ---   You must issue a refund within 120 days of the associated payment. See [this article](https://squareup.com/help/us/en/article/5060) for more information on refund behavior.  NOTE: Card-present transactions with Interac credit cards **cannot be refunded using the Connect API**. Interac transactions must refunded in-person (e.g., dipping the card using POS app).
   * @param {String} locationId The ID of the original transaction&#39;s associated location.
   * @param {String} transactionId The ID of the original transaction that includes the tender to refund.
   * @param {module:model/CreateRefundRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateRefundResponse} and HTTP response
   */
  this.createRefundWithHttpInfo = function(locationId, transactionId, body) {
    console.warn("\x1b[33m%s\x1b[0m","Calling deprecated API: TransactionsApi.createRefund");
    var postBody = body;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling createRefund");
    }

    // verify the required parameter 'transactionId' is set
    if (transactionId === undefined || transactionId === null) {
      throw new Error("Missing the required parameter 'transactionId' when calling createRefund");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createRefund");
    }


    var pathParams = {
      'location_id': locationId,
      'transaction_id': transactionId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-02-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CreateRefundResponse;

    return this.apiClient.callApi(
      '/v2/locations/{location_id}/transactions/{transaction_id}/refund', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateRefund
   * Initiates a refund for a previously charged tender.  Deprecated - recommend using [RefundPayment](#endpoint-refunds-refundpayment)  ---  - __Deprecation date__: 2019-08-15 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2021-09-01 - [Migration guide](/payments-api/migrate-from-transactions-api)  ---   You must issue a refund within 120 days of the associated payment. See [this article](https://squareup.com/help/us/en/article/5060) for more information on refund behavior.  NOTE: Card-present transactions with Interac credit cards **cannot be refunded using the Connect API**. Interac transactions must refunded in-person (e.g., dipping the card using POS app).
   * @param {String} locationId The ID of the original transaction&#39;s associated location.
   * @param {String} transactionId The ID of the original transaction that includes the tender to refund.
   * @param {module:model/CreateRefundRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateRefundResponse}
   */
  this.createRefund = function(locationId, transactionId, body) {
    return this.createRefundWithHttpInfo(locationId, transactionId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * @deprecated
   * ListRefunds
   * Lists refunds for one of a business&#39;s locations.  Deprecated - recommend using [SearchOrders](#endpoint-orders-searchorders)  ---  - __Deprecation date__: 2019-08-15 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2021-09-01 - [Migration guide](/payments-api/migrate-from-transactions-api)  ---   In addition to full or partial tender refunds processed through Square APIs, refunds may result from itemized returns or exchanges through Square&#39;s Point of Sale applications.  Refunds with a &#x60;status&#x60; of &#x60;PENDING&#x60; are not currently included in this endpoint&#39;s response.  Max results per [page](#paginatingresults): 50
   * @param {String} locationId The ID of the location to list refunds for.
   * @param {Object} opts Optional parameters
   * @param {String} opts.beginTime The beginning of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time minus one year.
   * @param {String} opts.endTime The end of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time.
   * @param {String} opts.sortOrder The order in which results are listed in the response (&#x60;ASC&#x60; for oldest first, &#x60;DESC&#x60; for newest first).  Default value: &#x60;DESC&#x60;
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListRefundsResponse} and HTTP response
   */
  this.listRefundsWithHttpInfo = function(locationId, opts) {
    console.warn("\x1b[33m%s\x1b[0m","Calling deprecated API: TransactionsApi.listRefunds");
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling listRefunds");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
      'begin_time': opts['beginTime'],
      'end_time': opts['endTime'],
      'sort_order': opts['sortOrder'],
      'cursor': opts['cursor']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-02-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListRefundsResponse;

    return this.apiClient.callApi(
      '/v2/locations/{location_id}/refunds', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListRefunds
   * Lists refunds for one of a business&#39;s locations.  Deprecated - recommend using [SearchOrders](#endpoint-orders-searchorders)  ---  - __Deprecation date__: 2019-08-15 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2021-09-01 - [Migration guide](/payments-api/migrate-from-transactions-api)  ---   In addition to full or partial tender refunds processed through Square APIs, refunds may result from itemized returns or exchanges through Square&#39;s Point of Sale applications.  Refunds with a &#x60;status&#x60; of &#x60;PENDING&#x60; are not currently included in this endpoint&#39;s response.  Max results per [page](#paginatingresults): 50
   * @param {String} locationId The ID of the location to list refunds for.
   * @param {Object} opts Optional parameters
   * @param {String} opts.beginTime The beginning of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time minus one year.
   * @param {String} opts.endTime The end of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time.
   * @param {String} opts.sortOrder The order in which results are listed in the response (&#x60;ASC&#x60; for oldest first, &#x60;DESC&#x60; for newest first).  Default value: &#x60;DESC&#x60;
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListRefundsResponse}
   */
  this.listRefunds = function(locationId, opts) {
    return this.listRefundsWithHttpInfo(locationId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * @deprecated
   * ListTransactions
   * Lists transactions for a particular location.  Deprecated - recommend using [SearchOrders](#endpoint-orders-searchorders) ---  - __Deprecation date__: 2019-08-15 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2021-09-01 - [Migration guide](/payments-api/migrate-from-transactions-api)  ---   Transactions include payment information from sales and exchanges and refund information from returns and exchanges.  Max results per [page](#paginatingresults): 50
   * @param {String} locationId The ID of the location to list transactions for.
   * @param {Object} opts Optional parameters
   * @param {String} opts.beginTime The beginning of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time minus one year.
   * @param {String} opts.endTime The end of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time.
   * @param {String} opts.sortOrder The order in which results are listed in the response (&#x60;ASC&#x60; for oldest first, &#x60;DESC&#x60; for newest first).  Default value: &#x60;DESC&#x60;
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListTransactionsResponse} and HTTP response
   */
  this.listTransactionsWithHttpInfo = function(locationId, opts) {
    console.warn("\x1b[33m%s\x1b[0m","Calling deprecated API: TransactionsApi.listTransactions");
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling listTransactions");
    }


    var pathParams = {
      'location_id': locationId
    };
    var queryParams = {
      'begin_time': opts['beginTime'],
      'end_time': opts['endTime'],
      'sort_order': opts['sortOrder'],
      'cursor': opts['cursor']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-02-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListTransactionsResponse;

    return this.apiClient.callApi(
      '/v2/locations/{location_id}/transactions', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListTransactions
   * Lists transactions for a particular location.  Deprecated - recommend using [SearchOrders](#endpoint-orders-searchorders) ---  - __Deprecation date__: 2019-08-15 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2021-09-01 - [Migration guide](/payments-api/migrate-from-transactions-api)  ---   Transactions include payment information from sales and exchanges and refund information from returns and exchanges.  Max results per [page](#paginatingresults): 50
   * @param {String} locationId The ID of the location to list transactions for.
   * @param {Object} opts Optional parameters
   * @param {String} opts.beginTime The beginning of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time minus one year.
   * @param {String} opts.endTime The end of the requested reporting period, in RFC 3339 format.  See [Date ranges](#dateranges) for details on date inclusivity/exclusivity.  Default value: The current time.
   * @param {String} opts.sortOrder The order in which results are listed in the response (&#x60;ASC&#x60; for oldest first, &#x60;DESC&#x60; for newest first).  Default value: &#x60;DESC&#x60;
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query.  See [Paginating results](#paginatingresults) for more information.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListTransactionsResponse}
   */
  this.listTransactions = function(locationId, opts) {
    return this.listTransactionsWithHttpInfo(locationId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * @deprecated
   * RetrieveTransaction
   * Retrieves details for a single transaction.  Deprecated - recommend using [BatchRetrieveOrders](#endpoint-batchretrieveorders) ---  - __Deprecation date__: 2019-08-15 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2021-09-01 - [Migration guide](/payments-api/migrate-from-transactions-api)  ---
   * @param {String} locationId The ID of the transaction&#39;s associated location.
   * @param {String} transactionId The ID of the transaction to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveTransactionResponse} and HTTP response
   */
  this.retrieveTransactionWithHttpInfo = function(locationId, transactionId) {
    console.warn("\x1b[33m%s\x1b[0m","Calling deprecated API: TransactionsApi.retrieveTransaction");
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling retrieveTransaction");
    }

    // verify the required parameter 'transactionId' is set
    if (transactionId === undefined || transactionId === null) {
      throw new Error("Missing the required parameter 'transactionId' when calling retrieveTransaction");
    }


    var pathParams = {
      'location_id': locationId,
      'transaction_id': transactionId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-02-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RetrieveTransactionResponse;

    return this.apiClient.callApi(
      '/v2/locations/{location_id}/transactions/{transaction_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveTransaction
   * Retrieves details for a single transaction.  Deprecated - recommend using [BatchRetrieveOrders](#endpoint-batchretrieveorders) ---  - __Deprecation date__: 2019-08-15 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2021-09-01 - [Migration guide](/payments-api/migrate-from-transactions-api)  ---
   * @param {String} locationId The ID of the transaction&#39;s associated location.
   * @param {String} transactionId The ID of the transaction to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveTransactionResponse}
   */
  this.retrieveTransaction = function(locationId, transactionId) {
    return this.retrieveTransactionWithHttpInfo(locationId, transactionId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * @deprecated
   * VoidTransaction
   * Cancels a transaction that was created with the [Charge](#endpoint-charge) endpoint with a &#x60;delay_capture&#x60; value of &#x60;true&#x60;.  ---  - __Deprecation date__: 2019-08-15 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2021-09-01 - [Migration guide](/payments-api/migrate-from-transactions-api)  ---  See [Delayed capture transactions](/payments/transactions/overview#delayed-capture) for more information.
   * @param {String} locationId 
   * @param {String} transactionId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VoidTransactionResponse} and HTTP response
   */
  this.voidTransactionWithHttpInfo = function(locationId, transactionId) {
    console.warn("\x1b[33m%s\x1b[0m","Calling deprecated API: TransactionsApi.voidTransaction");
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling voidTransaction");
    }

    // verify the required parameter 'transactionId' is set
    if (transactionId === undefined || transactionId === null) {
      throw new Error("Missing the required parameter 'transactionId' when calling voidTransaction");
    }


    var pathParams = {
      'location_id': locationId,
      'transaction_id': transactionId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-02-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = VoidTransactionResponse;

    return this.apiClient.callApi(
      '/v2/locations/{location_id}/transactions/{transaction_id}/void', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * VoidTransaction
   * Cancels a transaction that was created with the [Charge](#endpoint-charge) endpoint with a &#x60;delay_capture&#x60; value of &#x60;true&#x60;.  ---  - __Deprecation date__: 2019-08-15 - [__Retirement date__](/build-basics/api-lifecycle#deprecated): 2021-09-01 - [Migration guide](/payments-api/migrate-from-transactions-api)  ---  See [Delayed capture transactions](/payments/transactions/overview#delayed-capture) for more information.
   * @param {String} locationId 
   * @param {String} transactionId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VoidTransactionResponse}
   */
  this.voidTransaction = function(locationId, transactionId) {
    return this.voidTransactionWithHttpInfo(locationId, transactionId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
