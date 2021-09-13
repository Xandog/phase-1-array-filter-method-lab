const { match } = require("sinon");

// Code your solution here
function findMatching(drivers, target){
    const matchingDrivers = drivers.filter(drivers => drivers.toUpperCase() === target.toUpperCase());
    return matchingDrivers;
}

function fuzzyMatch(drivers, target){
    let index = 0;
    const matchingDrivers = drivers.filter(drivers => drivers[index] === target[index])
    return matchingDrivers;
}

function matchName(drivers, target){
    const matchingDrivers = drivers.filter(drivers => drivers.name === target)
    return matchingDrivers;
}