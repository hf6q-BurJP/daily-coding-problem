/**
Problem #1 [Easy] 2020-08-19

This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
 */

console.log(specificSum2([10, 15, 3, 7], 17));

function specificSum(list: number[], k: number): boolean {
  for (let num of list) {
    if (
      list.find(value => {
        return value === k - num;
      })
    ) {
      return true;
    }
  }
  return false;
}

// single pass
function specificSum2(list: number[], k: number): boolean {
  const options = new Set<number>();
  for (let num of list) {
    if (options.has(k - num)) {
      return true;
    } else {
      options.add(num);
    }
  }
  return false;
}
