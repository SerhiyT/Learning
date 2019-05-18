import React from 'react'
import articles from '../fixtures'
import ArticleList from './ArticleList'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">App NAME</h1>
      </div>
      <ArticleList articles = {articles} />
    </div>
  )
}

export default App