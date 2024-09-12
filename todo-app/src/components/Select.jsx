import React from 'react'
import { forwardRef } from 'react';
import { useId } from 'react'

function Select({
    options,
    className = "",
    onChange,
    ...props
}, ref) {
    const id = useId();
  return (
    <>
    {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label>}
    <select className={`${className}`} onChange={(e)=> onChange(e.target.value)} ref={ref} id={id} {...props}>
        {options.map((option)=>(
            <option value={option} key={option}>
                {option}
            </option>
        ))}
    </select>
    </>
  )
}

export default forwardRef(Select)