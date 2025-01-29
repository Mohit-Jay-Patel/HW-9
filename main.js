var car = ["Rolls Royce", "Toyota","BMW","Audi","Ferrari","Mercedes"];

for(var c = 0; c < car.length ; c++){
    document.getElementById("output").innerHTML += car[c] + '<br>';
    console.log(car[c]);
}