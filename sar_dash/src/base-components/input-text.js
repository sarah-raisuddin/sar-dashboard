import React, { useState } from "react";

function InputText({ label, placeholder, value, setValue }) {
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-box">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputText;
