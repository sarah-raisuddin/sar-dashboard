// src/InputComponent.js
import React, { useState, useEffect } from "react";
import { fetchCheckpoints, updateCheckpoint } from "../requests/api";
import Table from "../base-components/table/table";
import EditForm from "../base-components/forms/edit-form";
import TableButtons from "../base-components/table/table-buttons";
import AddForm from "../base-components/forms/add-form";
import DashboardButtons from "../components/dashboard-buttons";
import { fetchTrails } from "../requests/api";

import PageHeader from "../base-components/page-header";
function ManageTrails({ trailId, trailName }) {
  const [data, setData] = useState(null);
  const [formOpen, setFormOpen] = useState({ add: false, edit: false });
  const [selectedRow, setSelectedRow] = useState(null);
  const itemType = "Trail";

  // const trailId = 1;
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTrails();
      setData(result);
    };
    fetchData();
  }, []);

  // TODO : MAKE A BETTER LOADING SCREEN
  if (!data) {
    return <div>Loading...</div>;
  }

  const fields = ["name", "address"];

  return (
    <div>
      <PageHeader text={"Manage Trails"} />
      <DashboardButtons />
      {formOpen.add && (
        <AddForm
          fields={fields}
          itemType={itemType}
          itemToEdit={selectedRow}
          setFormOpen={setFormOpen}
        />
      )}
      {formOpen.edit && (
        <EditForm
          fields={fields}
          itemType={itemType}
          itemToEdit={selectedRow}
          setFormOpen={setFormOpen}
        />
      )}
      <div
        className={
          formOpen.add || formOpen.edit
            ? "blur manage-checkpoints"
            : "manage-checkpoints"
        }
      >
        <TableButtons
          selectedItem={selectedRow}
          setFormOpen={setFormOpen}
          item={"trail"}
        />
        <Table
          fields={fields}
          initItems={data.trails}
          setSelectedRow={setSelectedRow}
          selectedRow={selectedRow}
          itemType={"Trail"}
        />
      </div>
    </div>
  );
}

export default ManageTrails;
