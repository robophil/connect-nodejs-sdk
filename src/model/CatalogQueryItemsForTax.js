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
 * The CatalogQueryItemsForTax model module.
 * @module model/CatalogQueryItemsForTax
 */

/**
 * Constructs a new <code>CatalogQueryItemsForTax</code>.
 * 
 * @alias module:model/CatalogQueryItemsForTax
 * @class
 * @param taxIds {Array.<String>} A set of `CatalogTax` IDs to be used to find associated `CatalogItem`s.
 */
var exports = function(taxIds) {
  var _this = this;

  _this['tax_ids'] = taxIds;
};

/**
 * Constructs a <code>CatalogQueryItemsForTax</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CatalogQueryItemsForTax} obj Optional instance to populate.
 * @return {module:model/CatalogQueryItemsForTax} The populated <code>CatalogQueryItemsForTax</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('tax_ids')) {
      obj['tax_ids'] = ApiClient.convertToType(data['tax_ids'], ['String']);
    }
    }
  return obj;
}

/**
 * A set of `CatalogTax` IDs to be used to find associated `CatalogItem`s.
 * @member {Array.<String>} tax_ids
 */
exports.prototype['tax_ids'] = undefined;



module.exports = exports;



