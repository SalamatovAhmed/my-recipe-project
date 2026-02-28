import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { 
  Box, Container, Image, Heading, Text, Badge, 
  SimpleGrid, VStack, HStack, List, ListItem, Divider 
} from "@chakra-ui/react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Загружаем данные конкретного рецепта по ID
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => setRecipe(res.data.meals[0]));
  }, [id]);

  if (!recipe) return <Text p={10}>Загрузка рецепта...</Text>;

  // Логика сбора ингредиентов из API
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} — ${measure}`);
    }
  }

  return (
    <Container maxW="container.lg" py={10}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {/* Левая колонка: Изображение */}
        <Image 
          borderRadius="3xl" 
          src={recipe.strMealThumb} 
          shadow="2xl" 
          alt={recipe.strMeal}
        />

        {/* Правая колонка: Информация */}
        <VStack align="start" spacing={5}>
          <Heading size="2xl" color="teal.600">{recipe.strMeal}</Heading>
          
          <HStack>
            <Badge colorScheme="teal" fontSize="md" p={2} borderRadius="md">
              {recipe.strCategory}
            </Badge>
            <Badge colorScheme="orange" fontSize="md" p={2} borderRadius="md">
              {recipe.strArea}
            </Badge>
          </HStack>

          <Divider />

          <Heading size="md">Ингредиенты:</Heading>
          <List spacing={2}>
            {ingredients.map((item, index) => (
              <ListItem key={index} fontSize="lg">
                ✅ {item}
              </ListItem>
            ))}
          </List>
        </VStack>
      </SimpleGrid>

      {/* Нижний блок: Инструкция */}
      <Box mt={10} p={8} bg="gray.50" borderRadius="3xl" shadow="sm">
        <Heading size="lg" mb={4} color="teal.700">Инструкция</Heading>
        <Text lineHeight="tall" fontSize="lg" whiteSpace="pre-line">
          {recipe.strInstructions}
        </Text>
      </Box>
    </Container>
  );
}

export default RecipeDetail;