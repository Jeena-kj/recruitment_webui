'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../styles/components/LatestJobs.scss';

export default function LatestJobs() {
	// Array of job details
	const jobs = [
		{ id: 1, language: 'Python', title: 'Lead Tech Developer', location: 'London', salary: '£65,000', date: '20/09/2023', description: 'Responsible for leading engineering teams.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.', bgcolor: 'yellow' },
		{ id: 2, language: 'PHP', title: 'Fullstack Developer', location: 'London', salary: '£55,000', date: '21/09/2023', description: 'Full-stack development of web applications.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.', bgcolor: 'blue' },
		{ id: 3, language: 'React', title: 'Software Engineer', location: 'London', salary: '£45,000', date: '23/09/2023', description: 'Developing React-based interfaces.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.', bgcolor: 'orange' },
		{ id: 4, language: 'Ruby', title: 'Software Engineer', location: 'London', salary: '£75,000', date: '24/09/2023', description: 'Building scalable web applications.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.', bgcolor: 'yellow' },
		{ id: 5, language: 'Node.js', title: 'Backend Developer', location: 'London', salary: '£50,000', date: '25/09/2023', description: 'Developing backend services.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.', bgcolor: 'blue' },
		{ id: 6, language: '.Net', title: 'Product Engineer', location: 'London', salary: '£40,000', date: '26/09/2023', description: 'Engineering product solutions.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.', bgcolor: 'orange' },
	];

	//Logic for prev and next arrows, View details section
	const [currentIndex, setCurrentIndex] = useState(0);

	const jobsToShow = 3; // Number of jobs to display at once
	const currentJobs = jobs.slice(currentIndex, currentIndex + jobsToShow);

	const handleNext = () => {
		if (currentIndex + jobsToShow < jobs.length) {
			setCurrentIndex(currentIndex + jobsToShow);
		}
	};

	const handlePrev = () => {
		if (currentIndex - jobsToShow >= 0) {
			setCurrentIndex(currentIndex - jobsToShow);
		}
	};

	// Show limited description in the job card
	const truncateText = (text, limit = 10) => {
		const words = text.split(' ');
		if (words.length > limit) {
			return words.slice(0, limit).join(' ') + '...';
		}
		return text;
	};

	//View all jobs using router
	const router = useRouter();
	const redirectToAllJobs = () => {
	    router.push('/job-listings');
	};

	const redirectToJobDetails = (job) => {
	    router.push(`/job-listings?jobId=${job.id}`);
	};
	return (
		<section className="latest-jobs">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2 className="text-center">Latest Jobs</h2>
						<div className="text-start job-cards row gx-3">
							{currentJobs.map((job) => (
								<div key={job.id} className="col-md-4 col-sm-6 col-12">
									<div className={`text-start job-card bg-${job.bgcolor}`}>
										<span className="badge">{job.language}</span>
										<h3>{job.title}</h3>
										<p>
											<i className="bi bi-geo-alt"></i>
											{job.location}
										</p>
										<p>
											<i className="bi bi-cash"></i>
											{job.salary}
										</p>
										<p>{truncateText(job.description, 5)}</p>
										<button className="btn btn-white" onClick={() => redirectToJobDetails(job)}>
											View this job
										</button>
										<p></p>
										<p>Posted on {job.date}</p>
									</div>
								</div>
							))}
						</div>
						<div className="d-flex justify-content-between align-items-center mt-4">
							<div className="navigation-arrows">
								<button className="btn btn-light shadow-sm me-2" onClick={handlePrev} disabled={currentIndex === 0}>
									<i className="fas fa-chevron-left"></i>
								</button>
								<button className="btn btn-light shadow-sm" onClick={handleNext} disabled={currentIndex + jobsToShow >= jobs.length}>
									<i className="fas fa-chevron-right"></i>
								</button>
							</div>
							<a className="fw-bold view-more" onClick={redirectToAllJobs}>
								View more jobs
							</a>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
}
