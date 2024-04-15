

import React from "react";
import Dash from "@/components/Dash";
import Image from "next/image";
import Link from "next/link";
const Featured = () => {
    return (
        <div className="container pt-40">
        <h2 className="text-6xl font-bold">Our</h2>
        <h2 className="text-6xl font-bold pt-2">
            Featured <span className="text-accent">Recipes</span>
        </h2>

            <p className="max-w-[550px] pt-10 text-gray-700">
                You can find most delicious recipes in this site.You can save recipes which you have liked.
                If you want to cook best dishes, look at this popular recipes.
            </p>

            <Dash/>

            <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
                <div className="w-fit mx-auto self-end">
                    <Image className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                           src="/baklava.jpeg"
                           width={300}
                           height={600}
                           alt="baklava"
                    />
                    <div className="space-y-4">
                        <Dash/>
                        <h2 className="font-medium text-xl">Baklava</h2>
                        <p className="text-gray-700 text-[14px] xl:text-[16px]">
                            Baklava is made with layers of flaky phyllo pastry and
                            walnuts covered in honey syrup. You will love this suprisingly easy to make dessert!
                        </p>
                        <button className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">
                            <Link href="http://localhost:3000/recipes">
                                View More
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="w-fit mx-auto ">
                    <Image className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                           src="/sarma.jpeg"
                           width={500}
                           height={900}
                           alt="baklava"
                    />
                    <div className="space-y-4">
                        <Dash/>
                        <h2 className="font-medium text-xl">Sarma(Turkish Dolma)</h2>
                        <p className="text-gray-700 text-[14px] xl:text-[16px]">
                            Grape leaves stuffed with a spicy vegetarian rice filling.
                            These are best when cooled and with extra lemon juice.
                        </p>
                        <button className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">
                            <Link href="http://localhost:3000/recipes">
                                View More
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="w-fit mx-auto self-end">
                    <Image className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl"
                           src="/manti.jpeg"
                           width={300}
                           height={600}
                           alt="baklava"
                    />
                    <div className="space-y-4">
                        <Dash/>
                        <h2 className="font-medium text-xl">Turkish Manti (Traditional Dumplings) </h2>
                        <p className="text-gray-700 text-[14px] xl:text-[16px]">
                            Homemade Manti (Traditional Dumplings) make a delicious, comforting and filling meal.
                            Homemade dough is stuffed with mushroom meat stuffing, cooked and served with a garlic-tomato sauce,
                            yogurt sauce and spicy butter sauce. If you are not familiar with Manti,
                            they are similar to a meat ravioli or tortellini.
                        </p>
                        <button className="bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]">
                            <Link href="http://localhost:3000/recipes">
                                View More
                            </Link>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Featured


