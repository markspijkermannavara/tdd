'use strict';

function christmas_tree(tree_height) {
    if (tree_height <= 0) {
        return [""];
    }

    let tree = [];

    for (let current_layer = 1; current_layer <= tree_height; current_layer++) {
        tree.push(create_branch(current_layer, tree_height));
    }

    tree.push(pad_string(tree_height - 1, "|"));

    return tree;
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
    christmas_tree: christmas_tree
}