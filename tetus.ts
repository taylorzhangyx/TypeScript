var myName: string = "Taylor";
var myAge: number = 41;
var canVote: boolean = true;
var veriable: any = 2;

document.getElementById("tsStuff").innerHTML = "My Name is " + myName;

document.write("Myname is " + typeof(myName) + "</br>");
document.write("myAge is " + typeof(myAge) + "</br>");
document.write("canVote is " + typeof(canVote) + "</br>");
document.write("veriable is " + typeof(veriable) + "</br>");

var strToNum: number = parseInt("5");
var numToString: number = 66;
document.write("numToString is " + typeof(numToString.toString()) + "</br>");

const PI : number = 3.1415926;

document.write(PI.toString() + "<br />");


interface SuperHero {
  realName: string;
  superName: string;
}

var superman : SuperHero = {
  realName: "Clark",
  superName: "SuperMan"
}

document.write(superman.realName + " is " + superman.superName + "<br />");

var employees: string[] = ["Bob", "Sally", "Sam"];

document.write(employees.toString() + "<br />");

var SuperStars : SuperHero[] = [];

SuperStars.push({
  realName: "TaylorK",
  superName: "KeyMan"
});

document.write(SuperStars[0].realName + " is " + SuperStars[0].superName + "<br />");
