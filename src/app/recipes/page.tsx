"use client"
import React,{useState,useEffect} from "react";

import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import RecipeCard from "@/components/RecipeCard";

export default function Recipe(){
    const [recipes,setRescipes] = useState([]);
    const [search,setSearch]= useState('');
    const [name,setName] = useState('Chicken');
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const fetchRecipes = async () =>{
            try {
                const res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
                if(!res.ok){
                    throw new Error('Something went wrong')
                }
                const result = await res.json()
                //console.log(result)
                setRescipes(result?.meals)
            }catch (err){
                console.log(err)
            }
            setLoading(false)
        }
        fetchRecipes()
    }, [name]);

console.log(recipes);
    return(
        <main className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-black">
            <Navbar/>
         <Search setName={setName} setRecipes={setRescipes}/>


            <div className="flex items-center justify-center p-10">
                {
                    loading?(<><h1 className="text-center text-3xl">Loading...</h1></>):(<>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {
                        recipes?.map((recipe:any) =>(
                            <RecipeCard key={recipe?.idMeal} recipe={recipe}/>
                        ))
                    }
                </div>
                    </>)
                }
            </div>




        </main>
    );
}
