import React, { useState } from "react";

function TableButtons({ selectedItem, setFormOpen }) {
  const item = "Checkpoint";
  const active = selectedItem ? "" : "inactive";
  const EditButton = (
    <button
      className={`button ${active}`}
      onClick={() => setFormOpen({ add: false, edit: true })}
    >
      Edit {item}
    </button>
  );
  const DeleteButton = (
    <button className={`button ${active}`}>Delete {item}</button>
  );
  const AddButton = (
    <button
      className="button"
      onClick={() => setFormOpen({ add: true, edit: false })}
    >
      Add {item}
    </button>
  );

  return (
    <div className="table-buttons">
      {AddButton}
      {EditButton}
      {DeleteButton}
    </div>
  );
}

export default TableButtons;
