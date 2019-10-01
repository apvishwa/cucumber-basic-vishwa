$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/com/k2js/Cucumberbasic/feature/Register.feature");
formatter.feature({
  "name": "New Tour Regestration PageVlaidation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Without entering username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag-1"
    }
  ]
});
formatter.step({
  "name": "Click on Regester Link",
  "keyword": "When "
});
formatter.step({
  "name": "Enter firstname \"\u003cFN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter LastName \"\u003cLN\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter PhoneNumber \"\u003cPhNo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter Email \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter Address \"\u003cAdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter City \"\u003cCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter PostCode \"\u003cCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter Country \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click Submit",
  "keyword": "And "
});
formatter.step({
  "name": "validate Confirmation Message",
  "keyword": "Then "
});
formatter.step({
  "name": "Close Browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FN",
        "LN",
        "PhNo",
        "Email",
        "Add",
        "City",
        "Code",
        "Country"
      ]
    },
    {
      "cells": [
        "Vishwa",
        "A P",
        "9900603364",
        "ap.vishwaprasad@gmail.com",
        "xyz",
        "Ballari",
        "583104",
        "INDIA"
      ]
    }
  ]
});
formatter.background({
  "name": "Open New tour with regestration Page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Open Browser and URL",
  "keyword": "Given "
});
formatter.match({
  "location": "NTStepDef.openBrowserAndURL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Without entering username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag-1"
    }
  ]
});
formatter.step({
  "name": "Click on Regester Link",
  "keyword": "When "
});
formatter.match({
  "location": "NTStepDef.clickOnRegesterLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter firstname \"Vishwa\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTStepDef.enterFirstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter LastName \"A P\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTStepDef.enterLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter PhoneNumber \"9900603364\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTStepDef.enterPhoneNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Email \"ap.vishwaprasad@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTStepDef.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Address \"xyz\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTStepDef.enterAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter City \"Ballari\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTStepDef.enterCity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter PostCode \"583104\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTStepDef.enterPostCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Country \"INDIA\"",
  "keyword": "And "
});
formatter.match({
  "location": "NTStepDef.enterCountry(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Submit",
  "keyword": "And "
});
formatter.match({
  "location": "NTStepDef.clickSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate Confirmation Message",
  "keyword": "Then "
});
formatter.match({
  "location": "NTStepDef.validateConfirmationMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "NTStepDef.closeBrowser()"
});
formatter.result({
  "status": "passed"
});
});