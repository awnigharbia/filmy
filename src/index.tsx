import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {App} from './components/App'
import {BrowserRouter as Router} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Router basename="/">
      <App />
    </Router>
  </QueryClientProvider>,
  document.getElementById('root'),
)
