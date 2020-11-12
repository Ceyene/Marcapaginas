//importo el hook para el contexto
import React from "react";
//importo los estilos
import "./styles.css";
//importo el Proveedor del contexto
import AppProvider from "./ContextProvider";
//importo el componente consumidor del contexto
import Libros from "./components/Libros";

export default function App() {
  return (
    //Proveedor
    <AppProvider>
      <div className="App">
        <Libros /> {/*Consumidor*/}
      </div>
    </AppProvider>
  );
}
