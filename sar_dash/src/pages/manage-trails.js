// src/InputComponent.js
import React, { useState, useEffect } from "react";
import { fetchTrails } from "../requests/api";
import Table from "../base-components/table/table";

function ManageTrails({}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTrails();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(data.trails[0].address);
  const fields = ["name", "address"];
  return (
    <div className="hoe">
      <Table fields={fields} initItems={data.trails} />
    </div>
  );
}

export default ManageTrails;
