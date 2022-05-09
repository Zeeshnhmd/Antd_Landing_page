import React, { useState, useRef } from 'react';
import { Modal, Button, Form, Input, Divider, Menu, Dropdown } from 'antd';
import ScrollToTop from 'react-scroll-to-top';
import ScrollToBottom from 'react-scroll-to-bottom';
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
// const ROOT_CSS = css({
// 	height: 600,
// 	width: 400,
// });
const menu = (
	<Menu>
		<Menu.Item key="0">
			<a href="https://www.antgroup.com">1st menu item</a>
		</Menu.Item>
		<Menu.Item key="1">
			<a href="https://www.aliyun.com">2nd menu item</a>
		</Menu.Item>
		<Menu.Divider />
		<Menu.Item key="3">3rd menu item</Menu.Item>
	</Menu>
);

const CHA = () => {
	const [visible, setVisible] = useState(false);
	// const [show, setShow] = useState(true);
	const myRef = useRef(null);
	const executeScroll = () => scrollToRef(myRef);
	// const toggleShow = () => {
	// 	const scrolled = document.documnetElement.scrollTop;
	// 	if (scrolled > 0) {
	// 		setShow(false);
	// 	} else if (scrolled <= 0) {
	// 		setShow(true);
	// 	}
	// };
	// const scrollToButtom = () => {
	// 	window.scrollTo({
	// 		top: document.documentElement.scrollHeight,
	// 		behavior: 'auto',
	// 	});
	// };
	// window.addEventListener('scroll', toggleShow);
	return (
		<div>
			<Dropdown overlay={menu} trigger={['click']}>
				<a
					href="/"
					className="ant-dropdown-link"
					onClick={(e) => e.preventDefault()}
				>
					Click me
				</a>
			</Dropdown>
			<ScrollToTop smooth />
			<Button type="primary" onClick={() => setVisible(true)}>
				Open Modal of 1000px width
			</Button>
			<Modal
				className="signup-modal"
				centered
				visible={visible}
				onOk={() => setVisible(false)}
				onCancel={() => setVisible(false)}
				footer={null}
				ref={myRef}
			>
				{' '}
				<button onClick={executeScroll}> Click to scroll </button>
				<ScrollToBottom>
					<h1>Terms & Conditions</h1>
					<Divider />
					<div>
						<h1>1. Clause 1</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque
							quibusdam corporis ad sapiente ea ratione assumenda distinctio
							accusamus eos quos, aliquid tempora, in ipsum omnis, nobis
							veritatis aspernatur numquam?
						</p>
					</div>
					<div>
						<h1>1. Clause 1</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque
							quibusdam corporis ad sapiente ea ratione assumenda distinctio
							accusamus eos quos, aliquid tempora, in ipsum omnis, nobis
							veritatis aspernatur numquam?
						</p>
					</div>
					<div>
						<h1>1. Clause 1</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque
							quibusdam corporis ad sapiente ea ratione assumenda distinctio
							accusamus eos quos, aliquid tempora, in ipsum omnis, nobis
							veritatis aspernatur numquam?
						</p>
					</div>
					<div>
						<h1>1. Clause 1</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque
							quibusdam corporis ad sapiente ea ratione assumenda distinctio
							accusamus eos quos, aliquid tempora, in ipsum omnis, nobis
							veritatis aspernatur numquam?
						</p>
					</div>
					<div>
						<h1>1. Clause 1</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque
							quibusdam corporis ad sapiente ea ratione assumenda distinctio
							accusamus eos quos, aliquid tempora, in ipsum omnis, nobis
							veritatis aspernatur numquam?
						</p>
					</div>
					<div>
						<h1>1. Clause 1</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque
							quibusdam corporis ad sapiente ea ratione assumenda distinctio
							accusamus eos quos, aliquid tempora, in ipsum omnis, nobis
							veritatis aspernatur numquam?
						</p>
					</div>
					<div>
						<h1>1. Clause 1</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque
							quibusdam corporis ad sapiente ea ratione assumenda distinctio
							accusamus eos quos, aliquid tempora, in ipsum omnis, nobis
							veritatis aspernatur numquam?
						</p>
					</div>
					<div>
						<h1>1. Clause 1</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque
							quibusdam corporis ad sapiente ea ratione assumenda distinctio
							accusamus eos quos, aliquid tempora, in ipsum omnis, nobis
							veritatis aspernatur numquam?
						</p>
					</div>
					<div>
						<h1>1. Clause 1</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque
							quibusdam corporis ad sapiente ea ratione assumenda distinctio
							accusamus eos quos, aliquid tempora, in ipsum omnis, nobis
							veritatis aspernatur numquam?
						</p>
					</div>
				</ScrollToBottom>
			</Modal>
		</div>
	);
};

export default CHA;
