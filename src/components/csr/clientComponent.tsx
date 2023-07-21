"use client";
import React, { useState } from "react";

export default function ClientComponent() {
  const [active, setActive] = useState(false);

  return (
    <main>
      <h2>I'm Client component</h2>
      <div>
        <p>{active ? "Active" : "Inactive"}</p>
        <button onClick={() => setActive(!active)}>click me!</button>
      </div>
    </main>
  );
}
