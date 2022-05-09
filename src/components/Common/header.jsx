import React, { useState } from 'react';
import { Anchor } from 'antd';
import { Drawer, Button } from 'antd';
const { Link } = Anchor;
const Header = () => {
	const [visible, setVisible] = useState(false);
	const showDrawer = () => {
		setVisible(true);
	};
	const onClose = () => {
		setVisible(false);
	};
	return (
		<div className="container-fluid">
			<div className="header">
				<a href="/" className="logo">
					<i className="fas fa-bolt"></i>
					<span>TECH</span>
				</a>
				<div className="mobileHidden">
					<Anchor targetOffset="65">
						<Link href="#hero" title="Home" />
						<Link href="#about" title="About" />
						<Link href="#features" title="Features" />
						<Link href="#works" title="How it works" />
						<Link href="#faq" title="FAQ" />
						<Link href="#pricing" title="Pricing" />
						<Link href="#contact" title="Contact" />
					</Anchor>
				</div>
				<div className="mobileVisible">
					<Button type="primary" onClick={showDrawer}>
						<i className="fas fa-bars"></i>
					</Button>
					<Drawer placement="right" onClose={onClose} visible={visible}>
						<Anchor targetOffset="65">
							<Link href="#hero" title="Home" />
							<Link href="#about" title="About" />
							<Link href="#features" title="Features" />
							<Link href="#works" title="How it works" />
							<Link href="#faq" title="FAQ" />
							<Link href="#pricing" title="Pricing" />
							<Link href="#contact" title="Contact" />
						</Anchor>
					</Drawer>
				</div>
			</div>
		</div>
	);
};

export default Header;
