import React, { useState } from "react";

const Dropdown = ({ options, selectFilter, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    selectFilter(newValue);
  };

  return (
    <div className="input-dropdown input-box">
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
