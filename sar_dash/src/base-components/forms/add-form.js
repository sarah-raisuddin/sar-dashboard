import React from "react";
import InputText from "../inputs/input-text";
import SubmissionButton from "../buttons/button";
import { addCheckpoints, addTrail } from "../../requests/api";
import { useState, useEffect } from "react";
import CloseFormButton from "../buttons/close-form-button";
import InputErrorMessage from "../input-error-message";

const AddForm = ({
  fields,
  itemToEdit,
  itemType,
  setFormOpen,
  trailId,
  setRefresh,
}) => {
  const [updatedItem, setUpdatedItem] = useState(itemToEdit);
  const [submitError, setSubmitError] = useState(false);

  console.log(itemType);
  const onSubmit = () => {
    function hasEmptyFields(item) {
      // List of fields to check, excluding 'status'
      const fieldsToCheck = [
        "latitude",
        "longitude",
        "checkpoint_order",
        "trail_id",
        "name",
        "pole_id",
      ];

      if (!item) {
        // If item is null or undefined, return true as it has empty fields
        return true;
      }

      return fieldsToCheck.some(
        (field) =>
          item[field] === null ||
          item[field] === undefined ||
          item[field] === ""
      );
    }
    if (itemType === "Checkpoint") {
      if (hasEmptyFields(updatedItem)) {
        console.error("Checkpoint fields cannot be blank or null");
        setSubmitError(true);
        return;
      }
      addCheckpoints({ checkpoint: updatedItem, trailId: trailId });
    } else {
      if (hasEmptyFields(updatedItem)) {
        console.error("Trail fields cannot be blank or null");
        setSubmitError(true);
        return;
      }
      addTrail({ trail: updatedItem });
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

  const formTitle = `Add ${itemType}`;
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
          {fields
            .filter((field) => field !== "trail_id")
            .map((i) => (
              <InputText
                key={i}
                label={i}
                onChange={(value) => handleFieldChange(i, value)}
                placeholder={i}
              />
            ))}
          {submitError && (
            <InputErrorMessage message={"Fields cannot be blank"} />
          )}
          <SubmissionButton text={`Add ${itemType}`} handleSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AddForm;
