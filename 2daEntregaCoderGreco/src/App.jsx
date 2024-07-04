import { useState } from "react";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categorias/:categoryId" element={<ItemListContainer />} />
          <Route path="/producto/:productId" element={<ItemDetailContainer/>} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
