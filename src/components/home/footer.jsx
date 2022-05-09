import React from 'react';
import { BackTop } from 'antd';
const AppFooter = () => {
	return (
		<div className="container-fluid">
			<div className="footer">
				<div className="logo">
					<i className="fas fa-bolt"></i> <a href="/">Tech</a>
				</div>
				<ul className="socials">
					<li>
						<a href="/">
							<i className="fab fa-facebook-f"></i>{' '}
						</a>
					</li>

					<li>
						<a href="/">
							<i className="fab fa-twitter"></i>
						</a>
					</li>

					<li>
						<a href="/">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</li>

					<li>
						<a href="/">
							<i className="fab fa-pinterest-p"></i>
						</a>
					</li>

					<li>
						<a href="/">
							<i className="fab fa-instagram"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="copyright">Copyright &copy; 2020 Tech</div>
			<BackTop>
				<div className="goTop">
					<i className="fas fa-arrow-circle-up"></i>
				</div>
			</BackTop>
		</div>
	);
};

export default AppFooter;
