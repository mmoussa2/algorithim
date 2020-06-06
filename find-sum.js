

// function findSumSorted1(arr,val){
//   let com={};
//   for(let i = 0; i< arr.length; i++){
//     if(Object.values(com).includes(arr[i])) return true;
//     com[i] = val - arr[i];
//   }
//   return false;
// }


//if arr is sorted:

//First Solution:
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
}



//Second Solution:
function findSumSorted1(arr, val) {
  let sum = 0;
  let start = 0;
  let end = arr.length -1;

  while(start < end){
    sum = arr[start]+ arr[end]
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

console.log(findSumSorted([1, 2, 4, 4], 8));
//console.log(findSumUnsorted2([1,2,3,4], 8));
