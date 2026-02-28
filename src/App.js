import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  return (
    <Box minH="100vh">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Box>
  );
}

export default App; 