// Sort function
const sortArr = (input) => {  
  let cloneArr = [].concat(input); 

  let str = cloneArr.sort((a,b) => {
    return (
      cloneArr.filter(v => v.length===a.length).length
    - cloneArr.filter(v => v.length===b.length).length
    )
  }).pop();

  return input.filter(v =>  v.length === str.length)
};

// Unit Test:
const assert = (fun, input, expected) => {
  return `input=${input}, expected: ${expected}, out put: ${fun(input)}`;
 }

// Test cases:
let testCases = [
  {input: ["a","a","a","a","ab", "abc", "cd", "def", "gh"], expected: ["a","a","a","a"] },
  {input: ["a", "ab", "abc", "cd", "def", "gh"], expected: ["ab", "cd", "gh"]},
  {input: ["a", "ab", "abc", "cd", "def", "ghi"], expected: ["abc", "def", "ghi"]},
]

let testResult = testCases.map(d => assert(sortArr, d.input, d.expected))

console.log(testResult);