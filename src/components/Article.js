import React, { Component } from 'react'

class Article extends Component {

  state = {
    isOpen: true
  }

  render() {
    const { article } = this.props
    const body = this.state.isOpen && <section className="card-text">{article.text}</section>
    const style = { width: '50%' }
    return (
      <div className="card" style={style}>
        <div className="card-header">
          <h2>
            {article.title}
            <button onClick={this.handleClick} className="btn btn-primary float-right">
              {this.state.isOpen ? 'Close' : 'Open'}
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
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article