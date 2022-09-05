import React, { useEffect, useState } from "react";
import "../estilos/tienda.css";
import busqueda from "../imagnes/logodebusqueda.svg";
import AOS from "aos";
import datos from "../datos";

export default function Tienda() {
  AOS.init();

  const [tiendas, setTiendas] = useState([]);
  const [search, setSearch] = useState("");

  const ShowData = () => setTiendas(datos);

  const Searcher = (e) => {
    setSearch(e.target.value);
  };
  let resultado = [];
  if (!search) {
    resultado = tiendas;
  } else {

    
    resultado = tiendas.filter((datos, index) =>
      
      datos.nombre.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    ShowData();
  }, []);

  return (
    <>
      <div className="contendorBuscador">
        <p>inicio</p>
        <p>+sumate</p>
        <p>Tienda</p>
        <input
          value={search}
          onChange={Searcher}
          type="text"
          placeholder="Que Buscas?"
          className="form-control buscador"
        ></input>
        <img className="iconos logoBusqueda" src={busqueda} alt="" />
      </div>
        
        <Tienda  resultado={resultado}/>

    </>
  );
}
