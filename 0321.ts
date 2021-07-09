/**
Problem #321 [Easy] 2021-07-09
 
This problem was asked by PagerDuty.

Given a positive integer N, find the smallest number of steps it will take to reach 1.

There are two kinds of permitted steps:

You may decrement N to N - 1.
If a * b = N, you may decrement N to the larger of a and b.
For example, given 100, you can reach 1 in five steps with the following route: 100 -> 10 -> 9 -> 3 -> 2 -> 1.
 */

console.log(minSteps(100));
console.log(minSteps(90));



function minSteps(n: number) : number {
    console.log(n)
    if (n === 1) {
        return 0;
    }
    
    let possibleNextSteps = [n-1];
    for(let i = n-1; i >= Math.ceil(Math.sqrt(n)); i--) {
        if (n%i === 0) {
            possibleNextSteps.push(i);
        }
    }

    return Math.min(...possibleNextSteps.map(val => minSteps(val))) + 1;
}