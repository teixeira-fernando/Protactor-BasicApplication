'use strict'

const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
module.exports.config = {
seleniumAddress: "http://localhost:4444/wd/hub",
 capabilities: {
 	'browserName': 'chrome',
 },
 specs: ['specs/*.spec.js'],
 baseUrl: 'https://pokedex-angular-example.herokuapp.com',
onPrepare() {
	jasmine.getEnv().addReporter(new SpecReporter({
   	displayFailuresSummary: true,
 		displayFailedSpec: true,
 		displaySuiteNumber: true,
 		displaySpecDuration: true
 	}));
  
  by.addLocator('dataTest',function(text) {
 	  return document.querySelector(`[data-test="${text}"]`)
  });
 }
};
