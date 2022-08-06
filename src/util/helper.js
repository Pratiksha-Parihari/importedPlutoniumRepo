const date = new Date();

const printDate = function(){
    console.log("currentDate: " + date.toISOString().slice(0, 10));
}

const printMonth = function(){
    console.log("currentMonth: " + date.getMonth());
}
const getBatchInfo= function() {
    console.log(" batch name: Plutonium , week#: 3, Day#: 5 , the topic being taught today is Node JS module system ");
}
module.exports.printDate = printDate 
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo