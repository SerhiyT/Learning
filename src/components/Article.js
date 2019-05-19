import React, { Component, PureComponent } from 'react'

class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }
  render() {
    const { article, isOpen, onButtonClick } = this.props
    const body = isOpen && <section className="card-text">{article.text}</section>
    const style = { width: '50%' }
    return (
      <div className="card" style={style}>
        <div className="card-header">
          <h2>
            {article.title}
            <button onClick={onButtonClick} className="btn btn-dark float-right">
              {isOpen ? 'Close' : 'Open'}
            </button>
          </h2>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle text-muted">
            Creation date: {(new Date(article.date)).toDateString()}
          </h6>
          {body}
        </div>
      </div>
    )
  }
}


export default Article