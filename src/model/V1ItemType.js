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


/**
 * Enum class V1ItemType.
 * @enum {}
 * @readonly
 */
var exports = {
  /**
   * value: "NORMAL"
   * @const
   */
  "NORMAL": "NORMAL",
  /**
   * value: "GIFT_CARD"
   * @const
   */
  "GIFT_CARD": "GIFT_CARD",
  /**
   * value: "OTHER"
   * @const
   */
  "OTHER": "OTHER"};

/**
 * Returns a <code>V1ItemType</code> enum value from a Javascript object name.
 * @param {Object} data The plain JavaScript object containing the name of the enum value.
 * @return {module:model/V1ItemType} The enum <code>V1ItemType</code> value.
 */
exports.constructFromObject = function(object) {
  return object;
}

module.exports = exports;


