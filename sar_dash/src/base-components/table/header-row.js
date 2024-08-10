import React from "react";

const formatFieldName = (fieldName) => {
  const formattedName = fieldName
    .replace(/_/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedName;
};

function HeaderRow({ fields, onSort, sortConfig }) {
  return (
    <thead>
      <tr>
        {fields.map((field) => (
          <th key={field} onClick={() => onSort(field)}>
            {formatFieldName(field)}
            {sortConfig.key === field
              ? sortConfig.direction === "asc"
                ? " 🔼"
                : " 🔽"
              : null}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default HeaderRow;
