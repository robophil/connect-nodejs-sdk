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
var Address = require('./Address');




/**
 * The CreateCustomerRequest model module.
 * @module model/CreateCustomerRequest
 */

/**
 * Constructs a new <code>CreateCustomerRequest</code>.
 * Defines the body parameters that can be provided in a request to the CreateCustomer endpoint.
 * @alias module:model/CreateCustomerRequest
 * @class
 */
var exports = function() {
  var _this = this;












};

/**
 * Constructs a <code>CreateCustomerRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateCustomerRequest} obj Optional instance to populate.
 * @return {module:model/CreateCustomerRequest} The populated <code>CreateCustomerRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('given_name')) {
      obj['given_name'] = ApiClient.convertToType(data['given_name'], 'String');
    }
      if (data.hasOwnProperty('family_name')) {
      obj['family_name'] = ApiClient.convertToType(data['family_name'], 'String');
    }
      if (data.hasOwnProperty('company_name')) {
      obj['company_name'] = ApiClient.convertToType(data['company_name'], 'String');
    }
      if (data.hasOwnProperty('nickname')) {
      obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
    }
      if (data.hasOwnProperty('email_address')) {
      obj['email_address'] = ApiClient.convertToType(data['email_address'], 'String');
    }
      if (data.hasOwnProperty('address')) {
      obj['address'] = Address.constructFromObject(data['address']);
    }
      if (data.hasOwnProperty('phone_number')) {
      obj['phone_number'] = ApiClient.convertToType(data['phone_number'], 'String');
    }
      if (data.hasOwnProperty('reference_id')) {
      obj['reference_id'] = ApiClient.convertToType(data['reference_id'], 'String');
    }
      if (data.hasOwnProperty('note')) {
      obj['note'] = ApiClient.convertToType(data['note'], 'String');
    }
      if (data.hasOwnProperty('birthday')) {
      obj['birthday'] = ApiClient.convertToType(data['birthday'], 'String');
    }
    }
  return obj;
}

/**
 * The idempotency key for the request. See the [Idempotency](/basics/api101/idempotency) guide for more information.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The customer's given (i.e., first) name.
 * @member {String} given_name
 */
exports.prototype['given_name'] = undefined;
/**
 * The customer's family (i.e., last) name.
 * @member {String} family_name
 */
exports.prototype['family_name'] = undefined;
/**
 * The name of the customer's company.
 * @member {String} company_name
 */
exports.prototype['company_name'] = undefined;
/**
 * A nickname for the customer.
 * @member {String} nickname
 */
exports.prototype['nickname'] = undefined;
/**
 * The customer's email address.
 * @member {String} email_address
 */
exports.prototype['email_address'] = undefined;
/**
 * The customer's physical address.
 * @member {module:model/Address} address
 */
exports.prototype['address'] = undefined;
/**
 * The customer's phone number.
 * @member {String} phone_number
 */
exports.prototype['phone_number'] = undefined;
/**
 * An optional second ID you can set to associate the customer with an entity in another system.
 * @member {String} reference_id
 */
exports.prototype['reference_id'] = undefined;
/**
 * An optional note to associate with the customer.
 * @member {String} note
 */
exports.prototype['note'] = undefined;
/**
 * The customer birthday in RFC-3339 format. Year is optional, timezone and times are not allowed. Example: `0000-09-01T00:00:00-00:00` for a birthday on September 1st. `1998-09-01T00:00:00-00:00` for a birthday on September 1st 1998.
 * @member {String} birthday
 */
exports.prototype['birthday'] = undefined;



module.exports = exports;



