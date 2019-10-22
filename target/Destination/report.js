$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resourses/Features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "login functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "user should be able to login successfully and should see welcome message",
  "description": "",
  "id": "login-functionality;user-should-be-able-to-login-successfully-and-should-see-welcome-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully and should see welcome message",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "login-functionality;user-should-be-able-to-login-successfully-and-should-see-welcome-message;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "login-functionality;user-should-be-able-to-login-successfully-and-should-see-welcome-message;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 9,
      "id": "login-functionality;user-should-be-able-to-login-successfully-and-should-see-welcome-message;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12069100851,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "user should be able to login successfully and should see welcome message",
  "description": "",
  "id": "login-functionality;user-should-be-able-to-login-successfully-and-should-see-welcome-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should be able to login successfully and should see welcome message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPage()"
});
formatter.result({
  "duration": 680933029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 12
    },
    {
      "val": "admin123",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.userEnterAnd(String,String)"
});
formatter.result({
  "duration": 3038759388,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldBeAbleToLoginSuccessfullyAndShouldSeeWelcomeMessage()"
});
formatter.result({
  "duration": 230741653,
  "status": "passed"
});
formatter.after({
  "duration": 144595461,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "user should not be able to login with invalid credentials and see error message",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials-and-see-error-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enter the \"\u003cinvalid username\u003e\" and \"\u003cinvalid Password\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should not be able to login and see error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials-and-see-error-message;",
  "rows": [
    {
      "cells": [
        "invalid username",
        "invalid Password"
      ],
      "line": 16,
      "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials-and-see-error-message;;1"
    },
    {
      "cells": [
        "admin",
        "Admin123"
      ],
      "line": 17,
      "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials-and-see-error-message;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3335112916,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "user should not be able to login with invalid credentials and see error message",
  "description": "",
  "id": "login-functionality;user-should-not-be-able-to-login-with-invalid-credentials-and-see-error-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on the Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enter the \"admin\" and \"Admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should not be able to login and see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheLoginPage()"
});
formatter.result({
  "duration": 84228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 16
    },
    {
      "val": "Admin123",
      "offset": 28
    }
  ],
  "location": "MyStepdefs.userEnterTheAnd(String,String)"
});
formatter.result({
  "duration": 1567950547,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldNotBeAbleToLoginAndSeeErrorMessage()"
});
formatter.result({
  "duration": 60780651,
  "status": "passed"
});
formatter.after({
  "duration": 120985747,
  "status": "passed"
});
});