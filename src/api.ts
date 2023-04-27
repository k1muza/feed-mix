import axios from "axios";

const API_URL = "http://localhost:3000";

export function getNutrients() {
    return axios.get(`${API_URL}/api/nutrients.json`);
}

export async function getNutrient(id: number) {
    const res = await axios.get(`${API_URL}/api/nutrients.json`);
    return res.data.find((nutrient: any) => nutrient.id === id);
}

export function getIngredients() {
    return axios.get(`${API_URL}/api/ingredients.json`);
}

export async function getIngredient(id: number) {
    const res = await axios.get(`${API_URL}/api/ingredients.json`);
    return res.data.find((ingredient: any) => ingredient.id === id);
}

export function getAnimals() {
    return axios.get(`${API_URL}/api/animals.json`);
}

export async function getAnimal(id: number) {
    const res = await axios.get(`${API_URL}/api/animals.json`);
    return res.data.find((animal: any) => animal.id === id);
}

export function getFeeds() {
    return axios.get(`${API_URL}/api/feeds.json`);
}

export async function getFeed(id: number) {
    const res = await axios.get(`${API_URL}/api/feeds.json`);
    return res.data.find((feed: any) => feed.id === id);
}
