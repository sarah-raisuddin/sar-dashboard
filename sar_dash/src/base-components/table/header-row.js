import React from "react";

function HeaderRow({ fields, onSort, sortConfig }) {
  return (
    <thead>
      <tr>
        {fields.map((field) => (
          <th key={field} onClick={() => onSort(field)}>
            {field}
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
