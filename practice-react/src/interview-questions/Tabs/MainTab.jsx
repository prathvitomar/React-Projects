import { useState } from "react"
import Modal from "./components/Modal";

export default function MainTab(){
    const data = [
        {
            id : 1,
            title : 'First Modal',
            description : '<h1>Modal</h1>'
        },
        {
            id : 2,
            title : 'Second Modal',
            description : '<p>Secondddddd</p>'
        },
        {
            id : 3,
            title : 'Third Modal',
            description : '<span>Third Modal</span>'
        },
        {
            id : 4,
            title : 'Fourth Modal',
            description : '<h6>4th Modal<h6/>'
        },
    ]
    const [selectedModal, setSelectedModal] = useState(1);

    function handleModal(id){
        console.log(id)
        setSelectedModal(id)
    }

    return(
        <>
            <Modal data={data} handleModal={(id) => handleModal(id)} selectedModal={selectedModal}/>
        </>
    )
}