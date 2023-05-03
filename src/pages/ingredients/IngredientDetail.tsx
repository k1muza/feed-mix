import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { getDefaultIngredient, getIngredient } from "../../api";
import IngredientGraph from "../../components/graphs/IngredientGraph";
import { Ingredient } from "../../interfaces/ingredient";
import { NutrientConcentration } from "../../interfaces/nutrientConcentration";

const IngredientDetail: React.FC = () => {
    const { id } = useParams();
    const [ingredient, setIngredient] = useState<Ingredient>();
    const [values, setValues] = useState<number[]>([])
    const [labels, setLabels] = useState<string[]>([])

    useEffect(() => {
        const promise: Promise<Ingredient> = id ? getIngredient(parseInt(id)) : getDefaultIngredient();
        
        promise
            .then(ingredient => {
                setIngredient(ingredient)
                const nutrients = ingredient.nutrients.filter((nutrient: NutrientConcentration) => {
                    return nutrient.value && nutrient.nutrient.unit === '%' && nutrient.nutrient.name.toLowerCase() !== 'dry matter'
                })
                const newValues: number[] = []
                const newLabels: string[] = []
                nutrients.forEach((n: NutrientConcentration) => {
                    newLabels.push(n.nutrient.name)
                    newValues.push(n.value)
                })
                setValues(newValues)
                setLabels(newLabels)
            });
    }, [id]);

    return (
        <div className="flex flex-col flex-grow">
            <div className="flex items-center justify-between flex-shrink-0 h-16 px-8 border-b border-gray-300">
                <h4 className="font-bold">{ingredient?.name}</h4>
                <div className="flex">
                    <button className="flex items-center justify-center h-10 px-4 ml-auto text-sm font-medium rounded hover:bg-gray-300">
                        Save
                    </button>
                    <button className="relative ml-2 text-sm focus:outline-none group">
                        <div className="flex items-center justify-between w-10 h-10 rounded hover:bg-gray-300">
                            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </div>
                        <div className="absolute right-0 flex-col items-start hidden w-40 pb-1 bg-white border border-gray-300 shadow-lg group-focus:flex">
                            <NavLink
                                to={`/feeds/${ingredient?.id}/delete`}
                                className="w-full px-4 py-2 text-left hover:bg-gray-300"
                            >
                                Delete Ingredient
                            </NavLink>
                        </div>
                    </button>
                </div>
            </div>
            {labels?.length && values?.length && <IngredientGraph labels={labels} values={values} />}
        </div>
    );
};

export default IngredientDetail;
