import React from "react";
import { Box, Flex, Text, HStack, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box 
      bg="white" 
      borderBottom="1px" 
      borderColor="gray.100" 
      py={6} 
      position="sticky" 
      top={0} 
      zIndex={10}
      shadow="sm"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link to="/">
            <Text 
              fontSize="2xl" 
              fontWeight="800" 
              letterSpacing="tighter" 
              color="teal.700"
              fontFamily="'Georgia', serif"
            >
              CHEF'S<Text as="span" color="orange.400">TABLE</Text>
            </Text>
          </Link>

          <HStack spacing={10}>
            <Link to="/">
              <Text fontWeight="600" color="gray.600" _hover={{ color: "teal.600" }}>ГЛАВНАЯ</Text>
            </Link>
            <Link to="/favorites">
              <Text fontWeight="600" color="gray.600" _hover={{ color: "teal.600" }}>ИЗБРАННОЕ</Text>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;