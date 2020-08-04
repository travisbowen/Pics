import React from "react";

class SearchBar extends React.Component {
	// Input search bar term
	state = {
		searchTerm: null,
	};

	// Input in search bar function
	onInputChange(event) {
		this.setState({
			searchTerm: event.target.value,
		});
	}

	// Prevent form from reloading when hitting enter
	onFormSubmit = (event) => {
		event.preventDefault();
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
