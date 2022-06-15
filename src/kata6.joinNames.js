const joinNames = namesObj => {
let namesArray = namesObj.map(a => a.name);
return namesArray.join(', ').replace(/,(?!.*,)/, ' &');

};

module.exports = joinNames;
