import { useState } from 'react'
import {data} from './data/data.js'
import Accordian from './components/Accordian.jsx';
export default function MainAccordian(){
    const [ids, setIds] = useState([]);
    const [toggleOptions, setToggleOptions] = useState(false);

    function handleIds(id){
        if(toggleOptions){
            if(ids.includes(id)){
                const removeIds = ids.filter(filteredId => filteredId !== id);
                setIds(removeIds)
            }
            else{
                const newIds = [...ids, id];
                setIds(newIds);
            }
        }
        else{
            setIds([id])
        }
        console.log(ids);
    }

    function handleOption(){
        setToggleOptions(!toggleOptions)
        console.log(toggleOptions)
    }

    return(
        <>
        <h1>Accordian</h1>
        <Accordian data={data} handleIds={(id)=> handleIds(id)} toggleOptions={toggleOptions} handleOption={handleOption} ids={ids}/>
        </>
    )
}