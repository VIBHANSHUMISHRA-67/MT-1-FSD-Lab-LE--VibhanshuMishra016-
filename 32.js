
let arr = [10, 20, 30, 20, 40, 10, 50, 30];

let unique = new Set(arr);

console.log("Original Array:");
console.log(arr);

console.log("Array after removing duplicates:");
console.log(Array.from(unique));
