$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Resources/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "Login with correct credentials",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with correct credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Browser is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Steps.browser_is_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to URL",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Steps.user_is_navigated_to_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered their username \"Tester\" and password \"Test@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Steps.user_entered_their_userName_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully login into system",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Steps.user_successfully_login_into_system()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Gmail]\u003e but was:\u003c[Find a Flight: Mercury Tours:]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefinitions.Steps.user_successfully_login_into_system(Steps.java:42)\r\n\tat ✽.user successfully login into system(file:///C:/Users/Admin/Desktop/Automation_BDD/BDD/src/test/java/Resources/Login.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login with incorrect credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Browser is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.Steps.browser_is_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to URL",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.Steps.user_is_navigated_to_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user entered their username \"mercury\" and password \"mercury1\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.Steps.user_entered_their_userName_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not login into system",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.Steps.user_should_login_into_system()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Gmail]\u003e but was:\u003c[Sign-on: Mercury Tours]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefinitions.Steps.user_should_login_into_system(Steps.java:48)\r\n\tat ✽.user should not login into system(file:///C:/Users/Admin/Desktop/Automation_BDD/BDD/src/test/java/Resources/Login.feature:13)\r\n",
  "status": "failed"
});
});