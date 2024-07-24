import React, { useState } from "react";
import Smena from "./Smena";

export default function SmenList() {
  const [smens, setSmens] = useState([
    { name: "karp", cmena: "11:00", cost: 100 },
    { name: "cazan", cmena: "12:00", cost: 10 },
  ]);
  return (
    <div>
      {smens.map((smena) => (
        <Smena smena={smena}></Smena>
      ))}
    </div>
  );
}
