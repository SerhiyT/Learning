import React, { PureComponent } from 'react'
import Article from '../Article'
import './style.css'

export default class ArticleList extends PureComponent {
  state = {
    openArticleid: null
  }
  render() {
    const articleElements = this.props.articles.map((article, index) =>
      <li key={article.id} className="article-list__li">
        <Article article={article}
          isOpen={this.state.openArticleid === article.id}
          onButtonClick={this.handleClick.bind(this, article.id)} />
      </li>
    )
    return (
      <ul>
        {articleElements}
      </ul>
    )
  }

  handleClick = openArticleid => this.setState({ 
    openArticleid: this.state.openArticleid === openArticleid ? null : openArticleid})
}


