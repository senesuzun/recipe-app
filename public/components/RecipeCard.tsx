

import React from "react";
import Link from "next/link";
import Image from "next/image";
const RecipeCard = ({recipe}:any) => {
    return (
        <Link href={`/recipes/${recipe.idMeal}`}>
            <div className="max-w-sm rounded-lg overflow-hidden border border-gray-300 shadow-md hover:shadow-lg
           hover:bg-orange-500 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-64 object-cover" />
                <div className="p-4">
                    <h1 className="text-gray-800 font-semibold text-xl mb-2">{recipe.strMeal}</h1>
                    <p className="text-gray-600">{recipe.strCategory}</p>
                </div>
            </div>
        </Link>
    );
};
export default RecipeCard


