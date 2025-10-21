const { christmas_tree } = require('../src/ChristmasTree');

describe("Christmas Tree", function() {
    it("returns empty string when height is zero", function() {
        expect(christmas_tree(0)).toEqual([""]);
    });

    it("returns empty string when height is minus one", function() {
        expect(christmas_tree(-1)).toEqual([""]);
    });

    it("returns a tree when height is 1", function() {
        expect(christmas_tree(1)).toEqual(["*", "|"]);
    });

    it("returns a tree when height is 2", function() {
        expect(christmas_tree(2)).toEqual([" * ", "***", " | "]);
    });

    it("returns a tree when height is 3", function() {
        expect(christmas_tree(3)).toEqual(["  *  ", " *** ", "*****", "  |  "]);
    });
});