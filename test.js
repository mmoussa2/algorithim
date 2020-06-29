function isValidSubsequence(array, sequence) {
  // Write your code here.

  let seqIdx = 0
  for (let num of array) {

    let num = sequence[seqIdx];

    if (num === num) seqIdx++;
  
    if (seqIdx === sequence.length) return true;
  }
  return false
}

let array = [5,1,22,25,6,-1,8,10];
let sequence = [1,6,-1,10]

//isValidSubsequence(array, sequence);


function moveElementToEnd(array, toMove) {
  // Write your code here.
  array.forEach((num, idx) => {
    if (num === toMove) {
      array.splice(idx, 1)
      array.push(num);

    }
  });
  return array
}

//console.log(moveElementToEnd([2,1,2,2,2,3,4,2], 2))
function isMonotonic(array){
  let isNonDesending = true;
  let isNonAssending = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDesending = false;
    if (array[i] > array[i - 1]) isNonAssending = false;
  }
  return isNonAssending || isNonDesending

}

//console.log(isMonotonic([1,2,6,4,5]))

let direction = new Map([['left',false], ['bottom', false], ['right',true], ['up',false]]);

//let dir = Object.keys(direction).filter(k => direction[k] === true)

let dir  = direction.entries()
//console.log([...dir].filter(([k, v]) => v === true));







// You are climbing a stair case.It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps.In how many distinct ways can you climb to the top ?

//   Note : Given n will be a positive integer.

//     Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// 4
// 1 1 1 1 
// 2 2 
// 2 1 1 
// 1 2 1
// 1  1 2

//1 => n-1 0 

//     3
//   2   1  
// 1  1

[1,1,2,3,5]

var obj = {
  value: 10,
  // Method call
  show: function () {
    console.log(this.value); // 10
    // Function call
    function show1() {
      console.log(this.value); // undefined
    }
    show1();
    // Arrow function
    var show2 = () => {
      console.log(this.value); // 10 this refers to obj
    }
    show2();
  }
}
//obj.show();

let obj1 = [
  {id:1, name: 'majid'},
  { id: 3, name: 'moussa' },
  { id: 2, name: 'ali' }
]

// const result  = obj1.filter(ele=> ele.id === 2);
// console.log(result);
const x = ()=>{
for(let ele of obj1){
  if(ele.id === 2) return ele
 }
}

//console.log(x());

const result = obj1.find(ele => ele.id === 10);
//console.log(result);


//fib tabulation:

// function fib(n){
//   if(n<=0) return 0;
//   if( n === 1) return 1;

//   let secondLast = 0;
//   let last = 1;

//   for(let i =2; i <= n ; i++){
//     temp = last;
//     last = secondLast + last;
//     secondLast = temp;
//   }
//   return last;
// }

//console.log(fib(7))


//..............

(function(){
  //"use strict";
  // if we don't use "use strict" then b is global 
    var a = b= 4;
})();
//  console.log('a  ' + typeof a );
//  console.log('b  ' + typeof b );

//.............
var v2
 function checkUndefined(){
    var v1 = 1;
     v2 = v1
 }
checkUndefined();
// console.log('v1  ' + typeof v1); // undefiend bec v1 here is function scope 
// console.log('v2  ' + typeof v2); // v2 is global scope and then we initialize it 


var bar = null;  // null is an object

//console.log( typeof bar === 'object');
//we have to check if not null first in order to use bar.constructor, otherwise it gives error:
//console.log(bar.constructor) // if bar  = null => it gives error 
//console.log( bar !==null && bar.constructor === Object)

// ................................


function sum(x){
  if(arguments.length === 2){
    console.log(arguments);
    return arguments[0] + arguments[1];
    
  }
   return function(y){
      return x + y
    }
  
}

console.log(sum(2,3));
//console.log(sum(2)(3));

//............................
