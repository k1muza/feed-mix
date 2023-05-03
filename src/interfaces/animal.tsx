import { NutrientConcentration } from "./nutrientConcentration";


export interface Animal {
    id: number;
    name: string;
    nutrients: NutrientConcentration[];
}