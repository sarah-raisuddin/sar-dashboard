// src/InputComponent.js
import React, { useState, useEffect } from "react";
import { fetchCheckpoints, updateCheckpoint } from "../requests/api";
import { useLocation } from "react-router-dom";
import Table from "../base-components/table/table";
import EditForm from "../base-components/forms/edit-form";
import TableButtons from "../base-components/table/table-buttons";
import AddForm from "../base-components/forms/add-form";
import DashboardButtons from "../components/dashboard-buttons";
import PageHeader from "../base-components/page-header";

function ManageCheckpoints() {
  const [data, setData] = useState(null);
  const [formOpen, setFormOpen] = useState({ add: false, edit: false });
  const [selectedRow, setSelectedRow] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const itemType = "Checkpoint";

  const location = useLocation();
  const { trailId, trailName } = location.state || {};

  useEffect(
    () => {
      const fetchData = async () => {
        const result = await fetchCheckpoints({ trailId: trailId });
        setData(result);
      };

      fetchData();
      setRefresh(false);
    },
    data,
    refresh
  );

  // TODO : MAKE A BETTER LOADING SCREEN
  if (!data) {
    return <div>Loading...</div>;
  }

  const fields = ["checkpoint_order", "name", "latitude", "longitude"];

  return (
    <div>
      <PageHeader text={"Manage Checkpoints"} />
      <DashboardButtons />
      <div className="manage-checkpoints-trail-name">
        <h3>{trailName} Trail</h3>
      </div>
      {formOpen.add && (
        <AddForm
          fields={fields}
          itemType={itemType}
          itemToEdit={selectedRow}
          setFormOpen={setFormOpen}
          trailId={trailId}
          setRefresh={setRefresh}
        />
      )}
      {formOpen.edit && (
        <EditForm
          fields={fields}
          itemType={itemType}
          itemToEdit={selectedRow}
          setFormOpen={setFormOpen}
          setRefresh={setRefresh}
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
          item={"checkpoint"}
        />
        <Table
          fields={fields}
          initItems={data.checkpoints}
          setSelectedRow={setSelectedRow}
          selectedRow={selectedRow}
          itemType={"Checkpoint"}
        />
      </div>
    </div>
  );
}

export default ManageCheckpoints;
