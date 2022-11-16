import ItemListContainer from "./components/ItemList/ItemListContainer";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";



function App() {
  
  return (
    <div className="app">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:idCategoria" element={<ItemDetailContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>Te Perdiste amigo, volve al inicio</h1>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
