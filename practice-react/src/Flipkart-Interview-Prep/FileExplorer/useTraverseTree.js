import React from "react";
function useTraverseTree() {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: Date.now(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }
    let latestNodes = [];
    latestNodes = tree.items.map((obj) =>
      insertNode(obj, folderId, item, isFolder)
    );
    return { ...tree, items: latestNodes };
  }

  return { insertNode };
}

export default useTraverseTree;
