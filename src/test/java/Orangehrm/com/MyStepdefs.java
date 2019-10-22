package Orangehrm.com;

import Orangehrm.com.LoginPage;
import Orangehrm.com.Utils;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;

public class MyStepdefs extends Utils
{
    LoginPage loginPage = new LoginPage();


    @Given("^user is on Login page$")
    public void userIsOnLoginPage() {
    }

    @When("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userEnterAnd(String username, String password)  {

        enterText(By.id("txtUsername"),username);
        enterText(By.id("txtPassword"),password);
        clickButton(By.id("btnLogin"));

    }

    @Then("^user should be able to login successfully and should see welcome message$")
    public void userShouldBeAbleToLoginSuccessfullyAndShouldSeeWelcomeMessage() {
        loginPage.assertLoginpage();

    }

    @Given("^user is on the Login page$")
    public void userIsOnTheLoginPage() {

    }

    @When("^user enter the \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userEnterTheAnd(String invalid_username, String invalid_Password)  {

        enterText(By.id("txtUsername"),invalid_username);
        enterText(By.id("txtPassword"),invalid_Password);
        clickButton(By.id("btnLogin"));

    }

    @Then("^user should not be able to login and see error message$")
    public void userShouldNotBeAbleToLoginAndSeeErrorMessage() {
        loginPage.assertInvalidLogin();
    }
}
