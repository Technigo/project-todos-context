import axios from "axios";

// Esta función obtiene una receta aleatoria
export const fetchRecipes = async () => {
    try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        return response.data.meals;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
};

// Esta función obtiene los detalles de una receta por ID
export const fetchRecipeById = async (id) => {
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        return response.data.meals[0];
    } catch (error) {
        console.error("Error fetching recipe by ID:", error);
        return null;
    }
};
