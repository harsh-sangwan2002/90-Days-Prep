import { expect } from 'vitest';
import incrementByTwo from './utils/math'

test('Increment by two function working', () => {
    const value = incrementByTwo(2);
    expect(value).toBe(4);
})