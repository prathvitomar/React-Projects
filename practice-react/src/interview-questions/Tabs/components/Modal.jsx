import '../../styles.css'
export default function Modal({ data, selectedModal, handleModal }){

    return (
        <>
            <div className='modal-layout'>
                {data.length > 0 && data.map((div)=>(
                    <div key={div.id} onClick={()=> handleModal(div.id)} className="modal-main">
                        <h2>{div.title}</h2>
                        {
                            selectedModal === div.id && (
                                <div dangerouslySetInnerHTML={{__html : div.description}}/>
                            )
                        }
                    </div>
                ))}
            </div>
        </>
    )
}