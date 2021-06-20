import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const ModalPage = (props) => {
	const [ text, setText ] = useState('');
	const [ clicked, setClicked ] = useState(props.clicked);
	const selectedOne = props.selecetedOne;
	const onTextHandle = (val) => {
		setText(val.target.value);
	};

	const onTextSubmit = (e) => {
		const annotation = {
			note: {
				label: text,
				bgPadding: 20,
				title: selectedOne.payload.name
			},
			data: {
				index: selectedOne.index,
				name: selectedOne.payload.name,
				dataKey: selectedOne.dataKey,
				[selectedOne.dataKey]: selectedOne.value
			},
			className: 'show-bg',
			dy: selectedOne.cy,
			dx: selectedOne.cx
		};
		setClicked(!clicked);
		props.onTextSubmit(annotation);
	};

	return (
		<div style={{ maxWidth: '100%' }}>
			<Modal
				shouldCloseOnOverlayClick={true}
				isOpen={clicked}
				onRequestClose={() => setClicked(!clicked)}
				style={{ overlay: { top: '200px', left: '450px', right: '450px', bottom: '380px' } }}
			>
				<input
					type="text"
					placeholder="Create Annotation"
					value={text}
					onChange={(val) => onTextHandle(val)}
					style={{ marginBottom: '6px' }}
				/>
				<br />
				<button onClick={(e) => onTextSubmit(e)}>Submit</button>
			</Modal>
		</div>
	);
};

export default ModalPage;
