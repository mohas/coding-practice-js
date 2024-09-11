import { describe, test, expect } from 'bun:test'

/**
 * given an int array arr of 2n ints group these into n pairs (a,b)(a1,b1)...
 * such that the sum of min(ai,bi) for all i is maximised and return it
 */
function F(n: number): number {

    if(n === 0) return 0
    if(n === 1) return 1

    let f_1 = 1, f_2 = 0

    for (let i = 2; i <= n; i++) {

        const f = f_1 + f_2

        f_2 = f_1
        f_1 = f

    }

    return f_1
}

describe('calculate fibbonatchi seq', () => {

    test('[0,1,2,3,4,5]', () => {
        expect([0,1,2,3,4,5,6,7,8,9,10].map(F)).toEqual([0,1,1,2,3,5,8,13,21,34,55])
    })

})