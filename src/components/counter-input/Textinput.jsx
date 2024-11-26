/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
function Textinput() {
  const { text, setText } = useState("");
  return (
    <div>
      <input
        className="border mt-2"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}

export default Textinput;
