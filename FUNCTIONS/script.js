// greet function 1//
function greet(name) {
  return `hello, ${name}!`;
}
console.log(greet("function"));

// function 2 //

let i = 0;
function f1() {
  i++;
  console.log("im a function" + i);
}
f1(); //function call//

// adding function 3//

let a = 10;
let b = 20;
function add(a1, b1) {
  return a1 + b1;
}
let total = add(a, b);
console.log(total);

// adding function 4 //

function funct(a, b) {
  console.log("first number is:" + a);
  console.log("second number is:" + b);
  return a + b;
}
console.log("total is:" + funct(3, 3));

// comparision function 5 //

function marks(maths, english) {
  return maths <= english;
}
console.log(marks(20, 200));

//  even function 6

function myfunc(number) {
  return number % 2 == 0;
}

console.log("your function is an even number:" + myfunc(10));

// factorial function 7 //

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));

// smallest number function 8 //
function findsmallestnumber(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
console.log(
  "your smallest number is: " + findsmallestnumber([10, 20, 40, 50, 6])
);

// areaofcircle function 9//
function areaofcircle(radius) {
  return Math.PI * radius * radius;
}
console.log(areaofcircle(5));
