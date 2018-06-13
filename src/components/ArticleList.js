import React, {Component} from 'react'
import Article from './Article'
import accordion from '../decorators/accordion';


class ArticleList extends Component {

    render() {
        const {article, openItemId, toggleOpenItem} = this.props;
        const articleElemets = article.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>);

        return (
            <ul className="container">
                {articleElemets}
            </ul>
        )
    }
}

export default accordion(ArticleList);