/**
Problem #2 [Hard] 2020-08-20

This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
 */

console.log(productMap2([1, 2, 3, 4, 5]));
console.log(productMap2([3, 2, 1]));
console.log(productMap2([3, 2, 1, 0]));
console.log(productMap2([0, 3, 2, 1, 0]));

// this version does not work with an array that contains 0
function productMap(list: number[]) {
  const product = list.reduce((tol, cur) => tol * cur);
  return list.map(cur => product / cur);
}

function productMap2(list: number[]) {
  const product = list.reduce((tol, cur) => tol * cur);
  return list.map((cur, mIndex) => {
    return cur !== 0
      ? product / cur
      : list.reduce(
          (tol, cur, rIndex) => (mIndex === rIndex ? tol : tol * cur),
          1
        );
  });
}

// no division
function productMap3(list: number[]) {
  return list.map((cur, mIndex) =>
    list.reduce((tol, cur, rIndex) => (mIndex === rIndex ? tol : tol * cur), 1)
  );
}
