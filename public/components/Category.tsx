

import React from "react";
import Dash from "@/components/Dash";
import CategoryCard from "@/components/CategoryCard";

const categoryData = [
    {
        img:"/category1.svg",
        title: "Meat",
        desc: "Perfect type of baked meat"
    },
    {
        img:"/category2.svg",
        title: "Chicken",
        desc: "Delicious differen sort of chicken dishes"
    },
    {
        img:"/category3.svg",
        title: "Vegan",
        desc: "Sure there is vegan foods, lots of vegetables"
    },
    {
        img:"/category4.svg",
        title: "Seafood",
        desc: "Most tasty seafoods you can find"
    },
    {
        img:"/category5.svg",
        title: "Dessert",
        desc: "Do you want to eat dessert than look here"
    }
];





const Category = () => {
    return (
        <div className="container pt-40">
            <div className="space-y-4 w-fit mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold">
                    Choose your <span className="text-accent">Category</span>
                </h2>

                <p className="text-gray-700">
                    There are lots of type of foods. <br/>
                    Which one do you eat?
                </p>
                <div className="w-fit mx-auto">
                    <Dash/>
                </div>
            </div>

            <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
                {categoryData.map((item,index) =>(
                    <CategoryCard key={index}
                                  img={item.img}
                                  title={item.title}
                                  desc={item.desc}
                    />
                ))}
            </div>





        </div>
    )
}

export default Category


