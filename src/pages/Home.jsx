import React, { useState, useEffect } from "react";
import axios from "axios";
import { SimpleGrid, Container, Box } from "@chakra-ui/react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then(res => setRecipes(res.data.meals || []));
  }, []);

  // --- ВОТ ТВОЯ ФУНКЦИЯ ---
  const addToFavorites = (recipe) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isExist = favorites.some((fav) => fav.idMeal === recipe.idMeal);

    if (!isExist) {
      const updated = [...favorites, recipe];
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  };
  // ------------------------

  return (
    <Box bg="#FCFBF9" minH="100vh"> {/* "Богатый" фоновый цвет */}
      <SearchBar setRecipes={setRecipes} />
      
      <Container maxW="container.xl" py={8}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
          {recipes.map((recipe) => (
            <RecipeCard 
              key={recipe.idMeal} 
              recipe={recipe} 
              onAddFavorite={addToFavorites} // Передаем функцию в карточку
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Home;