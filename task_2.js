// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function EorO(num){
  if(num % 2 === 0){
    console.log("Even");
    return num * 2;
  }else{
    console.log("Odd");
    return num / 2;
  }
}

console.log(EorO(8));
console.log(EorO(9));