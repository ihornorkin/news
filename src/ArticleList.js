import React from 'react'
import Article from './Article'

export default function ArticleList({article}) {
	const articleElemets = article.map((article) => <li key={article.id}><Article article = {article} ></Article></li>);

	return (
		<ul className="container">
			{articleElemets}
		</ul>
		)
}
