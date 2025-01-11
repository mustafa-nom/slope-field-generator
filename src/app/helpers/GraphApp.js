"use client";
import React, { useState } from "react";
import GraphForm from "./GraphForm";
import GraphCanvas from "./GraphCanvas";

const GraphApp = () => {
  const [formData, setFormData] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <GraphForm onSubmit={(data) => {setFormData(data)}} />
      {formData && <GraphCanvas formData={formData} />}
    </div>
  );
};

export default GraphApp;
