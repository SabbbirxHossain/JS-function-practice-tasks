// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(myArr){
  let sum = 0;
  for(let i of myArr){
    sum += i;
  }
  let avg = sum/myArr.length;
  return avg;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(make_avg(arr));