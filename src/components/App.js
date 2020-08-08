import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
	state = {
		images: [],
	};

	//Call back function from search bar component sent in as props
	onSearchSubmit = (searchBarTerm) => {
		unsplash
			.get("/search/photos", {
				params: { query: searchBarTerm },
			})
			.then((response) => {
				this.setState({ images: response.data.results });
			});
	};

	render() {
		return (
			<div className='ui container' style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
