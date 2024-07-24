import React from "react";

export default function Smena({ smena }) {
  return (
    <div>
      <p>{smena.name}</p>
      <input type="time"></input>
      <input type="time"></input>
    </div>
  );
}
