import logo from "../assets/Logo.png"
import { FaUser } from "react-icons/fa"
export const Navbar = () => {
  return (
      <div className="flex">
      <div className="image-container"><img src={logo} alt="" /></div>
      <nav>
        <li>Home</li>
        <li>Shop</li>
        <li>Blogs</li>
        <li>About </li>
        <li>Contact</li>
      </nav>
      <div className="user">
        <p><FaUser /> Login/Register</p>
      </div>
    </div>
  )
}

