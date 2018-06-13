import React, {Component} from 'react';
import Comments from './Comments';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        return (
            <div>
                <h2>{article.title}</h2>
                {this.getText()}
                <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
            </div>
        )
    }

    getText() {
        const {article, isOpen} = this.props;
        if (!isOpen) {
            return null;
        } else {
            return <div>
                <p className="text">{article.text}</p>
                <Comments comments={article.comments}/>
            </div>
        }
    }

}

export default Article