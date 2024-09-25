const nums1 = [1, 2, 3, 4, 5];

function add(...nums) {
  return nums.reduce((acc, curr) => acc + curr);
}

const result = add(...nums1);

console.log("The sum of the numbers is:", result);