import React from "react";
import Jobs from "./Jobs";
import Updates from "./Updates";

const MainContent = () => {
  return (
    <div className=" px-4 mx-auto py-4 flex gap-4 flex-wrap">
      <div className=" flex-1 basis-3/4">
        <Jobs />
      </div>
      <Updates />

      
    </div>
  );
};

export default MainContent;
