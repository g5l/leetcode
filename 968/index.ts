// Binary Tree Cameras
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
}

function minCameraCover(root: TreeNode | null): number {
  let cameras = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) return 2; // null nodes are covered

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (left === 0 || right === 0) {
      cameras++;
      return 1;
    }

    if (left === 1 || right === 1) {
      return 2;
    }

    return 0;
  }

  if (dfs(root) === 0) {
    cameras++;
  }

  return cameras;
}
