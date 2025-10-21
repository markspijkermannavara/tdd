const { fibonacci, christmas_tree } = require('../src/ChristmasTree');

describe('Test Helpers', function () {
  it('should calculate Fibonacci series', function () {
    const fib = fibonacci(4);
    expect(fib).toEqual(5);
  });
});


describe("Christmas Tree", function() {
    it("returns empty string when height is zero", function() {
        expect(christmas_tree(0)).toEqual([""]);
    })

    it("returns empty string when height is minus one", function() {
        expect(christmas_tree(-1)).toEqual([""]);
    })
});