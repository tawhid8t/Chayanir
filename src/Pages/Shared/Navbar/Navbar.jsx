// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../assets/logo/Chanir Logo copy.svg'

const Navbar = () => {

    // const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    // useEffect(() => {
    //     localStorage.setItem("theme", theme);
    //     const localTheme = localStorage.getItem("theme");
    //     document.querySelector("html").setAttribute("data-theme", localTheme);
    // }, [theme]);

    // const handleToggle = (e) => {
    //     if (e.target.checked) {
    //         setTheme("dark")
    //     } else {
    //         setTheme("light")
    //     }
    // }

    const links = <div className="font-semibold text-base flex flex-col lg:flex-row gap-4 items-center">
        <li><NavLink className={({ isActive, isPending }) =>
            isActive
                ? "border-b-2 border-[#63D5D7] text-[#63D5D7]"
                : isPending
                    ? "pending"
                    : ""
        } to="/">হোম</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isActive
                ? "border-b-2 border-[#63D5D7] text-[#63D5D7]"
                : isPending
                    ? "pending"
                    : ""
        } to="/about_us">আমাদের সম্পর্কে</NavLink></li>
        <li><NavLink className={({ isActive, isPending }) =>
            isActive
                ? "border-b-2 border-[#63D5D7] text-[#63D5D7]"
                : isPending
                    ? "pending"
                    : ""
        } to="/contact_us">যোগাযোগ</NavLink></li>
    </div>


    return (
        <div className='max-w-screen-xl mx-auto px-4'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="flex justify-between items-center">
                        <img className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" src={logo}/>
                        <a className="btn btn-ghost text-base md:text-xl bold-text">ছায়ানীড় ছাত্রী হোস্টেল</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end flex gap-4 items-center">
                    <a className="btn">ভর্তি</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;