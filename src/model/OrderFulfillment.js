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
var OrderFulfillmentPickupDetails = require('./OrderFulfillmentPickupDetails');




/**
 * The OrderFulfillment model module.
 * @module model/OrderFulfillment
 */

/**
 * Constructs a new <code>OrderFulfillment</code>.
 * Contains details on how to fulfill this order.
 * @alias module:model/OrderFulfillment
 * @class
 */
var exports = function() {
  var _this = this;




};

/**
 * Constructs a <code>OrderFulfillment</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/OrderFulfillment} obj Optional instance to populate.
 * @return {module:model/OrderFulfillment} The populated <code>OrderFulfillment</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
      obj['type'] = ApiClient.convertToType(data['type'], 'String');
    }
      if (data.hasOwnProperty('state')) {
      obj['state'] = ApiClient.convertToType(data['state'], 'String');
    }
      if (data.hasOwnProperty('pickup_details')) {
      obj['pickup_details'] = OrderFulfillmentPickupDetails.constructFromObject(data['pickup_details']);
    }
    }
  return obj;
}

/**
 * The type of the fulfillment.
 * @member {module:model/OrderFulfillment.TypeEnum} type
 */
exports.prototype['type'] = undefined;
/**
 * The state of the fulfillment.
 * @member {module:model/OrderFulfillment.StateEnum} state
 */
exports.prototype['state'] = undefined;
/**
 * Contains pickup-specific details. Required when fulfillment type is `PICKUP`.
 * @member {module:model/OrderFulfillmentPickupDetails} pickup_details
 */
exports.prototype['pickup_details'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "PICKUP"
     * @const
     */
    "PICKUP": "PICKUP"  };

  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "PROPOSED"
     * @const
     */
    "PROPOSED": "PROPOSED",
    /**
     * value: "RESERVED"
     * @const
     */
    "RESERVED": "RESERVED",
    /**
     * value: "PREPARED"
     * @const
     */
    "PREPARED": "PREPARED",
    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",
    /**
     * value: "CANCELED"
     * @const
     */
    "CANCELED": "CANCELED",
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED"  };


module.exports = exports;


