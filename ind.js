// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
    // you cannot run drivers.slice(0,2) and then run
    // return drivers on a new lince as it would return the original 
    // input

}

const returnLastTwoDrivers = function(drivers) {
    // return drivers.slice(Math.max(drivers.length - 2, 1))
    // or
    // return drivers.slice(0).slice(-2)
    // or
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function multiplyByX(number) {
    return number * int
    }
    // the above codetakes in a value of "int", it then scans down
    // and runs function multibyX(num), it then returns num *int

}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, firstOrLastTwo) {
    return firstOrLastTwo(drivers)
}