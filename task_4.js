// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function countZero(str){
  let count =  0;
  for(let i of  str){
    if(i === "0"){
      count++;
    }
  }
  return count;
}


let str1 = "101010";
console.log(countZero(str1));