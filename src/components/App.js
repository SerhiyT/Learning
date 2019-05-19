import React, {Component} from 'react'
import articles from '../fixtures'
import ArticleList from './ArticleList'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  state = {
    reverted: false
  }
  render() {
    const style = { width: '55%' }
    return (
      <div className="container">
        <div className="jumbotron" style={style}>
          <h1 className="display-4 text-center">Some articles</h1>
          <button onClick={this.revert} className="btn btn-dark">Revert</button>
        </div>
        <ArticleList articles={this.state.reverted ? articles.reverse() : articles} />
      </div>
    )
  }
  revert = () => this.setState({
    reverted: !this.state.reverted
  })
}
export default App