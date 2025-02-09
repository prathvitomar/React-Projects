export default function Accordian({data, handleIds, toggleOptions, handleOption, ids}){
    return(
        <>
        <button onClick={handleOption}>{toggleOptions ? "Enable Single Accordian" : "Enable Multiple Accordian"}</button>
        {
            data.map((acc)=>(
                <div 
                style={{
                    'height': '100px',
                    'width': '300px',
                    'border': '1px solid black',
                    'pointer' : 'cursor'
                }}
                key={acc.id}
                onClick={()=> handleIds(acc.id)}
                >
                    <h1>{acc.title}</h1>
                    {
                        ids.includes(acc.id) ? (<p>{acc.description}</p>) : null
                    }
                </div>
            ))
        }
        </>
    )
}