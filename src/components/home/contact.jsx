import React from 'react';
import { Form, Input, Button } from 'antd';
const { TextArea } = Input;
const Contact = () => {
	return (
		<div id="contact" className="block contactBlock">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>Get in Touchs</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
						minus?
					</p>
				</div>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
				>
					<Form.Item
						name="username"
						rules={[{ required: true, message: 'Please input your Username!' }]}
					>
						<Input placeholder="Username" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Please input your Password!' }]}
					>
						<Input type="password" placeholder="Password" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Please input your Password!' }]}
					>
						<Input type="password" placeholder="Password" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Please input your Password!' }]}
					>
						<Input type="password" placeholder="Password" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: 'Please input your Password!' }]}
					>
						<TextArea rows={4} />
					</Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
						>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Contact;
