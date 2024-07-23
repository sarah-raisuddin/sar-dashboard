import React, { useState, useEffect } from "react";

function Row({ item, fields, setSelectedRow, selectedRow }) {
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    if (JSON.stringify(item) !== JSON.stringify(selectedRow)) {
      setHighlighted(false);
    }
  }, [selectedRow, item]);

  const handleClick = () => {
    if (highlighted) {
      setHighlighted(false);
      setSelectedRow(null);
    } else {
      setHighlighted(true);
      setHighlighted(item);
    }
  };

  return (
    <tr style={{ backgroundColor: highlighted ? "blue" : "" }}>
      {fields.map((field, index) => (
        <td onClick={handleClick} key={index}>
          {item[field]}
        </td>
      ))}
    </tr>
  );
}

export default Row;
