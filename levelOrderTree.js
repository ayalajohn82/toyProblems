/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  if(root === null) {
    return [];
  }
  let levelOrder = [];
  let queue = [root];
  while(queue.length > 0) {
    let order = [];
    const length = queue.length;
    for(let i = 0; i < length; i++) {
      let current = queue.shift(); 
      if(current.left !== null) {
        queue.push(current.left);
      }
      if(current.right !== null) {
        queue.push(current.right);
      }
      order.push(current.val);
    }
    levelOrder.push(order);
  }
  return levelOrder;
};

//   3
//  / \
// 9  20
//   /  \
//  15   7
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7); 
console.log(root);

const result = levelOrder(root);
console.log(result);
