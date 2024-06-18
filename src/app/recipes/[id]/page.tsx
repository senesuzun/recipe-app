import Image from 'next/image';
import Navbar from "@/components/Navbar";
import { id } from "postcss-selector-parser";

async function getData(id: number) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

type Props = {
    params: number
}
export default async function Page({ params }: Props) {
    // const { id }  = params;

    // Fetch data
    const { id } = params;
    const data = await getData(id);

    return (
        <main className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-black">
            <Navbar />
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-10">{data?.meals[0]?.strMeal}</h1>
                <div className="flex flex-col md:flex-row gap-12 items-start justify-center">
                    {/* Image Section */}
                    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
                        <Image
                            src={data?.meals[0]?.strMealThumb}
                            layout="responsive"
                            width={700} // Increased width
                            height={700} // Increased height to maintain aspect ratio
                            objectFit="cover"
                            alt="Meal Image"
                            className="rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        />
                        <div className="bg-white p-8 rounded-xl shadow-lg mt-8">
                            <h2 className="text-2xl text-teal-600 font-bold mb-4">Ingredients</h2>
                            <ul className="list-disc space-y-2 pl-5 text-gray-700">
                                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                                    const ingredient = data?.meals[0][`strIngredient${index}`];
                                    const measurement = data?.meals[0][`strMeasure${index}`];
                                    if (ingredient && measurement) {
                                        return (
                                            <li key={index} className="font-medium">
                                                {ingredient}: <span className="font-normal">{measurement}</span>
                                            </li>
                                        );
                                    }
                                    return null;
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div className="w-full md:w-1/3 lg:w-1/2">
                        <div className="bg-orange-400 p-8 rounded-xl shadow-lg mb-8">
                            <h2 className="text-2xl font-bold mb-4">Directions</h2>
                            <ol className="list-decimal space-y-2 pl-5 text-gray-700">
                                {data?.meals[0]?.strInstructions.split('\r\n').map((step, index) => (
                                    <li key={index} className="font-medium">{step}</li>
                                ))}
                            </ol>
                        </div>

                        {data?.meals[0]?.strYoutube && (
                            <div className="bg-white rounded-xl shadow-lg p-8">
                                <h2 className="text-2xl font-bold text-blue-600 mb-4">Watch Video</h2>
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        src={data?.meals[0]?.strYoutube.replace('watch?v=', 'embed/')}
                                        title="YouTube Video"
                                        frameBorder="0"
                                        allowFullScreen
                                        className="rounded-lg"
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
