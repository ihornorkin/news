import React, {Component} from 'react';
import Comments from './Comments';
import PropTypes from 'prop-types';

export default class Article extends Component {
	static propTypes = {
	  article: PropTypes.object
	}

	constructor(props) {
		super(props)

		this.state = {
			isOpen: false
		}
	}

	render() {
		const {article} = this.props;
		const {isOpen} = this.state;
		return (
			<div>
				<h2>{article.title}</h2>
				{this.getText()}
				<button onClick = {this.toggleOpen}>{isOpen ? 'close' : 'open'}</button>
			</div>
			)
	}

	getText() {
		if (!this.state.isOpen) {
			return null;
		} else {
			const {article} = this.props;
			return 	<div>
						<p className="text">{article.text}</p>
						<Comments comments = {article.comments} />
					</div>
		}
	}

	toggleOpen = (e) => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

}
