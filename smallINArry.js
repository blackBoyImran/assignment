

let friends = ["Shati", "Shamiha", "Tania", "Imran", "Mostakim","Raja","Nazmul"]

let small = friends.reduce(function(a, b){
    return a.length <= b.length ? a : b;
});

console.log("Smal : "+small);

let large = friends.reduce(function(x,y){
    return x.length >= y.length ? x : y;
})

console.log("Large : "+large)