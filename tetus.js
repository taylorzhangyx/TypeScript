//veriable
var myName = "Taylor";
var myAge = 41;
var canVote = true;
var veriable = 2;
document.getElementById("tsStuff").innerHTML = "My Name is " + myName;
//read type of things
document.write("Myname is " + typeof (myName) + "</br>");
document.write("myAge is " + typeof (myAge) + "</br>");
document.write("canVote is " + typeof (canVote) + "</br>");
document.write("veriable is " + typeof (veriable) + "</br>");
//parse number to string and verse versa
var strToNum = parseInt("5");
var numToString = 66;
document.write("numToString is " + typeof (numToString.toString()) + "</br>");
var PI = 3.1415926;
document.write(PI.toString() + "<br />");
var superman = {
    realName: "Clark",
    superName: "SuperMan"
};
document.write(superman.realName + " is " + superman.superName + "<br />");
//array
var employees = ["Bob", "Sally", "Sam"];
document.write(employees.toString() + "<br />");
var SuperStars = [];
SuperStars.push({
    realName: "TaylorK",
    superName: "KeyMan"
});
document.write(SuperStars[0].realName + " is " + SuperStars[0].superName + "<br />");
//let veriables
var samplet = 123;
if (true) {
    var samplet_1 = 456;
}
document.write(samplet + "<br />");
//Array access
var randArray = [5, 6, 7, 8];
//for in -> out put index
for (var val in randArray) {
    document.write(val + "<br />");
}
//for of -> out put value
for (var _i = 0, _a = randArray.map(String); _i < _a.length; _i++) {
    var val = _a[_i];
    document.write(val + "<br />");
}
