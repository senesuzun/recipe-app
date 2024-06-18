import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
const Hero = () => {
    return (
        <div className="relative min-h-screen">
            <Image className="lg:w-[580px] xl:w-[620px] h-auto absolute right-0 to-0 -z-10"
                   src="/main.PNG"
            width={1000}
            height={600}
            alt="hero bg"/>
            <Navbar/>

            <div className="container h-[calc(100vh-120px)] grid items-center">
                <div className="space-y-4 bg-[#ffffff98] w-fit p-4">
                    <p className="uppercase font-medium">
                        Wide options of choice
                    </p>
                    <h2 className="text-4xl sm:text-6xl font-bold">
                        Best <span className="text-accent">Recipes</span>
                    </h2>
                    <p className="text-gray-700 text-[14px] sm:text-[16px]">
                        Delicious food, aroma, taste and recipes. <br/>
                        What are you waiting for?
                    </p>

                    <button className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">
                        <Link href="http://localhost:3000/recipes">
                           View More
                        </Link>
                    </button>

                </div>
            </div>



        </div>
    )
}

export default Hero
