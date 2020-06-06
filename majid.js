// function findSun(arr,val){
//   let com={};
//   for(let i = 0; i< arr.length; i++){
//     if(Object.values(com).includes(arr[i])) return true;
//     com[i] = val - arr[i];
//   }
//   return false;
// }


//if arr is sorted:
function findSun(arr, val) {
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

console.log(findSun([1,2,4,4], 8));