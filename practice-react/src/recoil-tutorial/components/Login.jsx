import React, { useState } from 'react'

function Login() {
    const [formData, setFormData] = useState({
        username : "",
        password : ""
    });

    async function handleSubmit(){
        try {
            
        } catch (error) {
            console.log(error.message)
        }
    }

    function handleFormData(e){
        setFormData((prev) => ({...prev, [e.target.name] : e.target.value}))
    }

    console.log(formData)

  return (
    <>
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
            <div>
                <input type="text" name='username' value={formData.username} onChange={handleFormData}/>
            </div>
                <br />

            <div>
                <input type="text" name='password' value={formData.password} onChange={handleFormData}/>
            </div>
                <br />

            <div>
                <button type='submit'>Submit</button>
            </div>
            </form>

        </div>
    </>
  )
}

export default Login