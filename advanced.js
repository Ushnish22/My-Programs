var obj = {num:2};



var addToThis = function (a,b,c){

  return this.num + a+b+c;

};

//var arr=[1,2,3];

console.log(addToThis.call(obj,1,2,3));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

var obj = {num:2};



var addToThis = function (a,b,c){

  return this.num + a+b+c;

};

var arr=[1,2,3];

console.log(addToThis.apply(obj,arr));

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

var obj = {num:2};



var addToThis = function (a,b,c){

  return this.num + a+b+c;

};

var arr=[1,2,3];

var bound = addToThis.bind(obj);

console.log(bound(1,2,3));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

var student = {age:20};



var addToThis = function (){

  return this.age;

};

var arr=[1,2,3];

var bound = addToThis.bind(student);

console.log(bound());

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

let multiply = function(x,y){

  console.log(x*y);

}

let multiplyByTwo = multiply.bind(this,2);

multiplyByTwo(5);



let multiplyByThree = multiply.bind(this,3);

multiplyByThree(6);