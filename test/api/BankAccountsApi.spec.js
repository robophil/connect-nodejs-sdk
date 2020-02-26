const SquareConnect = require('../../src/index');
const {
  accounts,
  expect,
  handleUnexpectedError
} = require('../support/setup');

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

describe('BankAccountsApi', function() {
  beforeEach(function() {
    const defaultClient = SquareConnect.ApiClient.instance;
    const oauth2 = defaultClient.authentications['oauth2'];
    // Some APIs do not work with sandbox. Replace `sandbox` with `production` for those test suites.
    oauth2.accessToken = accounts.sandbox.access_token;
    this.api  = new SquareConnect.BankAccountsApi();
  });

  afterEach(function(){
  });

  describe('BankAccountsApi', function() {
    describe('getBankAccount', function() {
      it('should call getBankAccount successfully', function(done) {
        //uncomment below and update the code to test getBankAccount
        //instance.getBankAccount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getBankAccountByV1Id', function() {
      it('should call getBankAccountByV1Id successfully', function(done) {
        //uncomment below and update the code to test getBankAccountByV1Id
        //instance.getBankAccountByV1Id(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listBankAccounts', function() {
      it('should call listBankAccounts successfully', function(done) {
        //uncomment below and update the code to test listBankAccounts
        //instance.listBankAccounts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });
});
