import React, {Component} from 'react';

export default class Comments extends Component {

	constructor(props) {
	  super(props);

	  this.state = {
	  	isOpen: false
	  };
	}

	render() {
		const {comments} = this.props;
		const {isOpen} = this.state;

		return (
			<div>
				<button onClick={this.toggleComments}>{isOpen ? 'Hide comments' : 'Show comments'}</button>
				<ul className="comments-list">
					{isOpen ? this.getComments(comments) : null }
				</ul>
			</div>
			)
	}

	getComments(comments) {
		if (comments) {
			const commentList = comments.map((comment) => <li key = {comment.id}>{comment.text}</li>);
			return commentList;
		} else {
			return 'No comments';
		}
	}

	toggleComments = (e) => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

}
