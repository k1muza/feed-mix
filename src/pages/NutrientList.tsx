import React, { useEffect, useState } from 'react';

import { getNutrients } from '../api';
import NutrientGraph from '../components/graphs/NutrientGraph';
import { NavLink, Outlet } from 'react-router-dom';
import clsx from 'clsx';

interface Nutrient {
    id: number;
    name: string;
    image_url: string;
}

function NutrientsTable() {
    const [nutrients, setNutrients] = useState<Nutrient[]>([]);

    const navClasses = clsx(
        'flex items-center flex-shrink-0 h-10 px-4 text-sm font-medium rounded hover:bg-gray-300',
    )

    useEffect(() => {
        getNutrients()
            .then(response => {
                setNutrients(response.data)
            });
    }, []);

    return (
        <>
            <div className="flex flex-col w-80 border-r border-gray-300">
                <button className="relative text-sm focus:outline-none">
                    <div className="flex items-center w-full h-16 px-8 border-b border-gray-300 hover:bg-gray-300">
                        <i className="fa fa-bolt mr-4"></i>
                        <span className="font-bold">Nutrients</span>
                    </div>
                </button>
                <div className="flex flex-col flex-grow p-4 overflow-auto">
                    {nutrients.map((nutrient) => (
                        <NavLink
                            to={`/nutrients/${nutrient.id}`}
                            key={nutrient.id}
                            className={({ isActive, isPending }) =>
                                clsx(navClasses, {
                                    pending: isPending,
                                    'bg-gray-300': isActive,
                                })}>
                            <p className='px-4'>{nutrient.name}</p>
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

export default NutrientsTable;
