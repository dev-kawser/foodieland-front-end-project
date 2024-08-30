
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();
    const location = useLocation();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    const links = (
        <>
            <li className="group flex cursor-pointer flex-col">
                <Link
                    to="/"
                    className={location.pathname === "/" ? "text-sky-500" : ""}
                >
                    Home
                </Link>
                <span className="mt-[2px] h-[4px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex cursor-pointer flex-col">
                <Link
                    to="/recipes"
                    className={location.pathname === "/recipes" ? "text-sky-500" : ""}
                >
                    Recipes
                </Link>
                <span className="mt-[2px] h-[4px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex cursor-pointer flex-col">
                <Link
                    to="/blog"
                    className={location.pathname === "/blog" ? "text-sky-500" : ""}
                >
                    Blog
                </Link>
                <span className="mt-[2px] h-[4px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex cursor-pointer flex-col">
                <Link
                    to="/contact"
                    className={location.pathname === "/contact" ? "text-sky-500" : ""}
                >
                    Contact
                </Link>
                <span className="mt-[2px] h-[4px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex cursor-pointer flex-col">
                <Link
                    to="/about"
                    className={location.pathname === "/about" ? "text-sky-500" : ""}
                >
                    About us
                </Link>
                <span className="mt-[2px] h-[4px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
        </>
    );

    return (
        <div className="shadow sticky top-0 z-50 backdrop-blur-md">
            <nav className="max-w-7xl lg:mx-auto mx-2 flex items-center justify-between lg:py-4 py-2">
                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
                    <Link to="/" className="lobster text-2xl font-normal">Foodieland<span className="text-[#FF7426]">.</span></Link>
                </div>

                <ul className="hidden text-black items-center justify-between gap-10 md:flex font-semibold">
                    {links}
                </ul>

                <div className="lg:block hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="134" height="22" viewBox="0 0 134 22" fill="none">
                        {/* SVG paths here */}
                    </svg>
                </div>

                <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                    {dropDownState && (
                        <ul
                            data-aos="fade-left"
                            data-aos-delay="50"
                            data-aos-duration="700"
                            className="font-medium z-10 gap-2 bg-[#a8e0ec] absolute right-0 top-14 lg:top-16 flex w-[200px] flex-col rounded-lg text-base"
                        >
                            <li className="cursor-pointer text-black px-6 py-2 rounded-t-lg hover:bg-sky-600">
                                <Link to="/" className={location.pathname === "/" ? "text-sky-500" : ""}>Home</Link>
                            </li>
                            <li className="cursor-pointer text-black px-6 py-2 hover:bg-sky-600">
                                <Link to="/recipes" className={location.pathname === "/recipes" ? "text-sky-500" : ""}>Recipes</Link>
                            </li>
                            <li className="cursor-pointer text-black px-6 py-2 hover:bg-sky-600">
                                <Link to="/blog" className={location.pathname === "/blog" ? "text-sky-500" : ""}>Blog</Link>
                            </li>
                            <li className="cursor-pointer text-black px-6 py-2 hover:bg-sky-600">
                                <Link to="/contact" className={location.pathname === "/contact" ? "text-sky-500" : ""}>Contact</Link>
                            </li>
                            <li className="cursor-pointer text-black px-6 py-2 hover:bg-sky-600">
                                <Link to="/about" className={location.pathname === "/about" ? "text-sky-500" : ""}>About us</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
