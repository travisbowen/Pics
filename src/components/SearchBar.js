import React from "react";

class SearchBar extends React.Component {
	// Input search bar term
	state = {
		searchTerm: "",
	};

	// Input in search bar function
	onInputChange = (event) => {
		this.setState({
			searchTerm: event.target.value,
		});
	};

	// Submits when user hits enter after inputting term
	onFormSubmit = (event) => {
		// Prevents form from reloading when hitting enter
		event.preventDefault();

		// Calling App function passed in through props with search bar term
		this.props.onSubmit(this.state.searchTerm);
	};

	render() {
		return (
			<div className='ui segment'>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div className='field'>
						<label>Image Search</label>
						<input
							type='text'
							value={this.state.searchTerm}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
