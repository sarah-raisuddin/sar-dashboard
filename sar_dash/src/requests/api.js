const api = "http://localhost:3000/sar_dashboard";

export const fetchTrails = async () => {
  // Replace with your API endpoint
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

export const fetchCheckpoints = async ({ trailId }) => {
  // Replace with your API endpoint
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
    } else {
      // Handle errors
      console.log("Retrieving checkpoints failed", response.statusText);
    }
  } catch (error) {
    console.error("Error during checkpoints fetch:", error);
  }
};

export const updateCheckpoint = async ({ checkpointId, checkpoint }) => {
  const apiEndpoint = `${api}/checkpoints/${checkpointId}`;

  try {
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
        checkpoint_name: checkpoint.checkpoint_name,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Successfully updated checkpoint", data);
      return data;
    } else {
      console.log("Retrieving checkpoints failed", response.statusText);
    }
  } catch (error) {
    console.error("Error during checkpoints fetch:", error);
  }
};

export const addCheckpoints = async ({ checkpoint }) => {
  const apiEndpoint = `${api}/checkpoints`;
  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        trail_id: checkpoint.trail_id,
        latitude: checkpoint.latitude,
        longitude: checkpoint.longitude,
        checkpoint_order: checkpoint.checkpoint_order,
        checkpoint_name: checkpoint.checkpoint_name,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Successfully added checkpoint", data);
      return data;
    } else {
      console.log("Posting checkpoint failed", response.statusText);
    }
  } catch (error) {
    console.error("Error during checkpoints post:", error);
  }
};