/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
function TweetInput({ sendTweet }) {
  const [newTweet, setnewTweet] = useState("");

  const handleClick = () => {
    if (newTweet.trim() === "") {
      alert("Debes escribir algo");
      return;
    } else {
      sendTweet(newTweet);
      setnewTweet("");
    }
  };
  return (
    <div className="m-4">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Twittea algo"
        value={newTweet}
        onChange={(e) => {
          setnewTweet(e.target.value);
        }}
      />

      <button
        className="border bg-blue-800 w-full rounded mt-2 text-white"
        onClick={handleClick}
      >
        ENVIAR
      </button>
    </div>
  );
}

export default TweetInput;
