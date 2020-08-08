import React from "react";

class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = { spans: 0 };
		this.imageRef = React.createRef();
	}

	// Adds listener to image when loading
	componentDidMount() {
		this.imageRef.current.addEventListener("load", this.setSpans);
	}

	// Grabs images height and sets it to state
	// Adds state set from here in render method with inline style
	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10 + 1);
		this.setState({ spans: spans });
	};

	render() {
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img
					ref={this.imageRef}
					alt={this.props.image.description}
					src={this.props.image.urls.regular}
				/>
			</div>
		);
	}
}

export default ImageCard;
