import { describe, test, expect } from 'bun:test'

/**
 * 
 */
function findMaxConsecutivesLength(arr: number[], match: number): number {

    let maxCon = 0
    let curCon = 0

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === match && !curCon) {
            curCon = 1
            continue
        }
        if (arr[i] === match && curCon) {
            curCon++
            continue
        }
        if (arr[i] !== match && curCon) {
            maxCon = Math.max(curCon, maxCon)
            curCon = 0
            continue
        }

    }

    return Math.max(curCon ?? -1, maxCon)
}

describe('partition and return max sum of min pairs', () => {

    test('[1,1,0,1,1,1], match=1', () => {
        expect(findMaxConsecutivesLength([1, 1, 0, 1, 1, 1], 1)).toBe(3)
    })

})