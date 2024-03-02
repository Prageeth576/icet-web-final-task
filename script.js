console.log("test");

let date = new Date();

//console.log(date);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//let math = getRandomInt(10);

//let num = Math.floor(Math.random() * 10)

//console.log(num);

let customer = {
    name : "Prageeth",
    age : 21,
    city : "Panadura"
}

let jsonob = JSON.stringify(customer);

console.log(customer);
console.log(jsonob);
console.log(JSON.parse(jsonob).age);

function fun(value){
    console.log("fun work!"+value);
}

console.log(fun(10));

// task 

let randomNum = Math.floor(Math.random() * 10);
let count = 0;

function submit(){
    count++;
    let num = document.getElementById("gestNumber").value;
    console.log(num, " ", randomNum, "count => ", count);

    if(randomNum==num & count<=3){
        document.getElementById("displayResult").innerHTML = "Success! => "+randomNum;
        document.getElementById("gestNumber").disabled = true;
        document.getElementById("btnSubmit").disabled = true;
    } else if(randomNum!=num & count<3){
        document.getElementById("displayResult").innerHTML = "You have to "+(3-count)+" chance.";
    } else if(randomNum!=num & count==3){
        document.getElementById("displayResult").innerHTML = "Failed! you have to no chance.";
        document.getElementById("gestNumber").disabled = true;
        document.getElementById("btnSubmit").disabled = true;
    }
}