import React, { useState } from "react";
import Dropdown from "../inputs/input-dropdown";
import InputDateTime from "../inputs/input-datetime";
import InputText from "../inputs/input-text";

function ActionBar({ item, fields, setFilter, filterFields }) {
  const options = ["Ur moms trail", "Juan De Fuca"];

  const handleSelect = (selectedOption) => {
    console.log("Selected option:", selectedOption);
  };

  const searchPlaceholder = `Search for ${item}s`;

  return (
    <div className="action-bar">
      <span className="search">
        <InputText placeholder={searchPlaceholder} />
      </span>

      <span className="filters">
        {/* <p>Filter By:</p> */}
        {filterFields &&
          filterFields.map((i) => (
            <Dropdown
              options={filterFields.options}
              onSelect={setFilter}
              placeholder={filterFields.placeholder}
            />
          ))}
        {/* <Dropdown
          options={options}
          onSelect={setFilter}
          placeholder={"select a trail"}
        /> */}
        {/* <InputDateTime /> */}
      </span>
    </div>
  );
}

export default ActionBar;
