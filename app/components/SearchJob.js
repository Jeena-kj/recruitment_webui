'use client';
import "../styles/components/SearchJob.scss";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchJob() {
  // State to store the search value
  const [searchValue, setSearchValue] = useState('');

  const router = useRouter();

  // Redirect to job listings with the search value as a URL parameter
  const redirectToAllJobs = () => {
    if (searchValue.trim()) {
      // Push the search value into the URL
      router.push(`/job-listings?search=${encodeURIComponent(searchValue.trim())}`);
    } else {
      // If no value, just navigate to job listings
      router.push('/job-listings');
    }
  };

  return (
    <section className="search-job d-flex align-items-center position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-7 text-start">
            <p className="subtitle">Software Recruitment Specialists</p>
            <h1 className="title">Elevate your career</h1>
            <div className="search-bar input-group mt-4">
              <input type="text" className="form-control" placeholder="E.g.Software" aria-label="Search jobs" value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} />
              <button className="btn btn-warning" type="button" onClick={redirectToAllJobs} >
                Search jobs
              </button>
            </div>
          </div>
          <div className="col-12 col-md-5 text-end">
            <img src="/images/banner5.png" alt="Elevate your career" className="img-fluid rounded shadow banner-img" />
          </div>
        </div>
      </div>
      <div className="shape shape-yellow"></div>
      <div className="shape shape-orange"></div>
    </section>
  );
}
