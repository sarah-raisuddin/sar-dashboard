import React from "react";
import InputText from "../inputs/input-text";
import SubmissionButton from "../buttons/button";
import { addCheckpoints, updateCheckpoint } from "../../requests/api";
import { useState, useEffect } from "react";
import CloseFormButton from "../buttons/close-form-button";

const AddForm = ({ fields, itemToEdit, itemType, setForm }) => {
  const [updatedItem, setUpdatedItem] = useState(itemToEdit);
  const onSubmit = () => {
    console.log("clicked");
    console.log(itemToEdit.id);
    addCheckpoints({ checkpoint: updatedItem });
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
        <CloseFormButton handleSubmit={() => setForm(null)} />
        <h1>{formTitle}</h1>
        <div className="edit-form">
          {fields.map((i) => (
            <InputText
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
