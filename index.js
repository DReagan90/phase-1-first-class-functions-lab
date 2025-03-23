// Code your solution in this file!
// helpers.js

// Function to return the first two drivers
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// Function to return the last two drivers
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Array of functions for selecting drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Function to double the fare
function fareDoubler(fare) {
  return fare * 2;
}

// Function to triple the fare
function fareTripler(fare) {
  return fare * 3;
}

// Function to select different drivers based on the passed function
function selectDifferentDrivers(drivers, func) {
  return func(drivers);
}

// Export all functions and constants
module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
};
