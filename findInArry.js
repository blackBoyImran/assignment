
///// ======= >>>>>>>>>    find max value in array    <<<<<<<<<<===========//////////

let userList = [20,22, 3,50,23, 40 , 303, 600, 202, 201, 432 , 500];
let max = userList[0];
for(let i = 1; i<userList.length;i++){
    let eliment = userList[i];
    if(max < eliment){
        max = eliment;
    }
}

console.log(max);






///// ======= >>>>>>>>>    find min value in array    <<<<<<<<<<===========//////////

let min = userList[0];
for(let i = 1;i<userList.length;i++){
    let check = userList[i];
    if(min>check){
        min = check;
    }
}

console.log(min);






///// ======= >>>>>>>>>    find max value(String) in array    <<<<<<<<<<===========//////////

var arr = ["tania akter","imran","sir","tajul","raja"];
  var lgth = 0;
  var longest;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
       lgth = arr[i].length;
      longest = arr[i];
    }
  }
  
  console.log(longest);






///// ======= >>>>>>>>>    find max value(String) in array another way  <<<<<<<<<<===========//////////

let friends = ["Imran", "Tania", "Shamiha", "Tajul", "Raja","Mostakim", "Nazmul"];

  let largeName = friends.reduce(function(a, b){
    return a.length >= b.length ? a : b;
})

console.log(largeName);



///// ======= >>>>>>>>>    find min value(String) in array    <<<<<<<<<<===========//////////

let small = friends.reduce(function(a, b){
    return a.length <= b.length ? a : b;
})

console.log(small);

