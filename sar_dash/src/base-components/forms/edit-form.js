import React from "react";
import InputText from "../inputs/input-text";
import SubmissionButton from "../buttons/button";
import { updateCheckpoint, updateTrail } from "../../requests/api";
import { useState, useEffect } from "react";
import CloseFormButton from "../buttons/close-form-button";

const EditForm = ({
  fields,
  itemToEdit,
  itemType,
  setFormOpen,
  setRefresh,
}) => {
  const [updatedItem, setUpdatedItem] = useState(itemToEdit);
  const onSubmit = () => {
    if (itemType === "Checkpoint") {
      console.log("yuh");
      updateCheckpoint({
        checkpointId: itemToEdit.id,
        checkpoint: updatedItem,
      });
    } else {
      updateTrail({
        trailId: itemToEdit.id,
        trail: updatedItem,
      });
    }
    setFormOpen({ add: false, edit: false });
    setRefresh(true);
  };

  // Handler to update a specific field
  const handleFieldChange = (field, value) => {
    setUpdatedItem((prevItem) => ({
      ...prevItem,
      [field]: value,
    }));
  };

  const formTitle = `Update ${itemType}`;
  return (
    <div className="form-underlay">
      <div className="edit-form-container">
        <div className="edit-form-header">
          <h1>{formTitle}</h1>
          <CloseFormButton
            handleSubmit={() => setFormOpen({ add: false, edit: false })}
          />
        </div>

        <div className="edit-form">
          {fields.map((i) => (
            <InputText
              label={i}
              value={updatedItem[i]}
              onChange={(value) => handleFieldChange(i, value)}
            />
          ))}
          <SubmissionButton handleSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default EditForm;
