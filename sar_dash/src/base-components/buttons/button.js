import React, { useState } from "react";
import arrow from "../../images/button-arrow.png";

function SubmissionButton({ handleSubmit, text }) {
  return (
    <div className="button-container centre submission">
      <button className="button" onClick={handleSubmit}>
        {text && <p style={{ margin: "0 10px 0 0" }}>{text}</p>}
        <img src={arrow} />
      </button>
    </div>
  );
}

export default SubmissionButton;
