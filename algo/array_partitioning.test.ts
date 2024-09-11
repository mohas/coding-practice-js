import { describe, test, expect } from 'bun:test'

/**
 * given an int array arr of 2n ints group these into n pairs (a,b)(a1,b1)...
 * such that the sum of min(ai,bi) for all i is maximised and return it
 */
function partitionArrayAndReturnSum(arr: number[]): number {

    if (arr.length % 2 !== 0) throw new Error('arr should be even lengthed')

    arr.sort((a, b) => a - b);

    let sum = 0
    for (let i = 0; i < arr.length; i += 2) {
        sum += arr[i]
    }
    return sum
}

describe('partition and return max sum of min pairs', () => {

    test('[1,4,3,2]', () => {
        expect(partitionArrayAndReturnSum([1, 4, 3, 2])).toBe(4)
    })

})