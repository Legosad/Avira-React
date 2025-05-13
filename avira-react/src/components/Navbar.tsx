import logo from "../assets/Logo.png"
import { FaUser, FaHeart } from "react-icons/fa"
import {FaCartShopping} from "react-icons/fa6"
export const Navbar = () => {
  return (
      <div className="flex justify-around items-center py-2 border-b">
      <div className="image-container"><img src={logo} alt="" width={60}/></div>
      <nav className="flex gap-8 justify-center items-center">
        <a>Home</a>
        <a>Shop</a>
        <a>Blogs</a>
        <a>About </a>
        <a>Contact</a>
      </nav>
      <div className="user flex gap-8 text-[#db6b97] text-bold">
        <div className="flex gap-2 justify-center items-center"><FaUser /> Login/Register</div>
        <div className="flex gap-2 justify-center items-center"><FaHeart /> 0 </div>
        <div className="flex gap-2 justify-center items-center"><FaCartShopping /> 0 </div>
      </div>
    </div>
  )
}

