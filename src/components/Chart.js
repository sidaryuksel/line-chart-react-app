import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, LabelList, ResponsiveContainer } from 'recharts';
import AnnotationAxisTick from './annotation/AnnotationAxisTick';
import AnnotationLabel from './annotation/AnnotationLabel';
import lineChartReport from './report/lineChartReport';
import ModalPage from './ModalPage';

const Chart = () => {
	const [ clicked, setClicked ] = useState(false);
	const [ selecetedOne, setSelectedOne ] = useState({});
	const [ annotations, setAnnotations ] = useState([]);

	const onHandleClick = (payload) => {
		setSelectedOne(payload);
		setClicked(!clicked);
	};

	return (
		<div className="margin-top">
			<ResponsiveContainer width="100%" aspect={4}>
				<LineChart
					width={700}
					height={350}
					data={lineChartReport}
					margin={{
						top: 30,
						right: 30,
						left: 20,
						bottom: 5
					}}
				>
					<CartesianGrid vertical={false} />
					<XAxis dataKey="name" height={60} tick={<AnnotationAxisTick />} />
					<YAxis />
					<Tooltip
						contentStyle={{ fontSize: 11, borderRadius: '0.7rem', lineHeight: 0.6, letterSpacing: '0.5px', backgroundColor: "#000" }}
						labelStyle={{ color: 'lightgreen', textAlign: 'center' }}
					/>
					<Line
						dot={false}
						type="monotone"
						dataKey="dataset1"
						stroke="#82ca9d"
						strokeWidth={3}
						activeDot={{ r: 5, onClick: (event, payload) => onHandleClick(payload) }}
					>
						<LabelList
							content={
								<AnnotationLabel
                  stroke="#82ca9d"
									dataKey="dataset1"
									annotations={annotations}
									selecetedOne={selecetedOne}
								/>
							}
						/>
					</Line>
					<Line
						dot={false}
						type="monotone"
						dataKey="dataset2"
						stroke="#8884d8"
						strokeWidth={3}
						activeDot={{ r: 5, onClick: (event, payload) => onHandleClick(payload) }}
					>
						<LabelList
							content={
								<AnnotationLabel
                stroke="#8884d8"
                dataKey="dataset2"
									annotations={annotations}
									selecetedOne={selecetedOne}
								/>
							}
						/>
					</Line>
				</LineChart>
			</ResponsiveContainer>
			{clicked ? (
				<ModalPage
					selecetedOne={selecetedOne}
					clicked={clicked}
					onTextSubmit={(annotation) => setAnnotations([...annotations, annotation])}
				/>
			) : null}
		</div>
	);
};

export default Chart;
