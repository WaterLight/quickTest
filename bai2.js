
const intArr = [1, 4, 2, 3, 5];

function sum(arr) {
  var i = Math.floor(Math.random()*5);
  var j = Math.floor(Math.random()*5);
  if(i===j) { j+1};
  return arr[i] + arr[j];
}

// sum(intArr);
console.log(sum(intArr));

