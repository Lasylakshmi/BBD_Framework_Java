package Runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

import org.junit.After;
import org.junit.runner.RunWith;

import StepDefinitions.Steps;
@RunWith(Cucumber.class)
@CucumberOptions(
        features= "src/test/java/Resources",
        glue = {"StepDefinitions"},
        plugin = {"pretty","html:report","json:report//cucumber.json","junit:report//cucumber.xml"},
        dryRun =false,
        monochrome =true
         
        )
public class TestRuner {
	
	@After
	public void quit()
	{
		Steps.driver.quit();
	}
    
}