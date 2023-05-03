import { NutrientConcentration } from "./nutrientConcentration";

export interface Ingredient {
    id: number;
    name: string;
    description: string;
    unit: string;
    nutrients: NutrientConcentration[];
}