import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './stores'

import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather.list';

class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<div>
					<div className="container">
						<SearchBar />
					</div>
					<div className="container">
						<WeatherList />
					</div>
				</div>
			</Provider>
    );
  }
}

export default App;
