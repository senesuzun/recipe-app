

import React from "react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="container pt-6 ">
            <div className="flex justify-between items-center">
                <Image src="/logo6.svg" width={50} height={50} alt="logo"/>
                <ul className="md:flex hidden gap-8 items-center font-semibold text-[14px]">
                    <li><Link href="http://localhost:3000">
                        Home
                    </Link></li>
                    <li> <Link href="http://localhost:3000/recipes">
                        Recipes
                    </Link></li>
                    <li><Link href="http://localhost:3000/category">
                        Categories
                    </Link></li>
                    <li><Link href="http://localhost:3000/profile">
                        Profile
                    </Link></li>

                    <button className="bg-accent text-white px-6 py-2 rounded-3xl "><Link href="http://localhost:3000/signup">
                        SignUp
                    </Link></button>
                </ul>
                <AiOutlineMenu className="md:hidden text-accent" size={30} />

            </div>
        </div>
    )
}

export default Navbar

