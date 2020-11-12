//importo ambos hooks, useState y useContext
import React, { useState, useContext } from "react";
//importo el contexto de la aplicación
import { AppContext } from "../ContextProvider";

const AgregaLibros = () => {
  //agrego un estado para el input
  const [inputValue, setInputValue] = useState("");
  //traigo el contexto para utilizarlo
  const { libros, setLibros } = useContext(AppContext);

  //actualizo el input con su estado
  const updateInputValue = (e) => {
    setInputValue(e.target.value);
  };

  //Agrego un libro nuevo por leer
  const addBook = (e) => {
    e.preventDefault();
    setLibros((prevLibros) => [
      ...prevLibros, //toma el estado previo
      {
        id: `${libros.length + 1}`, //id consecutivo a los anteriores
        nombre: inputValue, //toma el valor del input para nombre del libro
        leido: false //lo pone como no leído por defecto
      }
    ]);
    setInputValue(""); //vacía el input al enviar
  };

  return (
    <div className="add-books">
      <h3>Ahora agrega tus libros</h3>
      {/*Función agrega libros*/}
      <form onSubmit={addBook}>
        {/* Estado del input y su actualización */}
        <input
          className="input"
          value={inputValue}
          onChange={updateInputValue}
        />
        <button className="button">Añadir</button>
      </form>
    </div>
  );
};

export default AgregaLibros;
