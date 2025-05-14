import img1 from "../assets/home/avira-hero-image 1.png";
import img2 from "../assets/home/avira-hero-image 2.png";
import img3 from "../assets/home/avira-hero-image 3.png";
import img4 from "../assets/home/avira-hero-image 4.png";
import { FaArrowRight } from "react-icons/fa";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className=" h-[calc(100vh-68px)]  grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-4 overflow-hidden pt-16">
      <Link to="/shop"
        style={{ backgroundImage: `url(${img1})` }}
        className="rounded-lg row-span-2 bg-cover bg-[center_70%] p-6"
          >
              <p className="text-[var(--primary-color)] font-bold">Brands Everyone is Crushing on</p>
              <h3 className="text-2xl flex justify-start items-center gap-6 font-bold pt-4">Explore All <FaArrowRight /></h3>
      </Link>

      <Link to="/shop"
        style={{ backgroundImage: `url(${img2})` }}
        className="rounded-lg col-span-2 bg-cover bg-bottom shadow-[0_0_10px_#999] p-6 "
          >
              <p className="text-[var(--primary-color)] font-bold">458 Items</p>
              <h3 className="text-2xl flex justify-start items-center gap-6 font-bold pt-4">Foot Wear <FaArrowRight /></h3>
      </Link>

      <Link to="/shop"
        style={{ backgroundImage: `url(${img3})` }}
        className="rounded-lg bg-cover bg-center p-6 "
          >
              <p className="text-[var(--primary-color)] font-bold">680 Items</p>
              <h3 className="text-2xl flex justify-start items-center gap-6 font-bold pt-4">Sweaters<FaArrowRight /></h3>
      </Link>

      <Link to="/shop"
        style={{ backgroundImage: `url(${img4})` }}
        className="rounded-lg bg-cover bg-center p-6"
          >
              <p className="text-[var(--primary-color)] font-bold">341 Items</p>
              <h3 className="text-2xl flex justify-start items-center gap-6 font-bold pt-4">Denims<FaArrowRight /></h3>
      </Link>
    </div>
  );
};

export default Home;
