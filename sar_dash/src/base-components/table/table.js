import React, { useState } from "react";
import HeaderRow from "./header-row";
import Row from "./row";
import ActionBar from "./action-bar";

function Table({
  initItems,
  fields,
  filterFields,
  setSelectedRow,
  selectedRow,
}) {
  const [items, setItems] = useState(initItems);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [filter, setFilter] = useState("");

  const onSort = (field) => {
    let direction = "asc";
    if (sortConfig.key === field && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: field, direction });

    const sortedItems = [...items].sort((a, b) => {
      if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
      if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setItems(sortedItems);
  };

  const filteredItems = items.filter(
    (item) => item
    // item.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ActionBar setFilter={setFilter} />
      <table className="data-table">
        <HeaderRow fields={fields} onSort={onSort} sortConfig={sortConfig} />
        <tbody>
          {filteredItems.map((i) => (
            <Row
              key={i["tag-identifier"]}
              item={i}
              fields={fields}
              setSelectedRow={setSelectedRow}
              selectedRow={selectedRow}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
