import React from "react";
import { initialization as initializeLanguages } from "./_shared";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, CategoryPage, Detail, useInitFetchProducts } from "./products";
import { Layout } from "./_layout";

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
        <Route
          path="/:category/:id"
          element={
            status === "succeeded" ? (
              <Layout>
                <Detail />
              </Layout>
            ) : null
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
