import Image from 'next/image';
import Navbar from "@/components/Navbar";

async function getData(id: number) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {
    const { id } = params;

    let data;
    try {
        data = await getData(Number(id));
    } catch (error) {
        console.error(error);
        return (
            <main className="bg-gray-100 min-h-screen">
                <Navbar />
                <div className="container mx-auto py-8">
                    <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">Error loading data</h1>
                </div>
            </main>
        );
    }

    if (!data || !data.meals || data.meals.length === 0) {
        return (
            <main className="bg-gray-100 min-h-screen">
                <Navbar />
                <div className="container mx-auto py-8">
                    <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">Meal not found</h1>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-black">
            <Navbar />
            <div className="container mx-auto py-8">
                <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">{data.meals[0].strMeal}</h1>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    {/* Image Section */}
                    <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src={data.meals[0].strMealThumb}
                            layout="responsive"
                            width={500}
                            height={500}
                            objectFit="cover"
                            alt="Meal Image"
                            className="rounded-lg"
                        />
                        <div className="bg-white mt-8 rounded-lg p-8 shadow-lg">
                            <h2 className="text-xl text-accent font-semibold mb-4">Ingredients:</h2>
                            <ul className="list-disc pl-6">
                                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                                    const ingredient = data.meals[0][`strIngredient${index}`];
                                    const measurement = data.meals[0][`strMeasure${index}`];

                                    if (ingredient && measurement) {
                                        return (
                                            <li key={index} className="mb-2">
                                                <span className="font-semibold">{ingredient}:</span> {measurement}
                                            </li>
                                        );
                                    }

                                    return null;
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-orange-400 rounded-lg p-8 shadow-lg">
                            <h2 className="text-xl font-semibold mb-4">Directions:</h2>
                            <ol className="list-decimal pl-6">
                                {data.meals[0].strInstructions.split('\r\n').map((step: any, index: any) => (
                                    <li key={index} className="mb-2">{step}</li>
                                ))}
                            </ol>
                        </div>

                        {data.meals[0].strYoutube && (
                            <div className="mt-8 bg-gray-400 rounded-lg p-8 shadow-lg">
                                <h2 className="text-xl font-semibold mb-4">YouTube Video:</h2>
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        src={data.meals[0].strYoutube.replace('watch?v=', 'embed/')}
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
