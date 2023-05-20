function convertTemperature() {
  var input = document.getElementById("tempInput").value;
  var unit = document.getElementById("tempUnit").value;
  var result = document.getElementById("tempResult");

  if (unit === "celsius") {
    result.innerHTML = input + "°C = " + celsiusToFahrenheit(input) + "°F = " + celsiusToKelvin(input) + "K";
  } else if (unit === "fahrenheit") {
    result.innerHTML = input + "°F = " + fahrenheitToCelsius(input) + "°C = " + fahrenheitToKelvin(input) + "K";
  } else if (unit === "kelvin") {
    result.innerHTML = input + "K = " + kelvinToCelsius(input) + "°C = " + kelvinToFahrenheit(input) + "°F";
  }
}

function convertLength() {
  var input = document.getElementById("lengthInput").value;
  var unit = document.getElementById("lengthUnit").value;
  var result = document.getElementById("lengthResult");

  if (unit === "meters") {
    result.innerHTML = input + "m = " + metersToFeet(input) + "ft = " + metersToInches(input) + "in";
  } else if (unit === "feet") {
    result.innerHTML = input + "ft = " + feetToMeters(input) + "m = " + feetToInches(input) + "in";
  } else if (unit === "inches") {
    result.innerHTML = input + "in = " + inchesToMeters(input) + "m = " + inchesToFeet(input) + "ft";
  }
}


// Temperature Conversion Functions
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function celsiusToKelvin(celsius) {
  return parseFloat(celsius) + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function fahrenheitToKelvin(fahrenheit) {
  return (parseFloat(fahrenheit) + 459.67) * 5 / 9;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
  return (kelvin * 9 / 5) - 459.67;
}

// Length Conversion Functions
function metersToFeet(meters) {
  return meters * 3.281;
}

function metersToInches(meters) {
  return meters * 39.37;
}

function feetToMeters(feet) {
  return feet / 3.281;
}

function feetToInches(feet) {
  return feet * 12;
}

function inchesToMeters(inches) {
  return inches / 39.37;
}

function inchesToFeet(inches) {
  return inches / 12;
}

