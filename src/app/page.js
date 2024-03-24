import { TfiArrowCircleLeft } from "react-icons/tfi";
import { FaCircleUser } from "react-icons/fa6";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { BiDollarCircle, BiSolidDollarCircle, BiSolidMessageDetail } from "react-icons/bi";
import { VscBlank } from "react-icons/vsc";

export default function Home() {
  return (
    <div>
      <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content relative">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button absolute top-[500px]"><TfiArrowCircleLeft /></label>
  </div> 
  <div className="drawer-side">
  
    <label htmlFor="my-drawer" aria-label="close sidebar" className=""></label>
    
    <ul className="menu p-4 w-80 min-h-full bg-[#2E5A88] text-white text-lg">
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
      <li><a><BiSolidMessageDetail /> Disscussion Forum</a></li>
      <li><a><BiSolidDollarCircle/>Market Stories</a></li>
      <li><a><VscBlank /> Sentiment</a></li>
      <li><a><VscBlank /> Market</a></li>
      <li><a><VscBlank /> Sector</a></li>
      <li><a><VscBlank /> Watchlist</a></li>
      <li><a><VscBlank /> Events</a></li>
      <li><a><VscBlank /> News/Interview</a></li>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content relative">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-ghost drawer-button absolute"><TfiArrowCircleLeft /></label>
  </div> 
    </ul>
    
  </div>
</div>
    </div>
  );
}
