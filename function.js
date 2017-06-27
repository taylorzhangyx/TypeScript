var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(5, 2);
document.write("5 + 2 = " + theSum1 + "<br />");
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof (num3) !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
var sum2 = getDiff(5, 4, 10);
document.write("5 - 2 = " + sum2 + "<br />");
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write("Sum: " + sum + "<br />");
};
sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var addOne = function (x) { return x + 1; };
document.write("1 + 3 = " + addOne(1) + "<br />");
//Classes
var Animal = (function () {
    function Animal(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numOfAnimals++;
    }
    Animal.prototype.ownerInfo = function () {
        document.write(this.name + " is owned by " + this.owner + "<br />");
    };
    Animal.howManyAnimals = function () {
        return Animal.numOfAnimals;
    };
    Object.defineProperty(Animal.prototype, "weight", {
        get: function () {
            return this._weight;
        },
        set: function (weight) {
            this._weight = weight;
        },
        enumerable: true,
        configurable: true
    });
    return Animal;
}());
Animal.numOfAnimals = 0;
var spot = new Animal("Spot", "Doug");
spot.ownerInfo();
spot.weight = 100;
document.write("The weight is " + spot.weight + "<br />");
//Use static way to get static field
document.write("# of Animals is " + Animal.howManyAnimals() + "<br />");
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name, owner) {
        var _this = _super.call(this, name, owner) || this;
        Dog.numOfAnimals++;
        return _this;
    }
    return Dog;
}(Animal));
var grover = new Dog("Grover", "Jimmy");
//use static way to visit static function
document.write("# of Animals is " + Animal.howManyAnimals() + "<br />");
//use instanceof to check the class inherient
document.write("Is a Dog an Animal : " + (grover instanceof Animal) + "<br />");
//in keywork to check if an property in the class
document.write("Does grove have a name : " + ('name' in grover) + "<br />");
//Generic functions
function GetType(val) {
    return typeof (val);
}
var aStr = "A String";
var aNum = 10;
document.write(GetType(aStr) + "<br />");
document.write(GetType(aNum) + "<br />");
var Car = (function () {
    function Car(wheel) {
        this.wheel = wheel;
    }
    Car.prototype.drive = function () {
        document.write("The car drives with " + this.wheel + " wheels <br />");
    };
    return Car;
}());
var Bicycle = (function () {
    function Bicycle(wheel) {
        this.wheel = wheel;
    }
    Bicycle.prototype.drive = function () {
        document.write("The Bicycle drives with " + this.wheel + " wheels <br />");
    };
    return Bicycle;
}());
var car = new Car(4);
var bicycle = new Bicycle(2);
car.drive();
bicycle.drive();
function GetWheels(veh) {
    return veh.drive();
}
GetWheels(car);
GetWheels(bicycle);
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
aNumber.add = function (x, y) { return x + y; };
document.write("5 + 4 = " + aNumber.add(5, 4) + "<br />");
var aStrNum = new GenericNumber();
aStrNum.add = function (x, y) {
    return String(Number(x) + Number(y));
};
document.write("5 + 6 = " + aStrNum.add("5", "6") + "<br />");
//extract values from object/map
var randVals = { x: 1, y: 2, z: 3 };
var x = randVals.x, y = randVals.y, z = randVals.z;
document.write(x + y + z + "<br />");
document.write("" + x + y + z + "<br />");
_a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
document.write("Switch: " + x + y + z + "<br />");
var _a;
