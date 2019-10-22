        @login
        Feature: login functionality
          Scenario Outline: user should be able to login successfully and should see welcome message
            Given user is on Login page
            When user enter "<username>" and "<password>"
            Then user should be able to login successfully and should see welcome message
            Examples:
            |username|password|
            |Admin   |admin123|

          Scenario Outline: user should not be able to login with invalid credentials and see error message
            Given user is on the Login page
            When user enter the "<invalid username>" and "<invalid Password>"
            Then user should not be able to login and see error message
            Examples:
              |invalid username|invalid Password|
              |admin           |Admin123        |


