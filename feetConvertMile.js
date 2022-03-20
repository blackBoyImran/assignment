
///////   ===============>>>>>>>>>>   Feet to mile convert  <<<<<<<<===================////////////////////
function feetToMile(userInput){   
    let oneMileEqualFeet = 5280;
    let result = userInput / oneMileEqualFeet;
    return result.toFixed(2);
}

let frist = feetToMile(300);
console.log(frist);

