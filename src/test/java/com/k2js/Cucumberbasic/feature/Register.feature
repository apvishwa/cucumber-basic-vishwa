Feature: New Tour Regestration PageVlaidation
Background: Open New tour with regestration Page
Given Open Browser and URL

@tag-1
Scenario Outline: Without entering username and password
When Click on Regester Link
And Enter firstname "<FN>"
And Enter LastName "<LN>"
And Enter PhoneNumber "<PhNo>"
And Enter Email "<Email>"
And Enter Address "<Add>"
And Enter City "<City>"
And Enter PostCode "<Code>"
And Enter Country "<Country>"
And Click Submit
Then validate Confirmation Message
And Close Browser
Examples: 
|FN|LN|PhNo|Email|Add|City|Code|Country|
|Vishwa|A P|9900603364|ap.vishwaprasad@gmail.com|xyz|Ballari|583104|INDIA |






