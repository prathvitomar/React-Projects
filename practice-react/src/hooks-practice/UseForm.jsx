import React, { useState } from 'react'


export const useFormData = ({initialValues})=>{
    const [data, setData] = useState({initialValues});

    function handleDataValues(e){
        const { name, value } = e.target;
        setData(prev => ({...prev, [name]: value}))
    }
    return [data, handleDataValues];
}


function UseForm() {
    const [formData, handleFormValues] = useFormData({ name : '', age : 0});
    console.log(formData);
  return (
    <div>
        <form>
            <input type="text" name='name' value={formData.name} onChange={handleFormValues} />
            <input type="text" name='age' value={formData.namage} onChange={handleFormValues} />
        </form>
    </div>
  )
}

export default UseForm