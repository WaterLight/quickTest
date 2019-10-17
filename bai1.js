function sortArr(arr) {  
  let cloneArr = [].concat(arr); 

  let str = cloneArr.sort((a,b) => {
    return (
      cloneArr.filter(v => v.length===a.length).length
    - cloneArr.filter(v => v.length===b.length).length
    )
  }).pop();

  return arr.filter( (v) => {
    return v.length === str.length
  })
};
  
const strArray1 = ["a","a","a", "ab", "abc", "cd", "def", "gh"];

const strArray2 = ["a", "ab", "abc", "cd", "def", "gh"];

const arr = sortArr(strArray1);
console.log(arr);

