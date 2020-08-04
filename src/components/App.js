import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
	//Call back function from search bar component
	onSearchSubmit = (searchBarTerm) => {
		console.log(searchBarTerm);
	};

	render() {
		return (
			<div className='ui container' style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
