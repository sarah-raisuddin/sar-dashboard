import React, { useState, useEffect } from "react";

function Row({ item, fields, setSelectedRow, selectedRow }) {
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    if (JSON.stringify(item) !== JSON.stringify(selectedRow)) {
      setHighlighted(false);
    }
  }, [selectedRow, item]);

  const handleClick = () => {
    if (!highlighted) {
      setSelectedRow(item);
      setHighlighted(true);
    } else {
      setSelectedRow(null);
      setHighlighted(false);
    }
  };

  return (
    <tr
      style={{
        backgroundColor: highlighted ? "#7ADC99" : "",
        opacity: highlighted ? 0.5 : 1,
      }}
    >
      {fields.map((field, index) => (
        <td onClick={handleClick} key={index}>
          {item[field]}
        </td>
      ))}
    </tr>
  );
}

export default Row;
