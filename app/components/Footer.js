import '../styles/components/Footer.scss';
export default function Footer() {
	return (
		<footer className="footer py-4">
			<div className="container">
				<div className="row">
					<div className="col-md-3 mb-3">
						<h5 className="footer-brand">Software Recruitment Co.</h5>
						<div className="social-icons"> <a href="#" aria-label="LinkedIn">
							<i className="fab fa-linkedin"></i> </a>
							<a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i> </a>
							<a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i> </a>
							<a href="#" aria-label="Twitter"> <i className="fab fa-twitter"></i> </a>
						</div>
					</div>
					<div className="col-md-3 mb-3">
						<h6 className="text-white">Explore</h6>
						<ul className="list-unstyled">
							<li><a href="#">Homepage</a></li>
							<li><a href="#">For jobseekers</a></li>
							<li><a href="#">For clients</a></li>
							<li><a href="#">Our sectors</a></li>
							<li><a href="#">Resources</a></li>
							<li><a href="#">Contact us</a></li>
						</ul>
					</div>
					<div className="col-md-3 mb-3">
						<h6 className="text-white">Sectors</h6>
						<ul className="list-unstyled">
							<li><a href="#">Software engineering</a></li>
							<li><a href="#">DevOps</a></li>
							<li><a href="#">Cloud</a></li>
							<li><a href="#">Infrastructure</a></li>
							<li><a href="#">Testing</a></li>
							<li><a href="#">Security</a></li>
						</ul>
					</div>
					<div className="col-md-3 mb-3">
						<h6 className="text-white">Services</h6>
						<ul className="list-unstyled">
							<li><a href="#">Service 1</a></li>
							<li><a href="#">Service 2</a></li>
							<li><a href="#">Service 3</a></li>
							<li><a href="#">Service 4</a></li>
							<li><a href="#">Service 5</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
