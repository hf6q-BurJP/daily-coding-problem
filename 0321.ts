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

function minSteps(n: number) : number {
    let stepCount = 1;
    
    while (n > 1) {
        let largestDecrement = 1;
        for(let i = n-1; largestDecrement === 1 && i > 1; i--) {
            if (n%i === 0) {
                largestDecrement = i;
            }
        }
        stepCount += minSteps(n-largestDecrement);
    }

    return stepCount;
}
