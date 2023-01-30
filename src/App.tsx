import React from "react";
import { initialization as initializeLanguages } from "./_shared";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, CategoryPage, Detail, useInitFetchProducts } from "./products";
import { Checkout } from "./checkout";
import { Layout } from "./_layout";
import { AnimatePresence } from "framer-motion";

initializeLanguages();

function App() {
  const status = useInitFetchProducts();
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
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
    </AnimatePresence>
  );
}

export default App;
