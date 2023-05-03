import axios from "axios";

const API_URL = "http://localhost:3000/api";

function fetch(path: string): Promise<any> {
    return axios.get(API_URL+path)
}

export async function getNutrients() {
    const res = await fetch('/nutrients.json');
    return res.data
}

export async function getNutrient(id: number) {
    const res = await fetch('/nutrients.json');
    return res.data.find((nutrient: any) => nutrient.id === id);
}

export async function getDefaultNutrient() {
    const res = await fetch('/nutrients.json');
    return res.data[1]
}

export async function getIngredients() {
    const res = await fetch('/ingredients.json');
    return res.data
}

export async function getIngredient(id: number) {
    const res = await fetch('/ingredients.json');
    return res.data.find((ingredient: any) => ingredient.id === id);
}

export async function getDefaultIngredient() {
    const res = await fetch('/ingredients.json');
    return res.data[0]
}

export async function getAnimals() {
    const res = await fetch('/animals.json');
    return res.data
}

export async function getAnimal(id: number) {
    const res = await fetch('/animals.json');
    return res.data.find((animal: any) => animal.id === id);
}

export async function getDefaultAnimal() {
    const res = await fetch('/animals.json');
    return res.data[0]
}

export async function getFeeds() {
    const res = await fetch('/feeds.json');
    return res.data
}

export async function getFeed(id: number) {
    const res = await await fetch('/feeds.json');
    return res.data.find((feed: any) => feed.id === id);
}

export async function getDefaultFeed() {
    const res = await await fetch('/feeds.json');
    return res.data[0]
}
