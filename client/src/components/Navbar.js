import React, { useState } from "react";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { BsBellFill, BsGear, BsGrid } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/slices/userSlices'

function Navbar() {
    const dispatch = useDispatch()

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    return (
        <div className="w-[100%] flex items-center justify-between py-[16px] px-[20px] bg-darkColor shadow-lg">
            <span>
            {/* <i className="text-darkColor text-[24px] cursor-pointer flex items-center justify-center none">
                <FiMenu />
            </i> */}
            <Link to='/previous' className="text-white text-lg cursor-pointer flex items-center justify-center">
                Quotations
            </Link>
            </span>
            <div className="flex items-center">
                <button className="relative p-0 h-auto mr-[1.5em] text-primaryColor flex items-center justify-center bg-transparent hover:bg-transparent text-[20px]">
                    <BsBellFill />
                    <span className="absolute top-[-2px] right-[-2px] w-[10px] h-[10px] rounded-full bg-[#e03b24] border-2 border-white  "></span>
                </button>
                <div className="relative w-[35px] h-[35px] bg-[#dbdbdb] rounded-full cursor-pointer">
                    <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                        alt=""
                        onClick={() => {
                            setIsDropDownOpen(!isDropDownOpen);
                        }}
                        className="w-full h-full object-cover rounded-full"
                    />
                    {isDropDownOpen && (
                        <div className="absolute bg-darkColor right-0 top-[50px] rounded w-[200px] z-10 shadow-sm">
                            <ul>
                                <li>
                                    <Link
                                        to="/admin"
                                        className="flex items-center gap-[12px] text-sm px-4 py-[12px] transition-all text-[#9e9e9e] hover:text-[#fff]"
                                    >
                                        <BsGrid />
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/login"
                                        className="flex items-center gap-[12px] text-sm px-4 py-[12px] transition-all text-[#9e9e9e] hover:text-[#fff]"
                                    >
                                        <BsGear />
                                        <span>Login</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            dispatch(logoutUser());
                                            setIsDropDownOpen(!isDropDownOpen);
                                        }}
                                        className="flex items-center gap-[12px] text-sm px-4 py-[12px] transition-all text-[#9e9e9e] hover:text-[#fff]"
                                    >
                                        <FiLogOut />
                                        <span>Logout</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;