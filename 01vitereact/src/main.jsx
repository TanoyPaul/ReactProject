import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const element = (
  <a href='https://google.com' target='_blank'>Google</a>
)

// Create own library and jsx : Strict structure

const reactElement = React.createElement(
  'a',
  {
    href: 'https://fb.com',
    target: '_blank'
  },
  'Facebook'
)



ReactDOM.createRoot(document.getElementById('root')).render(
 
   
   reactElement

)
