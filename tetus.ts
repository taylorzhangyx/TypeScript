//veriable
var myName: string = "Taylor";
var myAge: number = 41;
var canVote: boolean = true;
var veriable: any = 2;

document.getElementById("tsStuff").innerHTML = "My Name is " + myName;

//read type of things
document.write("Myname is " + typeof(myName) + "</br>");
document.write("myAge is " + typeof(myAge) + "</br>");
document.write("canVote is " + typeof(canVote) + "</br>");
document.write("veriable is " + typeof(veriable) + "</br>");

//parse number to string and verse versa
var strToNum: number = parseInt("5");
var numToString: number = 66;
document.write("numToString is " + typeof(numToString.toString()) + "</br>");

const PI : number = 3.1415926;

document.write(PI.toString() + "<br />");

//interface
interface SuperHero {
  realName: string;
  superName: string;
}

var superman : SuperHero = {
  realName: "Clark",
  superName: "SuperMan"
}

document.write(superman.realName + " is " + superman.superName + "<br />");

//array
var employees: string[] = ["Bob", "Sally", "Sam"];

document.write(employees.toString() + "<br />");

var SuperStars : SuperHero[] = [];

SuperStars.push({
  realName: "TaylorK",
  superName: "KeyMan"
});

document.write(SuperStars[0].realName + " is " + SuperStars[0].superName + "<br />");

//let veriables
let samplet = 123;
if(true){
  let  samplet = 456;
}
document.write(samplet + "<br />");

//Array access
var randArray = [5,6,7,8];

//for in -> out put index
for(var val in randArray){
  document.write(val + "<br />");
}

//for of -> out put value
for(var val of randArray.map(String)){
    document.write(val + "<br />");
}
