import logo from "/images/Logo.png"
import { FaUser, FaHeart } from "react-icons/fa"
import { FaCartShopping } from "react-icons/fa6"
import {Link} from "react-router-dom"
export const Navbar = () => {
  return (
      <div className="flex justify-around items-center py-2 border-b">
      <div className="image-container"><img src={logo} alt="" width={60}/></div>
      <nav className="flex gap-8 justify-center items-center">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About </Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="user flex gap-8 text-[var(--primary-color)] text-bold">
        <div className="flex gap-2 justify-center items-center"><FaUser /> Login/Register</div>
        <div className="flex gap-2 justify-center items-center"><FaHeart /> 0 </div>
        <div className="flex gap-2 justify-center items-center"><FaCartShopping /> 0 </div>
      </div>
    </div>
  )
}

