import "./JobPosting.css";

const JobPosting = (item) => {
  return (
    <div className="container">
      <a>{item.title}</a>
      <span>By {item.by}</span>
    </div>
  );
};

export default JobPosting;
