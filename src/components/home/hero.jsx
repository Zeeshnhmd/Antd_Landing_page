import React from 'react';
import { Button, Carousel } from 'antd';
const Hero = () => {
	const items = [
		{
			key: '1',
			title: 'Web and mobile app developer',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi praesentium, quos itaque esse debitis odit architecto dolorem eveniet recusandae sapiente, error minima hic repudiandae assumenda, sit impedit ipsa dolor. Libero.',
		},
		{
			key: '2',
			title: 'Web and mobile app developer',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi praesentium, quos itaque esse debitis odit architecto dolorem eveniet recusandae sapiente, error minima hic repudiandae assumenda, sit impedit ipsa dolor. Libero.',
		},
		{
			key: '3',
			title: 'Web and mobile app developer',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi praesentium, quos itaque esse debitis odit architecto dolorem eveniet recusandae sapiente, error minima hic repudiandae assumenda, sit impedit ipsa dolor. Libero.',
		},
	];
	return (
		<div id="hero" className="heroBlock">
			<Carousel autoplay effect="scrollx">
				{items.map((item) => {
					return (
						<div className="container-fluid" key={item.key}>
							<div className="content">
								<h3>{item.title}</h3>
								<p>{item.content}</p>
								<div className="btnHolder">
									<Button type="primary">Learn More</Button>
									<Button size="large">
										<i className="fas fa-television"></i>Watch a Demo
									</Button>
								</div>
							</div>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
};

export default Hero;
