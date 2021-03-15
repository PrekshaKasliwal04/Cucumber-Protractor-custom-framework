# QA Engineer Assessment Solution

## Introduction


Name: Preksha Kasliwal 
GIT profile : https://github.com/PrekshaKasliwal04


## Remarks 

Hi, 

I have added below feature file in 'features' folder:
    1. search-person.feature.
    2. search-planets.feature.
    3. additionalFlows.feature.

All the step definitions can be found in folder - 'steps'. 
Locator values are stored in folder - 'page-objects'.

Some additional enhancements in framework:

1. Added cucumber hooks to cover before and after test procedures - folder 'support'/hooks.ts 
2. Added reporting feature - folder 'support'/reporter.ts

To Execute: 

1. run ng e2e.
2. or npm test.

Approach:

Pre-requisites
1.NodeJS installed globally in the system. https://nodejs.org/en/download/
2.Chrome browsers installed.
3.Text Editor installed (Free Micrsoft Visual Studio Code).
4.Open Terminal.
5.Install npm install cucumber-html-reporter
5.Execute - ng e2e.


I have developed Cucumber - Protractor with the custom framework option. 
Set the 'framework' property to custom by adding framework: 'custom' and frameworkPath: 'protractor-cucumber-framework'.
Covered Positive and negative scenarios along with some additional flows mentioned in README.md. 

There are total 7 test cases. 
