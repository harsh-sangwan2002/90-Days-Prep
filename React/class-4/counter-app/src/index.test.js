import { incrementByTwo } from './utils/math';

test('Test increment by two function', () => {
    const value = incrementByTwo(3);
    expect(value).toBe(5);
})
