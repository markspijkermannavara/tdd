'use strict';

function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

function christmas_tree(height) {
    if (height <= 0) {
        return [""];
    }

    if (height === 1) {
        return [
            create_branch(1, 1),
            pad_string(0, "|"),
        ];
    }

    if (height === 2) {
        return [
            create_branch(1, 2),
            create_branch(2, 2),
            pad_string(1, "|"),
        ];
    }

    if (height === 3) {
        return [
            create_branch(1, 3),
            create_branch(2, 3),
            create_branch(3, 3),
            pad_string(2, "|"),
        ];
    }
}

function create_branch(level, total_levels) {
    let stars_amount = (level * 2) - 1;
    let stars = "*".repeat(stars_amount);

    let padding_amount = total_levels - level;

    return pad_string(padding_amount, stars);
}

function pad_string(padding_amount, string, pad_char=" ") {
    let padding = pad_char.repeat(padding_amount);

    return padding + string + padding;
}

module.exports = {
    fibonacci: fibonacci,
    christmas_tree: christmas_tree
}