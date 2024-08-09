// src/InputComponent.js
import React, { useState, useEffect } from "react";
import { fetchUsers } from "../requests/api";
import Table from "../base-components/table/table";
import EditForm from "../base-components/forms/edit-form";
import TableButtons from "../base-components/table/table-buttons";
import AddForm from "../base-components/forms/add-form";
import DashboardButtons from "../components/dashboard-buttons";
import PageHeader from "../base-components/page-header";

function ManageUsers() {
  const [data, setData] = useState(null);
  const [formOpen, setFormOpen] = useState({ add: false, edit: false });
  const [selectedRow, setSelectedRow] = useState(null);
  const itemType = "user";

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchUsers();
      setData(result);
    };
    fetchData();
  }, []);

  // TODO : MAKE A BETTER LOADING SCREEN
  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(data);
  const fields = ["email", "name"];

  return (
    <div>
      <PageHeader text={"Manage Users"} />
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
          item={"user"}
        />
        <Table
          fields={fields}
          initItems={data.users}
          setSelectedRow={setSelectedRow}
          selectedRow={selectedRow}
          itemType={"Checkpoint"}
        />
      </div>
    </div>
  );
}

export default ManageUsers;
