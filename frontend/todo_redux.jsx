import React from 'react'
import ReactDOM from 'react-dom'
import './styles/app.scss'
import configureStore from './store/store'
import Root from './components/root'

const store = configureStore()
window.store = store

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('root'))
})