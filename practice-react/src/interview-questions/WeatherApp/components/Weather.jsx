
export default function Weather({data}){
    if(!data || Object.keys(data).length === 0) return (<p>"Please Enter Name of the city"</p>)
    console.log(data);
    
    return (
        <>
            <div>
                <h1>{data.name}</h1>
                <div>
                    <h3>Main :</h3>
                    {
                        Object.entries(data.main).map(([key,value], index)=>(
                            <li key={index}>{key} : {value}</li>
                        ))
                    }
                </div>
                <div>
                    <h3>SYS :</h3>
                    {
                        Object.entries(data.sys).map(([key, value], index)=>(
                            <li key={index}>{key} : {value}</li>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
