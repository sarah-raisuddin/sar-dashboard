import React from "react";
import Dropdown from "../inputs/input-dropdown";
import InputText from "../inputs/input-text";
import TimeRangeFilter from "../timeFilter";

function ActionBar({
  item,
  fields,
  setFilter,
  filterFields,
  setSearchInput,
  searchInput,
  setCheckpointFilter,
  setTimeRangeFilter,
  filterTime,
}) {
  const searchPlaceholder = `Search for ${item}s`;

  return (
    <div className="action-bar">
      <span className="search">
        <InputText placeholder={searchPlaceholder} onChange={setSearchInput} />
      </span>

      <span className="filters">
        {filterFields && filterFields.length > 0 && (
          <>
            <p>Filter By:</p>
            {filterFields.map((field, index) => (
              <Dropdown
                key={index}
                options={field.options}
                selectFilter={(value) => setFilter(field.field, value)}
                placeholder={field.placeholder}
              />
            ))}
          </>
        )}
        {filterTime && (
          <TimeRangeFilter setTimeRangeFilter={setTimeRangeFilter} />
        )}
      </span>
    </div>
  );
}

export default ActionBar;
