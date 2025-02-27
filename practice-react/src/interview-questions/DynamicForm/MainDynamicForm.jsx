import React, { useState } from "react";

function MainDynamicForm() {
  const [formData, setFormData] = useState([{ value: "" }]);

  function handleChange(e, index){
    const newArr = [...formData];
    newArr[index].value = e.target.value;
    setFormData(newArr);
  }

  function handleAdd(){
    setFormData(prev => [...prev, {value : ""}]);
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(formData);
    setFormData([{ value: "" }])
  }

  function handleDelete(index){
    const newArr = [...formData];
    newArr.splice(index, 1);
    setFormData(newArr);
  }

  return (
    <>
      <div>
        {formData.map((formField, index) => (
          <div key={index}>
            <input type="text" value={formField.value} onChange={(e)=> handleChange(e, index)}/>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
        <div>
            <button onClick={handleAdd}>Add Field</button>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default MainDynamicForm;
