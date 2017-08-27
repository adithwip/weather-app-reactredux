// import React, { Component } from 'react';
import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>

export default (props) => {
	
	const defaultProps = {
		center: {
			lat: props.lat,
			lng: props.lon
		},
		zoom: 12
	};

		return(
			<GoogleMapReact
				defaultCenter = { defaultProps.center }
				defaultZoom = { defaultProps.zoom }
			>
				<AnyReactComponent 
					lat={ props.lat }
					lng={ props.lon }
					text={ props.text }
				/>
			</GoogleMapReact>
		);
}


// NOTE:
// Lumayan susah juga ini pake library2 dengan dokumentasi ampas, untung pada akhirnya masih bisa. Malah jadi lebih bagus ketimbang code yang manual (di bawah). Allhamdulillah!!!

// =======================
// Old code:
// Manual code, didn't used 'react-google-maps' ..or 'google-map-react'

// class GoogleMap extends Component {
// 	componentDidMount() {
// 		new window.google.maps.Map(this.refs.map, {
// 			zoom: 12,
// 			center: {
// 				lat: this.props.lat,
// 				lng: this.props.lon
// 			}
// 		})
// 	}

// 	render() {
// 		return(
// 			<div ref="map" />
// 		)
// 	}
// }

// export default GoogleMap;