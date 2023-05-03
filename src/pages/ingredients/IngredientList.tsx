import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getIngredients } from '../../api';
import { Ingredient } from '../../interfaces/ingredient';

function IngredientList(props: any) {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    const navClasses = clsx(
        "flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
    )

    useEffect(() => {
        getIngredients()
            .then(data => {
                setIngredients(data)
            });
    }, []);

    return (
        <>
            <div className="flex flex-col w-80 border-r border-gray-300">
                <button className="relative text-sm focus:outline-none group">
                    <div className="flex items-center w-full h-16 px-8 border-b border-gray-300 hover:bg-gray-300">
                        <i className="fa fa-wheat-awn mr-4"></i>
                        <span className="font-bold">Ingredients</span>
                    </div>
                </button>
                <div className="flex flex-col flex-grow p-4 overflow-auto">
                    {ingredients.map((ingredient) => (
                        <NavLink
                            to={`/ingredients/${ingredient.id}`}
                            key={ingredient.id}
                            className={({ isActive, isPending }) =>
                                clsx(navClasses, {
                                    pending: isPending,
                                    'bg-gray-300': isActive,
                                })
                            }
                        >
                            <p className='px-4'>{ingredient.name}</p>
                        </NavLink>
                    ))}
                    <a className="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300" href="#">
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="ml-2 leading-none">New Item</span>
                    </a>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default IngredientList;
