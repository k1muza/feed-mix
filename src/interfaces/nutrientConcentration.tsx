export interface NutrientConcentration {
    id: number;
    value: number;
    description: string;
    nutrient: {
        id: number;
        name: string;
        description: string;
        unit: string;
    }
} 