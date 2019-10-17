
const sum = (arr) => {
  let i = Math.floor(Math.random()*5);
  let j = Math.floor(Math.random()*5);
  if(i===j) { j+1};
  return arr[i] + arr[j];
}

const intArr = [1, 4, 2, 3, 5];

let testResult = sum(intArr);

console.log(testResult);