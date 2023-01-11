import React from "react";
import { initialization as initializeLanguages } from "./_shared";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, CategoryPage, Detail, useInitFetchProducts } from "./products";
import { Checkout } from "./checkout";
import { Layout } from "./_layout";
import { useScrollToTop } from "./_shared";

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
    </BrowserRouter>
  );
}

export default App;
