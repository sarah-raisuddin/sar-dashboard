import React from "react";

const DateTimeInput = ({ label, placeholder, day }) => {
  // Assuming 'day' is a string in the format 'YYYY-MM-DD'
  const minDateTime = `${day}T00:00`;
  const maxDateTime = `${day}T23:59`;

  return (
    <div className="input-box">
      <label>{label}</label>
      <input type="date" min={minDateTime} max={maxDateTime} />
    </div>
  );
};

export default DateTimeInput;
