/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const Navbar = () => {

    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

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

    const links =
        <>
            <li className="group flex  cursor-pointer flex-col">
                <Link>Home</Link><span className="mt-[2px] h-[4px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
                <Link>Recipes</Link><span className="mt-[2px] h-[4px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
                <Link>Blog</Link><span className="mt-[2px] h-[4px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
                <Link>Contact</Link><span className="mt-[2px] h-[4px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
                <Link>About us</Link><span className="mt-[2px] h-[4px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
        </>


    return (
        <div className="border-2">
            <nav className="max-w-7xl lg:mx-auto mx-2 flex items-center justify-between py-4">
                <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold  transition-all duration-200 hover:scale-110">
                    <Link to={"/"} className="lobster text-2xl font-normal">Foodieland.</Link>
                </div>

                <ul className="hidden items-center justify-between gap-10 md:flex font-semibold">
                    {
                        links
                    }
                </ul>

                <div className="lg:block hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="134" height="22" viewBox="0 0 134 22" fill="none">
                        <path d="M8.11163 4.29509H9.92331V1.13974C9.61075 1.09674 8.53581 1 7.28393 1C4.67183 1 2.88248 2.643 2.88248 5.66274V8.44186H0V11.9693H2.88248V20.845H6.41654V11.9701H9.18243L9.6215 8.44269H6.41571V6.01251C6.41654 4.99297 6.69106 4.29509 8.11163 4.29509Z" fill="black" />
                        <path d="M71.9617 4.11613C71.1435 4.475 70.2718 4.71288 69.3629 4.82838C70.2979 4.27013 71.0115 3.39287 71.347 2.3355C70.4753 2.85525 69.5128 3.22238 68.487 3.42725C67.6593 2.54588 66.4795 2 65.1925 2C62.6955 2 60.6853 4.02675 60.6853 6.51137C60.6853 6.86888 60.7155 7.21263 60.7898 7.53988C57.0402 7.357 53.7223 5.55988 51.4934 2.82225C51.1043 3.49738 50.876 4.27012 50.876 5.102C50.876 6.664 51.6804 8.04862 52.8794 8.85025C52.1548 8.8365 51.4439 8.62613 50.8417 8.29475C50.8417 8.3085 50.8417 8.32638 50.8417 8.34425C50.8417 10.536 52.405 12.3565 54.4552 12.7759C54.088 12.8763 53.6879 12.9244 53.2727 12.9244C52.9839 12.9244 52.6924 12.9079 52.4188 12.8474C53.0032 14.6335 54.6614 15.9466 56.6332 15.9893C55.0987 17.1896 53.1503 17.9129 51.041 17.9129C50.6712 17.9129 50.3164 17.8964 49.9617 17.851C51.9595 19.1394 54.3273 19.875 56.8807 19.875C65.1802 19.875 69.7177 13 69.7177 7.04075C69.7177 6.84137 69.7108 6.64887 69.7012 6.45775C70.5963 5.8225 71.3484 5.02913 71.9617 4.11613Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M118.837 0H127.087C130.883 0 133.962 3.07862 133.962 6.875V15.125C133.962 18.9214 130.883 22 127.087 22H118.837C115.04 22 111.962 18.9214 111.962 15.125V6.875C111.962 3.07862 115.04 0 118.837 0ZM127.087 19.9375C129.74 19.9375 131.899 17.7787 131.899 15.125V6.875C131.899 4.22125 129.74 2.0625 127.087 2.0625H118.837C116.183 2.0625 114.024 4.22125 114.024 6.875V15.125C114.024 17.7787 116.183 19.9375 118.837 19.9375H127.087Z" fill="black" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M117.462 11C117.462 7.96263 119.924 5.5 122.962 5.5C125.999 5.5 128.462 7.96263 128.462 11C128.462 14.0374 125.999 16.5 122.962 16.5C119.924 16.5 117.462 14.0374 117.462 11ZM119.524 11C119.524 12.8948 121.067 14.4375 122.962 14.4375C124.856 14.4375 126.399 12.8948 126.399 11C126.399 9.10388 124.856 7.5625 122.962 7.5625C121.067 7.5625 119.524 9.10388 119.524 11Z" fill="black" />
                        <circle cx="128.874" cy="5.08761" r="0.732875" fill="black" />
                    </svg>
                </div>

                <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                    {dropDownState && (
                        <ul className=" font-medium z-10  gap-2  bg-[#393E46]  absolute right-0 top-16 flex w-[200px] flex-col  rounded-lg   text-base ">
                            <li className="cursor-pointer text-white  px-6 py-2  rounded-t-lg hover:bg-sky-600 ">
                                <Link>Home</Link>
                            </li>
                            <li className="cursor-pointer text-white px-6 py-2  hover:bg-sky-600 ">
                                <Link>Recipes</Link>
                            </li>
                            <li className="cursor-pointer text-white px-6 py-2  hover:bg-sky-600 ">
                                <Link>Blog</Link>
                            </li>
                            <li className="cursor-pointer text-white px-6 py-2  hover:bg-sky-600 ">
                                <Link>Contact</Link>
                            </li>
                            <li className="cursor-pointer text-white px-6 py-2  hover:bg-sky-600 ">
                                <Link>About us</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;