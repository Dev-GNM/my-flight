import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom'


document.addEventListener('DOMContentLoaded', () => {
ReactDOM.render(
  <Router>
    <Route exact path="/" component={App}/>
  </Router>,
  document.body.appendChild(document.createElement('div')),
)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals