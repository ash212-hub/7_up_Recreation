import {  NavLink } from "react-router-dom"

 

function Header() {
  return (
    <div>
      <ul className="flex items-center justify-center gap-4 ">
        <li><NavLink to="/">HOme</NavLink></li>
        <li><NavLink to="/product"> Product</NavLink></li>
        <li><NavLink to="/recipe">Recipe</NavLink></li>
        <li><NavLink to="/store">Store</NavLink></li>
      </ul>
    </div>
  )
}

export default Header
