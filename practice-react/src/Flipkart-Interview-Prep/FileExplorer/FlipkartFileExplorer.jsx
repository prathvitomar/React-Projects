import React from 'react'
import { useState } from 'react'
import explorer from "./data"
import Folder from './Folder';
import useTraverseTree from './useTraverseTree';
function FlipkartFileExplorer() {
  const [data, setData] = useState(explorer);
  const {insertNode} = useTraverseTree();
  
  function handleSubmit(folderId, item, isFolder){
    const finalTree = insertNode(data, folderId, item, isFolder);
    setData(finalTree)
  }

  return (
    <Folder data={data} handleSubmit={handleSubmit}/>
  )
}

export default FlipkartFileExplorer