import React, { useId } from "react";

function InputGenerator({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  ref= null,
  ...props
}) {
  const id = useId();

  return (
    <>
      <div class="w-full max-w-sm min-w-[200px]">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          disabled={disabled}
          ref={ref}
          {...props}
        />
      </div>
    </>
  );
}

export default InputGenerator;
