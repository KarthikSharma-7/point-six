import React from "react";
import RandomImage from "./RandomImage";

const App = () => {
  return (
    <div
      style={{
        background: "#E1F8DC",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Random Image Viewer
      </h1>
      <RandomImage />
    </div>
  );
};

export default App;
