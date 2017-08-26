import React, { Component } from 'react';
import SearchBar from './containers/search_bar';
import { Provider } from 'react-redux';
import store from './stores'

class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<div className="App">
					<SearchBar />
				</div>
			</Provider>
    );
  }
}

export default App;
