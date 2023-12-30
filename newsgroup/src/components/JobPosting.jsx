import "./JobPosting.css";

const JobPosting = (item) => {
  return (
    <div className="container">
      <h1>{item.title}</h1>
      <span>By {item.by}</span>
    </div>
  );
};

export default JobPosting;
