import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TableButtons({ selectedItem, setFormOpen, item }) {
  // handles button states
  const active = selectedItem ? "" : "inactive";
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/manage-checkpoints", {
      state: { trailId: selectedItem.id, trailName: selectedItem.name },
    });
  };

  console.log(selectedItem);

  // different button types :3
  const ViewCheckpointsButton = (
    <button className={`button ${active}`} onClick={() => handleButtonClick()}>
      View Checkpoints
    </button>
  );

  const EditButton = (
    <button
      className={`button ${active}`}
      onClick={() => setFormOpen({ add: false, edit: true })}
    >
      Edit {item}
    </button>
  );

  const AddButton = (
    <button
      className="button"
      onClick={() => setFormOpen({ add: true, edit: false })}
    >
      Add {item}
    </button>
  );

  const DeleteButton = (
    <button className={`button ${active}`}>Delete {item}</button>
  );

  return (
    <div className="table-buttons">
      {AddButton}
      {EditButton}
      {DeleteButton}

      {item === "trail" && ViewCheckpointsButton}
    </div>
  );
}

export default TableButtons;
