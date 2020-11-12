import React, { useState } from "react";

//Creamos el contexto
export const AppContext = React.createContext();

//Libros para el Estado inicial
const listaLibros = [
  { id: "1", nombre: "Crimen y castigo", leido: false },
  { id: "2", nombre: "Cien años de soledad", leido: true },
  { id: "3", nombre: "La divina comedia", leido: true },
  { id: "4", nombre: "El principito", leido: false },
  { id: "5", nombre: "El retrato de Dorian Grey,", leido: false }
];

//Creamos el Proveedor y podríamos poner props y abajo props.children
export default function AppProvider({ children }) {
  //Definimos el estado inicial con useState
  //aquí tenemos el método para añadir más libros setLibros
  const [libros, setLibros] = useState(listaLibros);

  return (
    <AppContext.Provider value={{ libros, setLibros }}>
      {children}
    </AppContext.Provider>
  );
}
