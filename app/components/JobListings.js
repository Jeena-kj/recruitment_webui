'use client';
import React, { useState,useEffect  } from "react";
import { useSearchParams,useRouter } from 'next/navigation';
import "../styles/components/jobListings.scss";

export default function JobListComponent() {
  const jobListings = [
    {
      id: 1,
      title: "Lead Tech Developer",
      company: "ABC Company Limited",
      location: "Hybrid",
      salary: "£19,000 – £87,000 monthly",
      tags: ["Full Time", "Freshers only", "Basic English"],
      description: "Responsible for leading engineering teams.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Fullstack Developer",
      company: "ABC Company Limited",
      location: "Work from home",
      salary: "£39,000 – £67,000 monthly",
      tags: ["Full Time", "Basic English"],
      description: "Full-stack development of web applications.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "ABC Company Limited",
      location: "Work from home",
      salary: "£39,000 – £97,000 monthly",
      tags: ["Full Time", "Basic English"],
      description: "Developing React-based interfaces.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "ABC Company Limited",
      location: "Work from office",
      salary: "£49,000 – £187,000 monthly",
      tags: ["Full Time", "Basic English"],
      description: "Building scalable web applications.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      id: 5,
      title: "Backend Developer",
      company: "ABC Company Limited",
      location: "Work from office",
      salary: "£49,000 – £187,000 monthly",
      tags: ["Full Time", "Basic English"],
      description: "Developing backend services.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
    {
      id: 6,
      title: "Product Engineer",
      company: "ABC Company Limited",
      location: "Work from office",
      salary: "£49,000 – £187,000 monthly",
      tags: ["Full Time", "English"],
      description: "Engineering product solutions.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.",
    },
  ];

  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplied, setIsApplied] = useState(false);

  	useEffect(() => {
		const jobId = searchParams.get("jobId");
		if (jobId) {
			const job = jobListings.find((job) => job.id === parseInt(jobId, 10));
			setSelectedJob(job || null);
		}
	}, [searchParams]);

  const handleApply = () => {
  	alert(`You applied for the position: ${selectedJob.title}`);
  	setIsApplied(true);
  }
  return (
    <div className="container my-4">
    	<div className="row">
    		<div className="col-md-4">
		      <h2>100+ Software Jobs</h2>
		    </div>	
      		<div className="col-md-8 text-end">
		      	<button className="btn btn-link text-decoration-none" onClick={() => router.push("/")} >
		          <i className="bi bi-house-fill"></i> Home
		        </button>
	        </div>
        </div>
      	<div className="row">
	        <div className="col-md-4">
	          <div className="filterSection">
	            <div className="filter-header">
	              <h5> Filters <i className="bi bi-filter"></i></h5>
	              <h6>Clear All</h6>
	            </div>
	            <div className="mb-3 filter-group">
	              <p>Date posted</p>
	              <div>
	                <input type="radio" id="all" name="datePosted" value="All" />
	                <label htmlFor="all">All</label>
	              </div>
	              <div>
	                <input type="radio" id="24hours" name="datePosted" value="Last 24 hours" />
	                <label htmlFor="24hours">Last 24 hours</label>
	              </div>
	              <div>
	                <input type="radio" id="7days" name="datePosted" value="Last 7 days" />
	                <label htmlFor="7days">Last 7 days</label>
	              </div>
	            </div>
	            <div className="mb-3 filter-group">
	              <p>Work Type</p>
	              <div>
	                <input type="radio" id="fullTime" name="fullTime" value="Full Time" />
	                <label htmlFor="fullTime">Full Time</label>
	              </div>
	              <div>
	                <input type="radio" id="partTime" name="partTime" value="Part Time" />
	                <label htmlFor="partTime">Part Time</label>
	              </div>
	            </div>
	            <div className="mb-3 filter-group">
	              <p>Sort By</p>
	              <div>
	                <input type="radio" id="relevant" name="relevant" value="relevant" />
	                <label htmlFor="relevant">Relevant</label>
	              </div>
	              <div>
	                <input type="radio" id="salary" name="salary" value="Salary" />
	                <label htmlFor="salary">Salary - High to Low</label>
	              </div>
	              <div>
	                <input type="radio" id="jobPosted" name="jobPosted" value="Job Posted" />
	                <label htmlFor="jobPosted">Job Posted - New to Old</label>
	              </div>
	            </div>
          	</div>
        </div>

        <div className="col-md-8">

          {selectedJob ? (
            <div className="col-12 mb-3 job-details">
              <button className="btn btn-link" onClick={() => { setSelectedJob(null); setIsApplied(false); }} >
                &larr; Back to Jobs
              </button>
              <h3>{selectedJob.title}</h3>
              <p><strong>Company:</strong> {selectedJob.company}</p>
              <p><strong>Location:</strong> {selectedJob.location}</p>
              <p><strong>Salary:</strong> {selectedJob.salary}</p>
              <p><strong>Description:</strong> {selectedJob.description}</p>
              <div className="tags">
                {selectedJob.tags.map((tag, i) => (
                  <span key={i} className="badge">{tag}</span>
                ))}
              </div>
              <button className={`btn ${isApplied ? "btn-success" : "btn-primary"}`} onClick={handleApply} disabled={isApplied} >
                {isApplied ? "Applied" : "Apply"}
              </button>
            </div>
          ) : (
            <div className="row">
              {jobListings.map((job) => (
                <div className="col-12 mb-3" key={job.id} onClick={() => setSelectedJob(job)} style={{ cursor: "pointer" }} >
                  <div className="card jobCard">
                    <div className="card-body">
                      <h5 className="card-title">{job.title}</h5>
                      <p className="card-text">{job.company}</p>
                      <p className="card-text">{job.location}</p>
                      <p className="card-text">{job.salary}</p>
                      <div className="tags">
                        {job.tags.map((tag, i) => (
                          <span key={i} className="badge">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
