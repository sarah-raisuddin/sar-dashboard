import React, { useState } from "react";
import mountain from "../images/mountain.png";
import person from "../images/person.png";
import alert from "../images/alert.png";
import DashboardButton from "../base-components/buttons/dashboard-buttons";

function DashboardButtons({}) {
  return (
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
  );
}

export default DashboardButtons;
