
///////   ===============>>>>>>>>>>   Feet to mile convert  <<<<<<<<===================////////////////////
function feetToMile(userInput){   
    let oneMileEqualFeet = 5280;
    let result = userInput / oneMileEqualFeet;
    return result.toFixed(2);
}

let frist = feetToMile(300);
console.log(frist);





///////   ===============>>>>>>>>>>   Wood calculator  <<<<<<<<===================////////////////////

function woodCalculator(chir, table, bed){
 
    let chirConvert = chir * 1;
    let tableConvert = table * 3;
    let bedConvert = bed * 5;
    let result = chirConvert + tableConvert + bedConvert;
    return result;
}

let chirC = woodCalculator(10,5,5);
console.log(chirC);




///////   ===============>>>>>>>>>>   Wood calculator  <<<<<<<<===================////////////////////

let tinyFriend = ["Imran", "Tania", "Shamiha", "Tajul", "Raja","Mostakim", "Nazmul"];

let sortName = tinyFriend.reduce(function(a, b){
    return a.length <= b.length ? a : b;
})

console.log(sortName);