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
var CustomerQuery = require('./CustomerQuery');




/**
 * The SearchCustomersRequest model module.
 * @module model/SearchCustomersRequest
 */

/**
 * Constructs a new <code>SearchCustomersRequest</code>.
 * Defines the fields included in the request body for the SearchCustomers endpoint.
 * @alias module:model/SearchCustomersRequest
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>SearchCustomersRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchCustomersRequest} obj Optional instance to populate.
 * @return {module:model/SearchCustomersRequest} The populated <code>SearchCustomersRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
      if (data.hasOwnProperty('limit')) {
      obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
    }
      if (data.hasOwnProperty('query')) {
      obj['query'] = CustomerQuery.constructFromObject(data['query']);
    }
    }
  return obj;
}

/**
 * Include the pagination cursor in subsequent calls to this endpoint to retrieve the next set of results associated with the original query.  See [Pagination](/basics/api101/pagination) for more information.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;
/**
 * A limit on the number of results to be returned in a single page. The limit is advisory - the implementation may return more or fewer results. If the supplied limit is negative, zero, or is higher than the maximum limit of 1,000, it will be ignored.
 * @member {Number} limit
 */
exports.prototype['limit'] = undefined;
/**
 * Query customers based on the given conditions and sort order. Calling SearchCustomers without an explicit query parameter will return all customers ordered alphabetically based on `given_name` and `family_name`.
 * @member {module:model/CustomerQuery} query
 */
exports.prototype['query'] = undefined;



module.exports = exports;



