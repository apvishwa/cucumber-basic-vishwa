package com.k2js.Cucumberbasic.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features = "src/test/java/com/k2js/Cucumberbasic/feature/Register.feature",
		glue = {"classpath:com.k2js.Cucumberbasic.step"},
		plugin = {"pretty","html:target/cucumber-reports"},
		snippets = SnippetType.CAMELCASE,
		junit = "--step-notifications",
		//dryRun = true,
		strict = true,
		monochrome = true,
		tags = {"@tag-1"}
		
		
		)

public class RunNTRunner {

	
}
