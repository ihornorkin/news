import React, {Component} from 'react';
import toggleOpen from '../decorators/toggleOpen';

class Comments extends Component {
	render() {
		const {comments, isOpen, toggleOpen} = this.props;

		return (
			<div>
				<button onClick={toggleOpen}>{isOpen ? 'Hide comments' : 'Show comments'}</button>
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

}

export default toggleOpen(Comments);