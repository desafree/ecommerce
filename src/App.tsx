import React from "react";
import { initialization as initializeLanguages } from "./_shared";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, CategoryPage } from "./products";
import { Layout } from "./_layout";
import { useInitFetchProducts } from "./products";

initializeLanguages();

function App() {
  const status = useInitFetchProducts();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            status === "succeeded" ? (
              <Layout>
                <Home />
              </Layout>
            ) : null
          }
        />
        <Route
          path="/:category"
          element={
            status === "succeeded" ? (
              <Layout>
                <CategoryPage />
              </Layout>
            ) : null
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
