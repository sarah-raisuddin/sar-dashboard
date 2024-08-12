import React, { useState, useEffect } from "react";
import HeaderRow from "./header-row";
import Row from "./row";
import ActionBar from "./action-bar";

function Table({
  initItems,
  fields,
  filterFields,
  setSelectedRow,
  selectedRow,
  itemType,
  filterTime,
}) {
  const [items, setItems] = useState(initItems);
  const [filteredItems, setFilteredItems] = useState(initItems);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});
  const [timeRangeFilter, setTimeRangeFilter] = useState({
    startTime: "",
    endTime: "",
  });

  const onSort = (field) => {
    let direction = "asc";
    if (sortConfig.key === field && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: field, direction });

    const sortedItems = [...filteredItems].sort((a, b) => {
      if (a[field] < b[field]) return direction === "asc" ? -1 : 1;
      if (a[field] > b[field]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setFilteredItems(sortedItems);
  };

  const parseDate = (dateString) => {
    return new Date(dateString);
  };

  const setFilter = (field, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [field]: value }));
  };

  const applyFilters = (items) => {
    return items.filter((item) => {
      const matchesSearch = Object.values(item).some((value) =>
        value
          ? value.toString().toLowerCase().includes(searchQuery.toLowerCase())
          : false
      );

      const matchesAllFilters = Object.keys(filters).every((field) =>
        filters[field]
          ? item[field] &&
            item[field]
              .toString()
              .toLowerCase()
              .includes(filters[field].toLowerCase())
          : true
      );

      const itemDate = item.time ? parseDate(item.time) : null;
      const startDate = timeRangeFilter.startTime
        ? parseDate(timeRangeFilter.startTime)
        : null;
      const endDate = timeRangeFilter.endTime
        ? parseDate(timeRangeFilter.endTime)
        : null;

      const matchesTimeRange =
        (!startDate || (itemDate && itemDate >= startDate)) &&
        (!endDate || (itemDate && itemDate <= endDate));

      return matchesSearch && matchesAllFilters && matchesTimeRange;
    });
  };

  useEffect(() => {
    const filtered = applyFilters(items);
    setFilteredItems(filtered);
  }, [searchQuery, items, filters, timeRangeFilter]);

  return (
    <div>
      <ActionBar
        item={itemType}
        filterFields={filterFields}
        setSearchInput={setSearchQuery}
        searchInput={searchQuery}
        setFilter={setFilter}
        setTimeRangeFilter={setTimeRangeFilter}
        filterTime={filterTime}
      />
      <table className="data-table">
        <HeaderRow fields={fields} onSort={onSort} sortConfig={sortConfig} />
        <tbody>
          {filteredItems.length === 0 ? (
            <tr>
              <td colSpan={fields.length} style={{ textAlign: "center" }}>
                No data to show
              </td>
            </tr>
          ) : (
            filteredItems.map((item) => (
              <Row
                key={item.id}
                item={item}
                fields={fields}
                setSelectedRow={setSelectedRow}
                selectedRow={selectedRow}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
