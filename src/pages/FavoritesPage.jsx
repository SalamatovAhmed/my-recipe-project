import React, { useState, useEffect } from "react";
import { SimpleGrid, Container, Text, Heading, Box } from "@chakra-ui/react";
import RecipeCard from "../components/RecipeCard";

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  // Функция для загрузки данных
  const loadFavorites = () => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  };

  useEffect(() => {
    loadFavorites();
    // Слушаем изменения в других вкладках (на всякий случай)
    window.addEventListener("storage", loadFavorites);
    return () => window.removeEventListener("storage", loadFavorites);
  }, []);

  const removeFromFavorites = (id) => {
    const updated = favorites.filter(fav => fav.idMeal !== id);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);
  };

  if (favorites.length === 0) {
    return (
      <Container maxW="container.xl" py={20} textAlign="center">
        <Text fontSize="2xl" color="gray.400" fontFamily="'Georgia', serif">
          Ваша кулинарная книга пока пуста...
        </Text>
      </Container>
    );
  }

  return (
    <Box bg="#FCFBF9" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <Heading mb={10} textAlign="center" fontFamily="'Georgia', serif" color="teal.800">
          Избранные шедевры
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={8}>
          {favorites.map((recipe) => (
            <RecipeCard 
              key={recipe.idMeal} 
              recipe={recipe} 
              // Передаем функцию удаления вместо добавления
              onAddFavorite={() => removeFromFavorites(recipe.idMeal)} 
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default FavoritesPage;