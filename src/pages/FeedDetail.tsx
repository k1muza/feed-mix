import React, { useEffect, useState } from 'react';
import { getIngredients } from '../api';
import FeedGraph from '../components/graphs/FeedGraph';

type IngredientNutrient = {
    id: number;
    value: number;
    nutrient: {
        id: number,
        name: string,
        unit: string,
    };
}

interface Ingredient {
    id: number;
    name: string;
    nutrients: IngredientNutrient[];
}

function FeedDetail() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);
    const animals = [
        {
            id: 1,
            name: 'Hyline Brown - 8 weeks',
        },
        {
            id: 2,
            name: 'Large White - 32 weeks',
        },
        {
            id: 3,
            name: 'Duroc - 16 weeks',
        }
    ]
    const [animal, setAnimal] = useState(animals[0]);

    useEffect(() => {
        getIngredients()
            .then(response => {
                setIngredients(response.data)
            });
    }, []);

    return (
        <>
            <div className="flex flex-col w-80 border-r border-gray-300">
                <button className="relative text-sm focus:outline-none">
                    <div className="flex items-center w-full h-16 px-6 border-b border-gray-300 hover:bg-gray-300">
                        <i className="fa fa-sack-xmark mr-4"></i>
                        <span className="font-bold">Edit Feed</span>
                    </div>
                </button>
                <div className="flex flex-col flex-grow p-4 overflow-auto">
                    {ingredients.map((ingredient) => (
                        <div className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
                            key={ingredient.id}>
                            <input type="checkbox" className='mr-4' name={ingredient.id.toString()} id={ingredient.id.toString()} />
                            <label htmlFor={ingredient.id.toString()} className="leading-none">{ingredient.name}</label>
                        </div>
                    ))}
                    <a className="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300" href="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="ml-2 leading-none">New Item</span>
                    </a>
                </div>
            </div>
            <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between flex-shrink-0 h-16 px-8 border-b border-gray-300">
                    <form action="">
                        <input className='w-64' type="text" placeholder='Unnamed Feed' />
                    </form>
                    <button className="relative w-64 text-sm focus:outline-none group">
                        <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-gray-300">
                            <span className="font-bold">{animal.name}</span>
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex">
                            {animals.map(ani => (
                                <a
                                    className="w-full px-4 py-2 text-left hover:bg-gray-300"
                                    key={ani.id}
                                    onClick={() => setAnimal(ani)}>
                                    {ani.name}
                                </a>
                            ))}
                        </div>
                    </button>
                    <div className="flex">
                        <button className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-300">
                            Save
                        </button>
                        <button className="flex items-center justify-center h-10 px-4 ml-2 text-sm font-medium bg-red-200 rounded hover:bg-gray-300">
                            Delete
                        </button>
                        <button className="relative ml-2 text-sm focus:outline-none group">
                            <div className="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-300">
                                <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </div>
                            <div className="absolute right-0 flex-col items-start hidden w-40 pb-1 bg-white border border-gray-300 shadow-lg group-focus:flex">
                                <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                                <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                                <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
                            </div>
                        </button>
                    </div>
                </div>
                <FeedGraph />
            </div>
        </>
    );
}

export default FeedDetail;
