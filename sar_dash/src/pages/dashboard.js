// src/About.js
import React, { useState } from "react";
import DashboardButton from "../base-components/buttons/dashboard-buttons";
import alert from "../images/alert.png";
import mountain from "../images/mountain.png";
import person from "../images/person.png";
import Table from "../base-components/table/table";
import ActionBar from "../base-components/table/action-bar";
import PageHeader from "../base-components/page-header";
import { fetchCheckpointEntries } from "../requests/api";
import { useEffect } from "react";

function Dashboard() {
  const [data, setData] = useState([]);
  const fields = [
    "checkpoint_name",
    "trail_name",
    "full_name",
    "tag_id",
    "time",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCheckpointEntries();
        const nameFormattedData = result.map((item) => ({
          ...item,
          full_name: `${item.first_name} ${item.last_name}`, // Concatenate names
        }));
        setData(nameFormattedData);
        console.log(result); // Check the structure of the data
      } catch (error) {
        console.error("Error fetching checkpoint entries:", error);
      }
    };

    fetchData();
  }, []);

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
        <Table initItems={data} fields={fields} />
      </div>
    </div>
  );
}

export default Dashboard;
