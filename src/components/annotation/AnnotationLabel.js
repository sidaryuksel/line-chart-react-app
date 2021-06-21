import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

const AnnotationLabel = (props) => {
	const { x, y, stroke, value, index, annotations } = props;

	const annotation = annotations.find((val) => val.data.index === index && val.data[val.data.dataKey] === value);

	if (!annotation) return null;

	const onIconDelete = (annotationDel) => {
		const newAnnotations = annotations.filter(
			(item) => item.note.label !== annotationDel.note.label || item.note.title !== annotationDel.note.title
		);

		props.onIconClick(newAnnotations);
	};
	return (
		<g>
			<rect
				width={120}
				height={30}
				x={x - 60} //Should be x - Annotation width / 2
				y={y - 20} // Should be x - Annotation height
				dy={-4}
				fill={'#fd3'}
				fontSize={10}
				stroke= {stroke}
				strokeWidth={1.2}
				textAnchor="middle"
			/>

			<text x={x - 43} y={y - 1} fill={stroke}>
				{annotation.note.label}
			</text>
			<RiDeleteBin5Line
				x={x - 60}
				y={y - 15}
				onClick={() => onIconDelete(annotation)}
				value={annotation}
				style={{ color: stroke, cursor: 'pointer' }}
			/>
		</g>
	);
};

export default AnnotationLabel;
