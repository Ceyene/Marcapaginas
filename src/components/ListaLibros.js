//importo el hook para el contexto
import React, { useContext } from "react";
//importo el contexto
import { AppContext } from "../ContextProvider";

//Componente Consumidor del estado global
function ListaLibros({ title, readCondition }) {
  //Extraigo los datos del Proveedor AppContext con el hook useContext
  const { libros, setLibros } = useContext(AppContext);

  //Lógica de actualización de los libros
  //Se dispara cada vez que se hace click en el checkbox de cada libro
  const handleChange = (event) => {
    event.persist();
    const { id, checked } = event.target;
    const modifiedLibros = libros.map((libro) => {
      if (libro.id === id) {
        return {
          ...libro,
          leido: checked
        };
      }
      return libro;
    });
    setLibros(modifiedLibros);
  };

  //Filtro libros para tener un array solo del estado de lectura solicitado
  //Renderizo listado con map del nuevo array formado
  return (
    <div className={`parent ${readCondition ? "leidos" : "no-leidos"}`}>
      <div className="context-title">{title}</div>
      <div className="flex column libros">
        {libros
          .filter((libro) => libro.leido === readCondition)
          .map((libro) => {
            return (
              <div key={libro.id} className="libro">
                <span>{libro.nombre}</span>
                <input
                  id={libro.id}
                  onChange={handleChange}
                  checked={libro.leido}
                  className="check"
                  type="checkbox"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ListaLibros;
