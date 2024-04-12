import React, { useState } from "react";

const SearchCategory = ({ setName, setRecipes }) => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setName(category);
        searchRecipes(category); // Kategoriye tıklandığında otomatik olarak arama yap
    };

    const searchRecipes = async (category) => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            if (!res.ok) {
                throw new Error('Something went wrong');
            }
            const result = await res.json();
            console.log(result);
            setRecipes(result?.meals);
        } catch (err) {
            console.log(err);
        }
    };

    const categories = [
        "Chicken", "Beef", "Seafood", "Vegan", "Dessert", "Pasta", "Vegetarian"
    ];

    return (
        <div className="flex items-center justify-center mt-20 mb-4">
            {categories.map((category, index) => (
                <div
                    key={index}
                    onClick={() => handleCategoryChange(category)}
                    className={`cursor-pointer p-4 rounded-md ${selectedCategory === category ? "bg-accent text-white" : "bg-gray-200 text-gray-700 hover:bg-amber-300"} mx-2`}
                >
                    {category}
                </div>
            ))}
        </div>
    );
};

export default SearchCategory;
