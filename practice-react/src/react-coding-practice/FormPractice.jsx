import { useState } from "react"

export default function FormPractice(){
    const [formData, setFormData] = useState({
        name : "",
        password : "",
        age : "",
        address : "",
        disabled : ""
    })

    function handleSubmit(e) {
        e.preventDefault();
        if (validation()) {
            alert("Form Submitted Successfully...!!!");
        }
        setFormData({
            name : "",
            password : "",
            age : "",
            address : "",
            disabled : ""
        })
    }

    function validation() {
        const { name, password, age, address, disabled } = formData;

        if (!name || !password || !age || !address) {
            alert("All Fields Are Required");
            return false;
        }

        if (typeof name !== "string" || typeof address !== "string" || typeof password !== "string") {
            alert("Please Enter Valid String Data");
            return false;
        }

        if (isNaN(age) || Number(age) <= 0) {
            alert("Please Enter a Valid Age");
            return false;
        }

        if (typeof disabled !== "boolean") {
            alert("Please Enter Valid Data for Disabled");
            return false;
        }

        return true;
    }

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text" name="password" value={formData.password} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">Age</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="">Disabled</label>
                    {/* <input type="text" value={formData.disabled} onChange={(e)=> setFormData({...formData, [e.target.name] : e.target.value})}/> */}
                    <input type="checkbox" name="disabled" value={formData.disabled} onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
};