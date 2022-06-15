const reachDestination = (distance, speed) => {

let nearestHalfHour = (Math.round((distance/speed) *2)/2).toFixed(1);

return "I should be there in " + (nearestHalfHour) + " hour(s)"


};

module.exports = reachDestination;
/*
find out the number of hours
round up the number of hours to the nearest .5

put in a string "I should be there in X hour(s)"*/