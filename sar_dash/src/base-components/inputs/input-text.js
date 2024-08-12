import React, { useState } from "react";

function InputText({ label, placeholder, value, onChange, password }) {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="input-box">
      <label>{label}</label>
      <input
        type={password ? "password" : "text"}
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputText;
