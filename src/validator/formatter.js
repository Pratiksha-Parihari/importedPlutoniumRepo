const afterTrim = function(){
 let str = "    FunctionUp     ";
 console.log("Before trimming:" + str);
 let afterTrim = str.trim();
 console.log("after trimming :" + afterTrim);

}

const changeToUpperCase = function(){
    let str = "Functionup";
    console.log("Before converting to upper case:  " + str);
    let afterConvertingToUpperCase = str.toUpperCase();
    console.log("After converting to upper case: " + afterConvertingToUpperCase);
}
const changetoLowerCase = function(){
    let str = "FUNCTIONUP";
    console.log("Before converting to upper case:  " + str);
    let afterConvertingToLowerCase = str.toLowerCase();
    console.log("After converting to upper case: " + afterConvertingToLowerCase);
}


module.exports.afterTrim = afterTrim;
module.exports.changeToUpperCase = changeToUpperCase;
module.exports.changetoLowerCase = changetoLowerCase