import { useState } from 'react'
import '../styles.css'
export default function List({ data }){

        const [showList, setShowList] = useState(false);

    function handleShow(){
        setShowList(prev => !prev);
    }

    if(data.isFolder){
        return (
            <>
            {
                data.items.map((data)=>(
                    <List key={data.id} data={data.items}/>
                ))
            }
            </>
        )
    }
    else{
        return (
            <>
                {
                    <div onClick={handleShow} className="folder">
                        <span>📁</span>
                        <p>{data.name}</p>
                    </div>
                }
                {
                    showList && 
                        data.items.map((list)=>(
                            <div onClick={handleShow} className="child-folder" key={list.id}>
                                <span>📁</span>
                                <p>{list.name}</p>
                            </div>
                        ))
                }
            </>
        )
    }
}