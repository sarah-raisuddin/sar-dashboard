// src/InputComponent.js
import React, { useState, useEffect } from "react";
import { fetchCheckpoints, updateCheckpoint } from "../requests/api";
import Table from "../base-components/table/table";
import EditForm from "../base-components/forms/edit-form";
import TableButtons from "../base-components/table/table-buttons";
import AddForm from "../base-components/forms/add-form";

function ManageCheckpoints({ trailId }) {
  const [data, setData] = useState(null);
  const [formOpen, setFormOpen] = useState({ add: false, edit: false });
  const [selectedRow, setSelectedRow] = useState(null);
  const itemType = "Checkpoint";

  trailId = 1;
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchCheckpoints({ trailId: 1 });
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const fields = [
    "checkpoint_order",
    "checkpoint_name",
    "latitude",
    "longitude",
  ];

  return (
    <div>
      {/* <AddForm fields={fields} itemType={itemType} /> */}
      {formOpen.add && (
        <EditForm
          fields={fields}
          itemType={itemType}
          itemToEdit={selectedRow}
          setForm={setSelectedRow}
        />
      )}
      <div
        className={
          selectedRow ? "blur manage-checkpoints" : "manage-checkpoints"
        }
      >
        <TableButtons selectedItem={selectedRow} setFormOpen={setFormOpen} />
        <Table
          fields={fields}
          initItems={data.checkpoints}
          setSelectedRow={setSelectedRow}
          selectedRow={selectedRow}
        />
      </div>
    </div>
  );
}

export default ManageCheckpoints;
