import React from "react";
import { initialization as initializeLanguages } from "./_shared/i18n/utils/initialization";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./products/views/Home/Home";
import { Layout } from "./_layout/components";

initializeLanguages();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
