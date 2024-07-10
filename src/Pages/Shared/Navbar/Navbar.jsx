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
                        <img className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" src={logo} />
                        <a className="w-52 ml-4 md:w-72 font-bold text-base md:text-xl bold-text">ছায়ানীড় ছাত্রী হোস্টেল</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end flex gap-4 items-center">
                    <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>ভর্তি</button>
                </div>
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-3xl text-center">ভর্তির নির্দেশনাবলী</h3>
                    <li className="py-3">সীট বুকিং-এর সময় ভর্তি ফী অফেরতযোগ্য এবং ১ মাসের সীট ভাড়া জামানত হিসেবে দিতে হবে।</li>
                    <li className="py-3">তাৎক্ষণিক সমপরিমান টাকা না থাকলে সাত দিনের মধ্যে বিকাশ অথবা হোস্টেলের নির্ধারিত ব্যাংকে জমা দিতে হবে।</li>
                    <li className="py-3">হোস্টেলের সীট ছাড়তে চাইলে ২ মাস আগে (৬০ দিন) হোস্টেলের নির্ধারিত ফরমে বা লিখিতভাবে আবেদন জমা দিতে হবে।</li>
                    <h3>ভর্তির জন্য নিচে দেওয়া যেকোনো নাম্বারে ফোন করুন অথবা আমাদের ফেসবুক পেজে মেসেজ দিন</h3>
                    <div className="flex justify-between mt-4 flex-col md:flex-row gap-4">
                        <div>
                            <h1 className="font-bold">শাখা-১</h1>
                            <h3>01776371617</h3>
                        </div>
                        <div>
                            <h1 className="font-bold">শাখা-2</h1>
                            <h3>01705630680</h3>
                        </div>
                        <div>
                            <h1 className="font-bold">শাখা-3</h1>
                            <h3>01739731711</h3>
                        </div>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Navbar;