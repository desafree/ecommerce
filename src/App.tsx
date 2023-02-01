import React from "react";
import { initialization as initializeLanguages } from "./_shared";
import { Routes, Route } from "react-router-dom";
import { Home, CategoryPage, Detail, useInitFetchProducts } from "./products";
import { Checkout } from "./checkout";
import { Layout } from "./_layout";
import { initGsap } from "./_shared/animation/gsapEffects";

initializeLanguages();
initGsap();

function App() {
  const status = useInitFetchProducts();
  return (
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
      <Route
        path="/checkout"
        element={
          status === "succeeded" ? (
            <Layout>
              <Checkout />
            </Layout>
          ) : null
        }
      />
    </Routes>
  );
}

export default App;
