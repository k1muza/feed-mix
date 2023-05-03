import { IngredientConcentration } from "./ingredientConcentration";

export interface Feed {
    id: number;
    name: string;
    ingredientRatios: IngredientConcentration[];
}