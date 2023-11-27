package StepDefinitions;


import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
public class Steps {
    
    public static WebDriver driver;
    
    @Given("Browser is opened")
    public void browser_is_opened() {
    	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Admin\\Desktop\\Automation_BDD\\BDD\\chromedriver.exe");
         //WebDriverManager.chromedriver().setup();
        
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        
    }
    
    @When("user is navigated to URL")
    public void user_is_navigated_to_URL() {
        // Write code here that turns the phrase above into concrete actions
        driver.get("http://gmail.com/");    
    }
    @When("user entered their username \"(.*)\" and password \"(.*)\"$")
    public void user_entered_their_userName_and_password(String userName, String password) {
        driver.findElement(By.id("identifierId")).sendKeys(userName);
        driver.findElement(By.xpath("//span[contains(text(),'Next')]")).click();
        
    }
    @Then("user successfully login into system")
    public void user_successfully_login_into_system() {
        String winTitle = driver.getTitle();
        Assert.assertEquals(winTitle, "Find a Flight: Mercury Tours:");
        driver.close();
    }
    @Then("user should not login into system")
    public void user_should_login_into_system() {
        String winTitle = driver.getTitle();
        Assert.assertEquals(winTitle, "Sign-on: Mercury Tours");
        driver.close();
    }
}