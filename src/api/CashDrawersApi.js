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
var ListCashDrawerShiftEventsResponse = require('../model/ListCashDrawerShiftEventsResponse');
var ListCashDrawerShiftsResponse = require('../model/ListCashDrawerShiftsResponse');
var RetrieveCashDrawerShiftResponse = require('../model/RetrieveCashDrawerShiftResponse');

/**
 * CashDrawers service.
 * @module api/CashDrawersApi
 */

/**
 * Constructs a new CashDrawersApi. 
 * @alias module:api/CashDrawersApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * ListCashDrawerShiftEvents
   * Note: This endpoint is in beta.
   * Provides a paginated list of events for a single cash drawer shift.
   * @param {String} locationId The ID of the location to list cash drawer shifts for.
   * @param {String} shiftId The shift ID.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.limit Number of resources to be returned in a page of results (200 by default, 1000 max).
   * @param {String} opts.cursor Opaque cursor for fetching the next page of results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCashDrawerShiftEventsResponse} and HTTP response
   */
  this.listCashDrawerShiftEventsWithHttpInfo = function(locationId, shiftId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling listCashDrawerShiftEvents");
    }

    // verify the required parameter 'shiftId' is set
    if (shiftId === undefined || shiftId === null) {
      throw new Error("Missing the required parameter 'shiftId' when calling listCashDrawerShiftEvents");
    }


    var pathParams = {
      'shift_id': shiftId
    };
    var queryParams = {
      'location_id': locationId,
      'limit': opts['limit'],
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
    var returnType = ListCashDrawerShiftEventsResponse;

    return this.apiClient.callApi(
      '/v2/cash-drawers/shifts/{shift_id}/events', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListCashDrawerShiftEvents
   * Provides a paginated list of events for a single cash drawer shift.
   * @param {String} locationId The ID of the location to list cash drawer shifts for.
   * @param {String} shiftId The shift ID.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.limit Number of resources to be returned in a page of results (200 by default, 1000 max).
   * @param {String} opts.cursor Opaque cursor for fetching the next page of results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCashDrawerShiftEventsResponse}
   */
  this.listCashDrawerShiftEvents = function(locationId, shiftId, opts) {
    return this.listCashDrawerShiftEventsWithHttpInfo(locationId, shiftId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListCashDrawerShifts
   * Note: This endpoint is in beta.
   * Provides the details for all of the cash drawer shifts for a location in a date range.
   * @param {String} locationId The ID of the location to query for a list of cash drawer shifts.
   * @param {Object} opts Optional parameters
   * @param {String} opts.sortOrder The order in which cash drawer shifts are listed in the response, based on their opened_at field. Default value: ASC
   * @param {String} opts.beginTime The inclusive start time of the query on opened_at, in ISO 8601 format.
   * @param {String} opts.endTime The exclusive end date of the query on opened_at, in ISO 8601 format.
   * @param {Number} opts.limit Number of cash drawer shift events in a page of results (200 by default, 1000 max).
   * @param {String} opts.cursor Opaque cursor for fetching the next page of results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListCashDrawerShiftsResponse} and HTTP response
   */
  this.listCashDrawerShiftsWithHttpInfo = function(locationId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling listCashDrawerShifts");
    }


    var pathParams = {
    };
    var queryParams = {
      'location_id': locationId,
      'sort_order': opts['sortOrder'],
      'begin_time': opts['beginTime'],
      'end_time': opts['endTime'],
      'limit': opts['limit'],
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
    var returnType = ListCashDrawerShiftsResponse;

    return this.apiClient.callApi(
      '/v2/cash-drawers/shifts', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListCashDrawerShifts
   * Provides the details for all of the cash drawer shifts for a location in a date range.
   * @param {String} locationId The ID of the location to query for a list of cash drawer shifts.
   * @param {Object} opts Optional parameters
   * @param {String} opts.sortOrder The order in which cash drawer shifts are listed in the response, based on their opened_at field. Default value: ASC
   * @param {String} opts.beginTime The inclusive start time of the query on opened_at, in ISO 8601 format.
   * @param {String} opts.endTime The exclusive end date of the query on opened_at, in ISO 8601 format.
   * @param {Number} opts.limit Number of cash drawer shift events in a page of results (200 by default, 1000 max).
   * @param {String} opts.cursor Opaque cursor for fetching the next page of results.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCashDrawerShiftsResponse}
   */
  this.listCashDrawerShifts = function(locationId, opts) {
    return this.listCashDrawerShiftsWithHttpInfo(locationId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * RetrieveCashDrawerShift
   * Note: This endpoint is in beta.
   * Provides the summary details for a single cash drawer shift. See RetrieveCashDrawerShiftEvents for a list of cash drawer shift events.
   * @param {String} locationId The ID of the location to retrieve cash drawer shifts from.
   * @param {String} shiftId The shift ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RetrieveCashDrawerShiftResponse} and HTTP response
   */
  this.retrieveCashDrawerShiftWithHttpInfo = function(locationId, shiftId) {
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling retrieveCashDrawerShift");
    }

    // verify the required parameter 'shiftId' is set
    if (shiftId === undefined || shiftId === null) {
      throw new Error("Missing the required parameter 'shiftId' when calling retrieveCashDrawerShift");
    }


    var pathParams = {
      'shift_id': shiftId
    };
    var queryParams = {
      'location_id': locationId
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-02-26';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = RetrieveCashDrawerShiftResponse;

    return this.apiClient.callApi(
      '/v2/cash-drawers/shifts/{shift_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * RetrieveCashDrawerShift
   * Provides the summary details for a single cash drawer shift. See RetrieveCashDrawerShiftEvents for a list of cash drawer shift events.
   * @param {String} locationId The ID of the location to retrieve cash drawer shifts from.
   * @param {String} shiftId The shift ID.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RetrieveCashDrawerShiftResponse}
   */
  this.retrieveCashDrawerShift = function(locationId, shiftId) {
    return this.retrieveCashDrawerShiftWithHttpInfo(locationId, shiftId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};
