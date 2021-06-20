import React from 'react';

const AnnotationLabel = (props) => {
	const { x, y, stroke, value, index, annotations } = props;

	console.log('annotations', annotations);

	const annotation = annotations.find((val) => val.data.index === index && val.data[val.data.dataKey] === value);
	
  
  if(!annotation) return null;
	const label = annotation.note.label;
  console.log('annotation', annotation)

	return (
		<g>
			<rect
				width={120}
				height={20}
				x={x - 60} //Should be x - Annotation width / 2
				y={y - 30} // Should be x - Annotation height
				dy={-4}
				fill={'#fd3'}
				fontSize={10}
				textAnchor="middle"
			/>
			<text x={x - 12} y={y - 15} fill={stroke}>
				{label}
			</text>
		</g>
	);
};

export default AnnotationLabel;
