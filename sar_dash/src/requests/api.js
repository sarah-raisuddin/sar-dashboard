const api = `https://local-test-deployment-capstone-2024.azurewebsites.net/sar_dashboard`;
// const api = "http://localhost:3000/sar_dashboard";

export const fetchTrails = async () => {
  const apiEndpoint = api + "/trails";
  try {
    const response = await fetch(apiEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Login successful", data);
      return data;
    } else {
      // Handle errors
      console.log("Login failed", response.statusText);
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export const fetchCheckpointEntries = async () => {
  const apiEndpoint = api + "/checkpointEntries";
  try {
    const response = await fetch(apiEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Login successful", data);
      return data.checkpointsEntries;
    } else {
      // Handle errors
      console.log("Login failed", response.statusText);
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export const addTrail = async ({ trail }) => {
  const apiEndpoint = `${api}/trail`;
  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: trail.name,
        address: trail.address,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Successfully added trail", data);
      return data;
    }
  } catch (error) {
    console.error("Error during trail post:", error);
  }
};

export const updateTrail = async ({ trailId, trail }) => {
  const apiEndpoint = `${api}/trails/${trailId}`;

  try {
    const response = await fetch(apiEndpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: trail.name,
        address: trail.address,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Successfully updated checkpoint", data);
      return data;
    }
  } catch (error) {
    console.error("Error during checkpoints fetch:", error);
  }
};

export const fetchCheckpoints = async ({ trailId }) => {
  const apiEndpoint = `${api}/checkpoints?trail_id=${trailId}`;
  try {
    const response = await fetch(apiEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Successfully retrieved checkpoints", data);
      return data;
    }
  } catch (error) {
    console.error("Error during checkpoints fetch:", error);
  }
};

export const updateCheckpoint = async ({ checkpointId, checkpoint }) => {
  const apiEndpoint = `${api}/checkpoints/${checkpointId}`;

  try {
    // Convert pole_id to number if it's not already a number
    const poleId = isNaN(checkpoint.pole_id)
      ? parseInt(checkpoint.pole_id, 10)
      : checkpoint.pole_id;

    const response = await fetch(apiEndpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        latitude: checkpoint.latitude,
        longitude: checkpoint.longitude,
        checkpoint_order: checkpoint.checkpoint_order,
        trail_id: checkpoint.trail_id,
        name: checkpoint.name,
        pole_id: poleId,
      }),
    });

    // Handle response as needed

    if (response.ok) {
      const data = await response.json();
      console.log("Successfully updated checkpoint", data);
      return data;
    }
  } catch (error) {
    console.error("Error during checkpoints fetch:", error);
  }
};

export const addCheckpoints = async ({ checkpoint, trailId }) => {
  const apiEndpoint = `${api}/checkpoints`;
  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        trail_id: trailId,
        latitude: checkpoint.latitude,
        longitude: checkpoint.longitude,
        checkpoint_order: checkpoint.checkpoint_order,
        name: checkpoint.name,
        pole_id: parseInt(checkpoint.pole_id, 10),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Successfully added checkpoint", data);
      return data;
    }
  } catch (error) {
    console.error("Error during checkpoints post:", error);
  }
};

export const fetchUsers = async () => {
  const apiEndpoint = `${api}/users`;
  try {
    const response = await fetch(apiEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Successfully retrieved users", data);
      return data;
    }
  } catch (error) {
    console.error("Error during users fetch:", error);
  }
};
