import { describe, test, expect } from 'bun:test'

function GetNearestDuplicate(arr: number[], k: number): Boolean {
    const itemIndices = new Map<number, number | undefined>()

    for (let i = 0; i < arr.length; i++) {

        if (i - itemIndices.get(arr[i])! <= k)
            return true

        itemIndices.set(arr[i], i)

    }

    return false
}

describe('find nearest duplicate', () => {

    test('[1,2,3,1], k = 3', () => {
        expect(GetNearestDuplicate([1, 2, 3, 1], 3)).toBe(true)
    })

    test('[1,0,1,1], k = 1', () => {
        expect(GetNearestDuplicate([1, 0, 1, 1], 1)).toBe(true)
    })

    test('[1,2,3,1,2,3], k = 2', () => {
        expect(GetNearestDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false)
    })

})