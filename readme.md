# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) jQuery AJAX API Lab: Weather App

<br>

## Overview

The [Open Weather API](https://openweathermap.org/api) is a user friendly API to incorporate world weather data into an application. You will design and build an app that will submit a given city from a form and return the current weather conditions. This homework will use your jQuery AJAX, HTML and CSS skills.

<br>

![](https://i.imgur.com/gauQi3b.png)

## Open Weather Map Details

* Obtain FREE API key: `http://openweathermap.org/appid`
* Returned Object Example: `http://openweathermap.org/forecast16#JSON`
* Example URL: `http://api.openweathermap.org/data/2.5/weather?q=London,UK&APPID=YOUR-APP-ID-HERE`

I highly recommend the <a href="https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en">JSONView</a> chrome extension if you want to check these endpoints in your browser.

<br>

### Lab Requirements

Your Weather API app HTML must have contain:

1. A form with an input field to accept a city name
2. A view that will display the city name, temperature and current conditions

### Advanced features

Going above and beyond the basic implementation is desirable, should you have the time.  Feel free to enhance your project with any of the following features:

1. A way to check the 5 day forecast for a given city
2. Add a weather map to your page
3. Add buttons that a user can click to get the specific weather information he/she wants (5 day, today's weather, a map, etc)
4. Add a "loading" animation while the data is gathered from the API
5. Implement some of the jQuery methods you've learned (`fadeIn()`, `fadeOut()`, etc.)