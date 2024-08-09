// src/About.js
import React, { useState } from "react";
import DashboardButton from "../base-components/buttons/dashboard-buttons";
import alert from "../images/alert.png";
import mountain from "../images/mountain.png";
import person from "../images/person.png";
import Table from "../base-components/table/table";
import ActionBar from "../base-components/table/action-bar";
import PageHeader from "../base-components/page-header";

function Dashboard() {
  const item = {
    "tag-identifier": "x232",
    trail: "Juan De Fuca",
    checkpoint: "beach",
    "checkin-time": "12:30",
    name: "john",
  };

  const item2 = {
    "tag-identifier": "z123",
    trail: "Ur moms trail",
    checkpoint: "DA BEACH?",
    "checkin-time": "11:30",
    name: "sigma male",
  };

  const fields = [
    "tag-identifier",
    "trail",
    "checkpoint",
    "checkin-time",
    "name",
  ];

  const initItems = [item, item2];

  return (
    <div className="dashboard">
      <PageHeader text={"Hiker Dashboard"} />
      <div className="dashboard-buttons">
        <DashboardButton
          label={"Checkpoint Alerts"}
          icon={alert}
          link={"/checkpoint-alerts"}
        />
        <DashboardButton
          label={"Manage Trails"}
          icon={mountain}
          link={"/manage-trails"}
        />
        <DashboardButton
          label={"Manage Users"}
          icon={person}
          link={"/manage-users"}
        />
      </div>
      <div>
        <Table initItems={initItems} fields={fields} />
      </div>
    </div>
  );
}

export default Dashboard;
