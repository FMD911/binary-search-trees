import Tree from "./Tree.js";

function randomArray(size = 15) {
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * 100)
  );
}

function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) return;

  if (node.right !== null) {
    prettyPrint(
      node.right,
      `${prefix}${isLeft ? "│   " : "    "}`,
      false
    );
  }

  console.log(
    `${prefix}${isLeft ? "└── " : "┌── "}${node.data}`
  );

  if (node.left !== null) {
    prettyPrint(
      node.left,
      `${prefix}${isLeft ? "    " : "│   "}`,
      true
    );
  }
}

const tree = new Tree(randomArray());

console.log("Balanced:", tree.isBalanced());

console.log("Level Order:");
tree.levelOrder((node) => console.log(node.data));

console.log("Preorder:");
tree.preorder((node) => console.log(node.data));

console.log("Postorder:");
tree.postorder((node) => console.log(node.data));

console.log("Inorder:");
tree.inorder((node) => console.log(node.data));

tree.insert(101);
tree.insert(102);
tree.insert(103);
tree.insert(104);
tree.insert(105);

console.log("Balanced after inserts:", tree.isBalanced());

tree.rebalance();

console.log("Balanced after rebalance:", tree.isBalanced());

prettyPrint(tree.root);