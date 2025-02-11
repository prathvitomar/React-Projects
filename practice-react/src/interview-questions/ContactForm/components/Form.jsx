import { useState } from "react"

export default function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);

    function validation(){
        if(typeof name || typeof email || typeof message){
            return "Enter Valid Text";
        }
        return true
    }

    async function handleSubmit(e){
        e.preventDefault()
        if(!validation()) return "Enable to Submit";
        try {
            const data = await fetch(`https://www.greatfrontend.com/api/questions/contact-form`,{
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    name, 
                    email,
                    message
                })
            })
            const res = await data.text();
            console.log(res);
        } catch (err) {
            setError(err.message);
        }
    }

    if(error) return (<h4>{error}</h4>);

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <textarea value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}