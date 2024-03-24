import { TfiArrowCircleLeft } from "react-icons/tfi";
import { FaCircleUser } from "react-icons/fa6";
import { IoNotificationsCircleSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button"><TfiArrowCircleLeft /></label>
  </div> 
  <div className="drawer-side">
  
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    
    <ul className="menu p-4 w-80 min-h-full bg-[#2E5A88] text-white">
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center">
      <h1 className="lg:px-1 lg:py-4 text-xl font-bold "><FaCircleUser /></h1>
      <h1 className="lg:px-1 lg:py-4 text-xl font-bold ">Hello, User</h1>
      </div>
      <div className="flex flex-row items-center">
      <h1 className="lg:px-4 lg:py-4 text-2xl font-bold "><IoNotificationsCircleSharp /></h1>
      </div>
    </div>
    <div className="divider divider-accent"></div>
      {/* Sidebar content here */}
      <li><a>Disscussion Forum</a></li>
      <li><a>Market Stories</a></li>
      <li><a>Sentiment</a></li>
      <li><a>Market</a></li>
      <li><a>Sector</a></li>
      <li><a>Watchlist</a></li>
      <li><a>Events</a></li>
      <li><a>News/Interview</a></li>
      
    </ul>
  </div>
</div>
    </div>
  );
}
