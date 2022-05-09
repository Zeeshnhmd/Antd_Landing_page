import { Col, Row } from 'antd';
import React from 'react';
import { Card } from 'antd';
import Image1 from '../../assets/images/advanced-option.jpg';
import Image2 from '../../assets/images/bg-works.jpg';
import Image3 from '../../assets/images/clean-design.jpg';
import Image4 from '../../assets/images/easy-customise.jpg';
import Image5 from '../../assets/images/great-support.jpg';
import Image6 from '../../assets/images/modern-design.jpg';

const { Meta } = Card;
const datas = [
	{
		render: <img src={Image1} alt="moderndesign"></img>,
		title: 'Modern Design',
	},
	{
		image: <img src={Image2} alt="moderndesign"></img>,
		title: 'Modern Design',
	},
	{
		image: <img src={Image3} alt="moderndesign"></img>,
		title: 'Modern Design',
	},
	{
		image: <img src={Image4} alt="moderndesign"></img>,
		title: 'Modern Design',
	},
	{
		image: <img src={Image5} alt="moderndesign"></img>,
		title: 'Modern Design',
	},
	{
		image: <img src={Image6} alt="moderndesign"></img>,
		title: 'Modern Design',
	},
];
const Features = () => {
	return (
		<div id="features" className="block featureBlock bgGray">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>Features</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
						minus?
					</p>
				</div>
				<Row gutter={[16, 16]}>
					{datas.map((data) => {
						return (
							<Col
								xs={{ span: 24 }}
								sm={{ span: 12 }}
								md={{ span: 8 }}
								key={data.key}
							>
								<Card hoverable cover={<img alt="example" src={Image1} />}>
									<Meta title={data.title} />
								</Card>
							</Col>
						);
					})}
				</Row>
			</div>
		</div>
	);
};

export default Features;
