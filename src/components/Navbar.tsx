import React from "react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="container pt-6">
            <div className="flex justify-between items-center">
                <Image src="/logo6.svg" width={50} height={50} alt="logo"/>
                <ul className="md:flex hidden gap-8 items-center font-semibold text-[14px] hover:text-gray-200">
                    <li className="hover:scale-110 transition-transform duration-200 ease-in-out">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="hover:scale-110 transition-transform duration-200 ease-in-out">
                        <Link href="/recipes">Recipes</Link>
                    </li>
                    <li className="hover:scale-110 transition-transform duration-200 ease-in-out">
                        <Link href="/category">Categories</Link>
                    </li>
                    <li className="hover:scale-110 transition-transform duration-200 ease-in-out">
                        <Link href="/videos">Videos</Link>
                    </li>
                </ul>
                <AiOutlineMenu className="md:hidden text-accent cursor-pointer" size={30} />
            </div>
        </div>
    )
}

export default Navbar;
