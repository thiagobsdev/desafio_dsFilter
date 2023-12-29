import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage/Index";
import { useState } from "react";
import { ContextProductsCount } from "./Context/products-context";

function App() {
  const [contextProductsCount, setContextProductsCount] = useState<number>(0);

  return (
    <ContextProductsCount.Provider
      value={{ contextProductsCount, setContextProductsCount }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProductsCount.Provider>
  );
}

export default App;
