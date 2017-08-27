import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots, SparklinesNormalBand } from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	return(
		<div className="chart">
			<Sparklines height={120} width={180} data={ props.data }>
				<SparklinesLine color={ props.color } />
				<SparklinesNormalBand />
				<SparklinesReferenceLine type="avg" />
				<SparklinesSpots />
			</Sparklines>
			<div>Average: { average(props.data) } { props.units }</div>
		</div>
	);
};