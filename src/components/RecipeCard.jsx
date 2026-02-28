import React from "react";
import { Box, Image, Text, Button, Flex, Badge, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, onAddFavorite }) => {
  const toast = useToast();

  const handleFav = () => {
    onAddFavorite(recipe);
    toast({ title: "Сохранено", status: "success", duration: 1500, isClosable: true });
  };

  return (
    <Box 
      bg="white" 
      borderRadius="3xl" 
      overflow="hidden" 
      transition="all 0.4s cubic-bezier(.17,.67,.83,.67)"
      _hover={{ transform: "translateY(-10px)", shadow: "2xl" }}
      border="1px"
      borderColor="gray.50"
    >
      <Box position="relative">
        <Image src={recipe.strMealThumb} alt={recipe.strMeal} h="240px" w="100%" objectFit="cover" />
        <Badge 
          position="absolute" top={4} right={4} 
          bg="whiteAlpha.900" color="teal.800" borderRadius="full" px={3}
        >
          {recipe.strCategory}
        </Badge>
      </Box>

      <Box p={6}>
        <Text fontSize="xl" fontWeight="700" mb={4} noOfLines={1} color="gray.800" fontFamily="'Georgia', serif">
          {recipe.strMeal}
        </Text>
        
        <Flex gap={3}>
          <Link to={`/recipe/${recipe.idMeal}`} style={{ flex: 1 }}>
            <Button colorScheme="teal" variant="solid" w="100%" borderRadius="2xl" fontSize="sm">
              Подробнее
            </Button>
          </Link>
          <Button 
            onClick={handleFav} 
            variant="ghost" 
            colorScheme="orange" 
            borderRadius="2xl"
            _hover={{ bg: "orange.50" }}
          >
            ★
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default RecipeCard;