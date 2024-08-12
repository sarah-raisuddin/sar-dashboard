import React from "react";
import InputText from "../inputs/input-text";
import SubmissionButton from "../buttons/button";
import { updateCheckpoint, updateTrail } from "../../requests/api";
import { useState, useEffect } from "react";
import CloseFormButton from "../buttons/close-form-button";
import InputErrorMessage from "../input-error-message";
const EditForm = ({
  fields,
  itemToEdit,
  itemType,
  setFormOpen,
  setRefresh,
}) => {
  const [updatedItem, setUpdatedItem] = useState(itemToEdit);
  const [submitError, setSubmitError] = useState(false);

  function hasEmptyFieldsCheckpoint(item) {
    // List of fields to check, excluding 'status'
    const fieldsToCheck = [
      "latitude",
      "longitude",
      "checkpoint_order",
      "trail_id",
      "name",
      "pole_id",
    ];
    // Check if any of the specified fields are empty
    return fieldsToCheck.some((field) => !item[field]);
  }

  function hasEmptyFieldsTrails(item) {
    // List of fields to check, excluding 'status'
    const fieldsToCheck = ["name", "address"];
    // Check if any of the specified fields are empty
    return fieldsToCheck.some((field) => !item[field]);
  }

  const onSubmit = () => {
    if (itemType === "Checkpoint") {
      if (hasEmptyFieldsCheckpoint(updatedItem)) {
        console.error("Item fields cannot be blank");
        setSubmitError(true);
        return;
      }
      updateCheckpoint({
        checkpointId: itemToEdit.id,
        checkpoint: updatedItem,
      });
    } else {
      if (hasEmptyFieldsTrails(updatedItem)) {
        console.error("Item fields cannot be blank");
        setSubmitError(true);
        return;
      }
      updateTrail({
        trailId: itemToEdit.id,
        trail: updatedItem,
      });
    }
    setFormOpen({ add: false, edit: false });
    setRefresh(true);
  };

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

          {submitError && (
            <InputErrorMessage message={"Cannot submit with blank fields"} />
          )}
          <SubmissionButton handleSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default EditForm;
