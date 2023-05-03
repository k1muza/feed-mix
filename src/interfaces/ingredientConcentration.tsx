import { Ingredient } from "./ingredient";

export interface IngredientConcentration{
    ingredientId: number;
    ratio: number;
    ingredient?: Ingredient
}