package com.k2js.Cucumberbasic.step;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NTStepDef {

	private WebDriver driver;
	
	
	@Given("Open Browser and URL")
	public void openBrowserAndURL() {
		System.setProperty("webdriver.chrome.driver", "D:\\SeleniumtraningbyJitendre\\Tools\\chromedriver_win32 -76-(1)\\chromedriver76.exe");
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(120, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get("http://newtours.demoaut.com/");
	
	}

	@When("Click on Regester Link")
	public void clickOnRegesterLink() {
		driver.findElement(By.linkText("REGISTER")).click();
		
	}

	@When("Enter firstname {string}")
	public void enterFirstname(String fn) {
		driver.findElement(By.name("firstName")).sendKeys(fn);
	}

	@When("Enter LastName {string}")
	public void enterLastName(String ln) {
		driver.findElement(By.name("lastName")).sendKeys(ln);
	}

	@When("Enter PhoneNumber {string}")
	public void enterPhoneNumber(String ph) {
		driver.findElement(By.name("phone")).sendKeys(ph);
		
	}

	@When("Enter Email {string}")
	public void enterEmail(String email) {
		driver.findElement(By.name("userName")).sendKeys(email);
	}

	@When("Enter Address {string}")
	public void enterAddress(String add) {
		driver.findElement(By.name("address1")).sendKeys(add);
	}

	@When("Enter City {string}")
	public void enterCity(String city) {
		driver.findElement(By.name("city")).sendKeys(city);
	}

	@When("Enter PostCode {string}")
	public void enterPostCode(String pc) {
		driver.findElement(By.name("postalCode")).sendKeys(pc);
	}

	@When("Enter Country {string}")
	public void enterCountry(String count) {
		WebElement cou=driver.findElement(By.name("country"));
		Select ss=new Select(cou);
		ss.selectByVisibleText(count);
		
		//System.out.println(cou.getText());
		//ss.getOptions().stream().filter(x->x.getText().equalsIgnoreCase(count)).forEach(x->x.click());
	}
	
	
	@When("Click Submit")
	public void clickSubmit() {
		driver.findElement(By.name("register")).click();
	}
	
	

	@Then("validate Confirmation Message")
	public void validateConfirmationMessage() {
		String exptext="Dear Vishwa A P,\nThank you for registering. You may now sign-in using the user name and password you've just entered.\nNote: Your user name is .";
		WebElement t=driver.findElement(By.xpath("//b[contains(text(),'Dear')]/../../.."));
		String actualtext=t.getText();
		System.out.println(actualtext);
		Assert.assertTrue(exptext.equalsIgnoreCase(actualtext));
		
	}
	
	@When("Close Browser")
	public void closeBrowser() {
		driver.close();
	}

	
	

}
