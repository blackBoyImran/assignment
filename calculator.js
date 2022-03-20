

function woodCalculator(chir, table, bed){
 
    let chirConvert = chir * 1;
    let tableConvert = table * 3;
    let bedConvert = bed * 5;
    let result = chirConvert + tableConvert + bedConvert;
    return result;
}

let chirC = woodCalculator(10,5,5);
console.log(chirC);
