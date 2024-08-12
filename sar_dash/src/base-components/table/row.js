import React, { useState, useEffect } from "react";

function Row({ item, fields, setSelectedRow, selectedRow }) {
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    if (JSON.stringify(item) !== JSON.stringify(selectedRow)) {
      setHighlighted(false);
    }
  }, [selectedRow, item]);

  const handleClick = () => {
    if (setSelectedRow) {
      if (!highlighted) {
        setSelectedRow(item);
        setHighlighted(true);
      } else {
        setSelectedRow(null);
        setHighlighted(false);
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    const formattedDate = date.toLocaleDateString("en-US", dateOptions);
    const formattedTime = date.toLocaleTimeString("en-US", timeOptions);
    const formattedTimeStamp = `${formattedDate}, ${formattedTime}`;
    return {
      formattedTimeStamp,
    };
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
          {field === "time"
            ? formatDate(item[field]).formattedTimeStamp
            : item[field]}
        </td>
      ))}
    </tr>
  );
}

export default Row;
