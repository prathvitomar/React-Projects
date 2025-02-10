export default function Github({data}){
    return (
        <>
            {
                data && 
                    <div>
                        <img src={data.avatar_url} alt="" />
                        <h1>{data.name}</h1>
                        <p>{data.bio}</p>
                        <p>{data.followers}</p>
                        <p>{data.following}</p>
                    </div>
            }
        </>
    )
}