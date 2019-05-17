import React from 'react'
import articles from '../fixtures'
import ArticleList from './ArticleList'

function App() {
  return (
    <div>
      <ArticleList articles = {articles} />
    </div>
  )
}

export default App