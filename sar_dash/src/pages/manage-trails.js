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
function ManageTrails({}) {
  const [data, setData] = useState(null);
  const [formOpen, setFormOpen] = useState({ add: false, edit: false });
  const [selectedRow, setSelectedRow] = useState(null);
  const itemType = "Trail";
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTrails();
      setData(result);
    };
    fetchData();
    setRefresh(false);
  }, [refresh]);

  // TODO : MAKE A BETTER LOADING SCREEN
  if (!data) {
    return <div>Loading...</div>;
  }

  const fields = ["name", "address"];

  return (
    <>
      {formOpen.add && (
        <AddForm
          fields={fields}
          itemType={itemType}
          itemToEdit={selectedRow}
          setFormOpen={setFormOpen}
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
        <PageHeader text={"Manage Trails"} />
        <DashboardButtons />

        <div
          className={
            formOpen.add || formOpen.edit
              ? "manage-checkpoints"
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
    </>
  );
}

export default ManageTrails;
