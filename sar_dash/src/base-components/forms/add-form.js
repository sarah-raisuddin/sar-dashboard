import React from "react";
import InputText from "../inputs/input-text";
import SubmissionButton from "../buttons/button";
import { addCheckpoints, addTrail } from "../../requests/api";
import { useState, useEffect } from "react";
import CloseFormButton from "../buttons/close-form-button";

const AddForm = ({
  fields,
  itemToEdit,
  itemType,
  setFormOpen,
  trailId,
  setRefresh,
}) => {
  const [updatedItem, setUpdatedItem] = useState(itemToEdit);
  const onSubmit = () => {
    if (itemType === "Checkpoint") {
      console.log(updatedItem);
      addCheckpoints({ checkpoint: updatedItem, trailId: trailId });
    } else {
      addTrail({ trail: updatedItem });
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

          <SubmissionButton handleSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AddForm;
