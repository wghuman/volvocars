# volvocars
## Pre Conditions and assumptions
This framework requires to have the following on your machine
1. Node
2. Docker Desktop
3. Chrome browser
4. Firefox and/or Edge(optional)

## Description 
This framework is build using [webdriverio](www.webdriver.io) and is based on page object model. It runs some sample e2e tests as well as imagecomparison tests using [image comparison service](https://webdriver.io/docs/wdio-image-comparison-service). Once the tests are finished, an allure report is generated and if the tests are failing, the screenshot is added to the failed tests and the step. This framework is locked to run two instances per browser for parallel execution at the moment. But that can be changed in config file under maxIntances as per requirement. 

## Firing up 
Run the following command in terminal to install the required dependencies

```
npm i
```

## Run the tests
### setup 
This framework comes with dockerized selenium grid containing nodes for selenium hub, and 3 major browser: Google Chrome, MS Edge, and Mozilla Firefox. To fire the docker environment up, run the following command in terminal

```
npm run setup
```

### Run tests Dockerized
This will run both functional and image comparison tests in a dockerized environment.
To run the tests in dockerized environment, run the following command

```
npm run volvodocker
```
To run image comparison tests, use the follwoing command

```
npm run volvoimagecheck
```

### Teardown
once the tests are completed, run the following command in your terminal to take the docker environment down. This will detatch all the containers fired up previousely

```
npm run teardown
```

## Run tests locally
### Run tests locally in headfull mode
To run tests locally in headfull mode, run the following

```
npm run volvo
```
This will run headfull tests in Chrome and MS Edge.

### Run the tests in headless mode
To run the tests in headless mode, run the follwoing command 

```
npm run volvoheadless
```

### Run image comparison tests
TO run the image comparison tests, use the following command

```
npm run volvoimagecheck
```
This will first create the baseline/reference images if they do not exist. Then will compare the current verison with baseline/reference images.

## Test Reports
The tests are compiled using Allure Report. In case of failed tests, the screenshot of failed testcase/step is automatically saved to the test run
Once the tests are completed, to view the test results, run the following command

```
npm run volvotestreport
```
This will open the test results file in your default browser. 

## Github Actions
A basic and simple workflow to run the tests (both functional tests and image comparison tests) on every push. The results can be found under actions tab.

## Improvements

This framework can be further improved to use environment variables to set several services, target browsers, parallelism as well as difference capabilities of Nodes. 