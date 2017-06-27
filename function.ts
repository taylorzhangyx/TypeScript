var getSum = function(num1: number, num2: number): number{
  return num1 + num2;
}

var theSum1: number = getSum(5, 2);

document.write("5 + 2 = " + theSum1 + "<br />");

var getDiff = function(num1: number, num2 = 2, num3?:number): number{
  if(typeof(num3) !== 'undefined'){
    return num1 - num2 - num3;
  }
  return num1 - num2;
}

var sum2 : number = getDiff(5,4,10);

document.write("5 - 2 = " + sum2 + "<br />");


var sumAll = function (...nums: number[]): void{
  var sum = nums.reduce((a,b) => a+b, 0);
  document.write("Sum: " + sum + "<br />");
}

sumAll(1,2,3,4,5,6,7,8,9,10);

var addOne = (x)=>x+1;

document.write("1 + 3 = " + addOne(1) + "<br />");

//Classes
class Animal {
  public favFood: string;
  static numOfAnimals: number = 0;

  constructor(private name: string, private owner: string){
    Animal.numOfAnimals++;
  }

  ownerInfo(){
    document.write(this.name + " is owned by " + this.owner + "<br />");
  }

  static howManyAnimals(): number{
    return Animal.numOfAnimals;
  }

  private _weight: number;

  get weight(): number{
    return this._weight;
  }

  set weight(weight: number){
    this._weight = weight;
  }
}

var spot = new Animal("Spot", "Doug");

spot.ownerInfo();

spot.weight = 100;

document.write("The weight is " + spot.weight + "<br />");

//Use static way to get static field
document.write("# of Animals is " + Animal.howManyAnimals() + "<br />");

class Dog extends Animal{
  constructor(name: string, owner: string){
    super(name, owner);
    Dog.numOfAnimals++;
  }
}

var grover = new Dog("Grover", "Jimmy");

//use static way to visit static function
document.write("# of Animals is " + Animal.howManyAnimals() + "<br />");

//use instanceof to check the class inherient
document.write("Is a Dog an Animal : " + (grover instanceof Animal) + "<br />");

//in keywork to check if an property in the class
document.write("Does grove have a name : " + ('name' in grover) + "<br />");

//Interface Example
interface Vehicle{
  drive(): any;
}

class Car implements Vehicle{
  constructor(private wheel: number){}

  drive(): void{
    document.write("The car drives with " + this.wheel + " wheels <br />");
  }
}

class Bicycle implements Vehicle{
  constructor(private wheel: number){}

  drive(): void{
    document.write("The Bicycle drives with " + this.wheel + " wheels <br />");
  }
}

var car = new Car(4);
var bicycle = new Bicycle(2);

car.drive();
bicycle.drive();
