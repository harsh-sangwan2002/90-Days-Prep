import indrementByTwo from "./utils/math";

test("Test increment by two function", () => {
    const value = indrementByTwo(5);
    expect(value).toBe(7);
})