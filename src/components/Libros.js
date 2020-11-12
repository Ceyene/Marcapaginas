import React from "react";
//importo los componentes
import ListaLibros from "./ListaLibros";
import AgregaLibros from "./AgregaLibros";

function Libros() {
  return (
    <div className="parents">
      <div className="flex column">
        <h1 className="parents-title">MARCAPÁGINAS</h1>
        <div className="flex flex-center">
          {/* Renderizo dos componentes con distintos readCondition*/}
          <ListaLibros title="Libros por leer" readCondition={false} />
          <ListaLibros title="Libros leidos" readCondition={true} />
        </div>
      </div>
      <AgregaLibros />
    </div>
  );
}

export default Libros;
