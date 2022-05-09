import React from 'react';
import { Button, Collapse } from 'antd';

const { Panel } = Collapse;

function callback(key) {
	console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const FAQ = () => {
	return (
		<div id="faq" className="block faqBlock">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>Frequently Asked Questions</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. In,
						dolorem?
					</p>
				</div>
				<Collapse defaultActiveKey={['1']} onChange={callback}>
					<Panel header="This is panel header 1" key="1">
						<p>{text}</p>
					</Panel>
					<Panel header="This is panel header 2" key="2">
						<p>{text}</p>
					</Panel>
					<Panel header="This is panel header 3" key="3">
						<p>{text}</p>
					</Panel>
					<Panel header="This is panel header 3" key="3">
						<p>{text}</p>
					</Panel>
					<Panel header="This is panel header 3" key="3">
						<p>{text}</p>
					</Panel>
					<Panel header="This is panel header 3" key="3">
						<p>{text}</p>
					</Panel>
				</Collapse>
				<div className="quickSupport">
					<h3>Want quick support?</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
						excepturi!
					</p>
					<Button type="primary" size="large">
						<i className="fas fa-envelope"></i> Email your Question
					</Button>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
