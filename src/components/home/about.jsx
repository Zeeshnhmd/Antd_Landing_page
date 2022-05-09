import React from 'react';
import { Col, Row } from 'antd';

const items = [
	{
		key: '1',
		icon: <i className="fa fa-pie-chart"></i>,
		title: 'High Performance',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos officiis quo ut voluptate doloribus?',
	},
	{
		key: '2',
		icon: <i className="fa fa-pie-chart"></i>,
		title: 'High Performance',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos officiis quo ut voluptate doloribus?',
	},
	{
		key: '3',
		icon: <i className="fa fa-pie-chart"></i>,
		title: 'High Performance',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dignissimos officiis quo ut voluptate doloribus?',
	},
];
const About = () => {
	return (
		<div id="about" className="block aboutBlock">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>About us</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
						minus?
					</p>
				</div>
				<div className="contentHolder">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore
						impedit, officia repudiandae error, ducimus totam numquam autem
						consequatur ut explicabo ipsa nulla sapiente, nam dolore blanditiis
						accusamus perferendis modi.
					</p>
				</div>
				<Row gutter={[16, 16]}>
					{items.map((item) => {
						return (
							<Col md={{ span: 8 }} key={item.key}>
								<div className="content">
									<div className="icon">{item.icon}</div>
									<h3>{item.title}</h3>
									<p> {item.content}</p>
								</div>
							</Col>
						);
					})}
				</Row>
			</div>
		</div>
	);
};

export default About;
