'use strict';

function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

function christmas_tree(height) {
    if (height === 0) return [""];
}

module.exports = {
    fibonacci: fibonacci,
    christmas_tree: christmas_tree
}