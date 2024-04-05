

import React from "react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="container pt-6">
            <div className="flex justify-between items-center">
                <Image src="/logo6.svg" width={50} height={50} alt="logo"/>
                <ul className="md:flex hidden gap-8 items-center font-semibold text-[14px]">
                    <li>Home</li>
                    <li>About</li>
                    <li>Recipes</li>
                    <li>Categories</li>
                    <li>Profile</li>

                    <button className="bg-accent text-white px-6 py-2 rounded-3xl ">SignUp</button>
                </ul>
                <AiOutlineMenu className="md:hidden text-accent" size={30} />

            </div>
        </div>
    )
}

export default Navbar

