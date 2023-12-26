import React from "react";

const JobPosting = (item) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <span>By {item.by}</span>
    </div>
  );
};

export default JobPosting;
