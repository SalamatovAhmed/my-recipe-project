import React, { useState } from "react";
import { Input, InputGroup, InputRightElement, Button, Container, Box } from "@chakra-ui/react";
import axios from "axios";

const SearchBar = ({ setRecipes }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    setRecipes(res.data.meals || []);
  };

  return (
    <Box bg="white" borderBottom="1px" borderColor="gray.100" py={12} mb={6}>
      <Container maxW="container.md">
        <InputGroup size="lg" variant="filled">
          <Input
            placeholder="Найдите свой идеальный рецепт..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            bg="gray.50"
            borderRadius="full" // Закругленный поиск — это современно
            _focus={{ bg: "white", borderColor: "teal.600", borderWeight: "2px" }}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <InputRightElement width="7rem">
            <Button 
              h="1.75rem" 
              size="sm" 
              onClick={handleSearch}
              colorScheme="teal" 
              borderRadius="full"
              px={6}
            >
              Найти
            </Button>
          </InputRightElement>
        </InputGroup>
      </Container>
    </Box>
  );
};

export default SearchBar;