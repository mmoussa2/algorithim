

// function findSumSorted1(arr,val){
//   let com={};
//   for(let i = 0; i< arr.length; i++){
//     if(Object.values(com).includes(arr[i])) return true;
//     com[i] = val - arr[i];
//   }
//   return false;
// }


//if arr is sorted:

//First Solution: T: O(nlogn) S: O(n)
function findSumSorted(arr, val){
  for(let i = 0; i < arr.length; i++){

    if(binarySearch(removeIndex(arr,i), (val - arr[i]))){
      return true;
    }
  }
  return false;
}

function removeIndex(arr, i){
  return arr.slice(0,i).concat(arr.slice(i+1, arr.length));
}

// function binarySearch(subArr, target){
//   let start = 0;
//   let end = subArr.length -1;
// while(start <= end){
//   let mid = Math.floor(subArr.length-1 / 2);
//   if(subArr[mid] === target){
//     return true;
//   }else if(subArr[mid] > target){
//     end = mid -1
//     // return binarySearch(subArr.slice(0,subArr(mid)));
//   }else if(subArr[mid] < target){
//     start = mid +1;
//    // return binarySearch(subArr.slice(subArr[mid + 1]), subArr.length);
//   }
// }
//   return false;
// }

const binarySearch = (array, target) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (target === array[middleIndex]) {
      return true;
    }
    if (target > array[middleIndex]) {
      console.log("Searching the right side of Array")
      startIndex = middleIndex + 1;
    }
    if (target < array[middleIndex]) {
      console.log("Searching the left side of array")
      endIndex = middleIndex - 1;
    }
    else {
      console.log("Not Found this loop iteration. Looping another iteration.")
    }
  }

  console.log("Target value not found in array");
  return false;
}



//Second Solution: T: O(n) S: O(1)
function findSumSorted1(arr, val) {
  let sum = 0;
  let start = 0;
  let end = arr.length -1;

  while(start < end){
    sum = arr[start] + arr[end]
    if(sum > val){
      end--;
    }else if(sum < val){
      start++;
    }else{
      return true;
    }
  }
  return false;
}

// T: O(n) S:(n)
function findSumUnsorted(arr,val){
  let searchValues = new Set();
  let com = 0;
  for(let i = 0; i < arr.length; i++){
    com = val - arr[i];
    if(searchValues.has(com)){
      return true;
    }else{
      searchValues.add(com);
    }
  }
  return false;
}

const findSumUnsorted2 = (arr,val)=>{
  return arr.some((set=>n=> set.has(n)) || !set.add(sum - n)(new Set));
}

//console.log(findSumSorted([1, 2, 4, 4], 8));
//console.log(findSumUnsorted2([1,2,3,4], 8));


function pow(base, exponent) {

  if (exponent === 0) {
    return 1;
  } else if (exponent > 0) {
    console.log(base * pow(base, exponent - 1))
    return base * pow(base, exponent - 1);
  } else if (exponent < 0) {
    // console.log(exponent)
    return 1 / (pow(base, - exponent))
  }

}

//console.log(pow(2, -5))  // => 0.03125

function flatten(data) {
  
  if(!Array.isArray(data)) return [data];

  let allElements = [];
  console.log(`allElements: ${allElements}`)

   data.forEach(ele => {
     let flattened = flatten(ele);
     console.log(`flattened: ${flattened}`)

     allElements.push(...flattened);
     console.log(`allElements after: ${allElements}`)
    }
  );

  return allElements


  //Second Method:
  // return arr.reduce( (flat, toFlatten) =>{
  //   console.log(" flat"  +flat + ' concat ' + toFlatten)
  //   return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  // },[]);


}

 array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
 //console.log(flatten(array_2))      // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]

 function unique(arr){
   let set = new Set(arr)
   return Array.from(set);

 }

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

//console.log(unique(values)); // Hare, Krishna, :-O


function aclean(arr) {
  const aset = new Set();
  const items = new Map();
  arr.forEach(item => {
    let id = item.toLowerCase().split('').sort().join('');
    if (aset.has(id) && !items.has(id)) {
      items.set(id, item);
    } else {
      aset.add(id)
    }
  })
  return Array.from(items.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares","batata"];

//console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"