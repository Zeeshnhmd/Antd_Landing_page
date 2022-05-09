import React, { useState } from 'react';
import { Modal, Button } from 'antd';
const Works = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	return (
		<div id="works" className="block worksBlock">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>How it works</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
						praesentium.
					</p>
				</div>
				<div className="contentHolder">
					<Button type="primary" onClick={showModal}>
						<i className="fas fa-play"></i>
					</Button>
				</div>
				<Modal
					title="Crash Course"
					visible={isModalVisible}
					onCancel={handleCancel}
					footer={null}
				>
					<iframe
						title="Crash Course"
						width="100%"
						height="350px"
						src="https://www.youtube.com/watch?v=Vpdm5DCFvqc&ab_channel=TuatTranAnh"
					></iframe>
				</Modal>
			</div>
		</div>
	);
};

export default Works;
