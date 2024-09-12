import React from 'react'
import { useId } from 'react'
import { forwardRef } from 'react'

function Input({
    type="text",
    value,
    className = "",
    onChange,
    placeholder = "",
    ...props
},ref) {
    const id = useId();
  return (
    <>
    {label && <label className='inline-block mb-1 pl-1' htmlFor={id}>{label}</label> }
    <div className='w-full'>
        <input 
        type={text}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value}
        ref={ref}
        {...props}
        />
    </div>
    </>
  )
}

export default forwardRef(Input)