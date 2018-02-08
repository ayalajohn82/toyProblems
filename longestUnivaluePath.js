function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  let longest = 0;

  const dfs = (node) => {
    if(node === null) {
      return 0;
    }
    let leftLength = dfs(node.left);
    let rightLength = dfs(node.right);
    let leftPath = node.left !== null && node.left.val === node.val ? leftLength + 1 : 0;
    let rightPath = node.right !== null && node.right.val === node.val ? rightLength + 1 : 0;
    longest = Math.max(longest, leftPath + rightPath);
    return Math.max(leftPath, rightPath);
  }

  dfs(root);
  return longest;
};

const root = new TreeNode(1);

root.left = new TreeNode(6);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(6);

root.right = new TreeNode(5);
root.right.right = new TreeNode(5);

const result = longestUnivaluePath(root);

console.log(result);