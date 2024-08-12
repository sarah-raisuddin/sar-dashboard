import React, { useState, useEffect } from "react";

function TimeRangeFilter({ setTimeRangeFilter }) {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    if (startTime && endTime) {
      setTimeRangeFilter({ startTime, endTime });
    }
  }, [startTime, endTime, setTimeRangeFilter]);

  return (
    <div className="time-range-filter input-box">
      <label>
        Start Time:
        <span style={{ marginLeft: "10px" }} />
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </label>
      <label>
        End Time:
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </label>
    </div>
  );
}

export default TimeRangeFilter;
