import { Feed } from "../interfaces/feed";
import { NutrientConcentration } from "../interfaces/nutrientConcentration";

export function calculateFeedNutrients(feed: Feed): NutrientConcentration[] {
    const totalRatio = feed.ingredientRatios.reduce((a, c) => a + c.ratio, 0)

    const nutrients: any = {}
    feed.ingredientRatios.forEach(ingredientRatio => {
        ingredientRatio.ingredient?.nutrients.forEach((nutrient) => {
            nutrients[nutrient.id.toString()] = nutrient
        })
    })
    return nutrients
}

/**
 * maize = [..., protein:20]
 * soya = [..., protein:50]
 * 
 * 1:1 = 35
 * 1:2 = 20 + 50(2) = 120 / 3 = 40
 * 2:1 = 20(2) + 50 = 90 / 3 = 30
 * 
 */