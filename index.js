// Code your solution in this file!




function createFareMultiplier(int) {
    return function multiplyByX(number) {
        return number * int; 
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const returnFirstTwoDrivers = function(driver) {
    return driver.slice(0,2)
}


const returnLastTwoDrivers = function(driver) {
    return driver.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function selectDifferentDrivers(drivers, placement){
    return placement(drivers)
}


// differences between function and const