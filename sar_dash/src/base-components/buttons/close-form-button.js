import React, { useState } from "react";
import xIcon from "../../images/x-icon.png";

function CloseFormButton({ handleSubmit, text }) {
  return (
    <div className="button-container right">
      <button className="x-button" onClick={() => handleSubmit()}>
        <img src={xIcon} />
        {text}
      </button>
    </div>
  );
}

export default CloseFormButton;
