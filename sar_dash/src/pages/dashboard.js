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
  const dummyData = [
    {
      checkpoint_name: "Checkpoint Alpha",
      trail_name: "Trail A",
      full_name: "John Doe",
      tag_id: "TAG123456",
      time: "2024-08-10T14:32:12.000Z",
    },
    {
      checkpoint_name: "Checkpoint Beta",
      trail_name: "Trail B",
      full_name: "Jane Smith",
      tag_id: "TAG234567",
      time: "2024-08-09T09:21:45.000Z",
    },
    {
      checkpoint_name: "Checkpoint Gamma",
      trail_name: "Trail C",
      full_name: "Alice Johnson",
      tag_id: "TAG345678",
      time: "2024-08-08T18:50:33.000Z",
    },
    {
      checkpoint_name: "Checkpoint Delta",
      trail_name: "Trail D",
      full_name: "Bob Brown",
      tag_id: "TAG456789",
      time: "2024-08-07T16:05:27.000Z",
    },
    {
      checkpoint_name: "Checkpoint Epsilon",
      trail_name: "Trail E",
      full_name: "Carol White",
      tag_id: "TAG567890",
      time: "2024-08-06T11:22:10.000Z",
    },
    {
      checkpoint_name: "Checkpoint Zeta",
      trail_name: "Trail F",
      full_name: "David Black",
      tag_id: "TAG678901",
      time: "2024-08-05T13:45:59.000Z",
    },
    {
      checkpoint_name: "Checkpoint Eta",
      trail_name: "Trail G",
      full_name: "Emma Green",
      tag_id: "TAG789012",
      time: "2024-08-04T10:30:40.000Z",
    },
  ];

  const [data, setData] = useState(undefined);
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
          full_name: `${item.first_name} ${item.last_name}`,
        }));
        setData(nameFormattedData);
        console.log(data);
      } catch (error) {
        console.error("Error fetching checkpoint entries:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <h1>loading</h1>;
  }

  const extractTrailNames = () => {
    const names = data.map((item) => item.trail_name).filter(Boolean);
    return [...new Set(names)]; // Remove duplicates
  };

  const extractCheckpointNames = () => {
    const names = data.map((item) => item.checkpoint_name).filter(Boolean);
    return [...new Set(names)]; // Remove duplicates
  };

  const trailFilter = {
    field: "trail_name",
    placeholder: "Filter by trail",
    options: extractTrailNames(),
  };

  const checkpointFilter = {
    field: "checkpoint_name",
    placeholder: "Filter by checkpoint",
    options: extractCheckpointNames(),
  };

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
        <Table
          itemType={"entrie"}
          initItems={data}
          fields={fields}
          filterFields={[trailFilter, checkpointFilter]}
          filterTime={true}
        />
      </div>
    </div>
  );
}

export default Dashboard;
