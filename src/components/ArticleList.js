import React, {Component} from 'react'
import Article from './Article'


export default class ArticleList extends Component {
    state = {
        openArticleId: null
    };

    render() {
        const articleElemets = this.props.article.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen = {article.id === this.state.openArticleId}
                toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
            />
        </li>);

        return (
            <ul className="container">
                {articleElemets}
            </ul>
        )
    }

    toggleOpenArticle(openArticleId) {
        this.setState({openArticleId});
        console.log(openArticleId);
    }
}
