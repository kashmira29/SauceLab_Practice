package Orangehrm.com;

import org.openqa.selenium.By;
import org.testng.Assert;

public class LoginPage extends Utils {

    Loadprops loadprops = new Loadprops();

    private By _Username = By.id("txtUsername");
    private By _Password = By.id("txtPassword");
    private By _Submit = By.id("btnLogin");

    public void enterLoginDetails() {

        enterText(_Username, loadprops.getProperty("UserName"));
        enterText(_Password, loadprops.getProperty("Password"));
        clickButton(_Submit);

    }

    public void assertLoginpage() {
        String expected = loadprops.getProperty("expectedLogin");
        String actual = getText(By.xpath("//*[@id=\"welcome\"]"));

        Assert.assertEquals(expected, actual);
    }

    public void assertInvalidLogin() {

        //assertURL("validateCredentials");

        asserturl("https://opensource-demo.orangehrmlive.com/index.php/auth/validateCredentials");

    }
}
