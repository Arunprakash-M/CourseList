import React from 'react'
import './index.css';
const Header = (props) => {
  return (
    <header> 
      <div><h1>{props.title}</h1></div>
    </header>
  )
}
Header.defaultProps = {
  title:"To do list"
}
export default Header