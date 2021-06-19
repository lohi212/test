import React from "react";

function Input({ type, title, width, onChange, value }) {
    return (
        <div className="form-body" style={{ width }}>
            <span className="label">{title}</span>         
            <input 
                onChange={onChange}
                value={value}
                className="input-form-element"
                type={type}
                />
        </div>
    )
}

export default Input;