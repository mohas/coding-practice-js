import { describe, test, expect } from 'bun:test'

/**
 * given an int array arr of 2n ints group these into n pairs (a,b)(a1,b1)...
 * such that the sum of min(ai,bi) for all i is maximised and return it
 */
function removeMirroredDuplicate(s: string): string {

    if (s.length === 1) return s

    const st: string[] = [s[0]]
    const input = s.split('')

    for (let i = 1; i < s.length; i++) {

        if (st.length && input[i] === st.at(-1)) {
            // we reached the middle point pop one
            st.pop()
        } else {
            st.push(input[i])
        }

    }

    return st.join('')
}

describe('remove mirrored duplicate', () => {

    test('abbaca', () => {
        expect(removeMirroredDuplicate('abbaca')).toBe('ca')
    })

    test('azxxzy', () => {
        expect(removeMirroredDuplicate('azxxzy')).toBe('ay')
    })

    test('abcd', () => {
        expect(removeMirroredDuplicate('abcd')).toBe('abcd')
    })

    test('abbacaazxxzy', () => {
        expect(removeMirroredDuplicate('abbacaazxxzy')).toBe('cy')
    })

})