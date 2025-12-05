"use client";

import React from "react";
import LaserFlow from "../ui/laser";

export default function Aadhnik() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "black",
      }}
      className="laser-wrapper"
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={-0.5}   // desktop stays the same
        color="#FF79C6"
      />
    </div>
  );
}
