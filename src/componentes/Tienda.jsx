import React, { useEffect, useState } from "react";
import "../estilos/tienda.css";
import logotienda1 from "../imagnes/imgTienda1.jpg";
import busqueda from "../imagnes/logodebusqueda.svg";
import horario from "../imagnes/horarioicono.png";
import ubi from "../imagnes/ubicacionicono.png";
import numero from "../imagnes/wpicono.png";
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
    resultado = tiendas.filter((datos) =>
      datos.nombre.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    ShowData();
  }, []);

  return (
    <>
      <div className="contendorBuscador">
        <input
          value={search}
          onChange={Searcher}
          type="text"
          placeholder="Que Buscas?"
          className="form-control buscador"
        ></input> <img className="iconos logoBusqueda" src={busqueda} alt="" />
      </div>
      <div className=" contenedorTienda container  text-center ">
        <div className="row justify-content-center justify-content-lg-start">
          {resultado.map((tienda, index) => (
            <div
              key={index}
              className="card col-2"
              data-aos="flip-left"
              style={{ width: "20rem" }}
            >
              <img
                className="card-img-top img-fluid"
                src={logotienda1}
                alt="no sale"
              />
              <div className="card-body container ">
                <p className="card-text">{tienda.nombre}</p>
                <br />
                <div className="contendorInfo">
                  <img className="iconos" src={ubi} alt="" />
                  <div className="datosText">{tienda.ubicacion}</div>
                  <img className="iconos" src={horario} alt="" />
                  <div className="datosText">
                    Lunes a Viernes <br />
                    {`${tienda.horario.hMañana}`} hs
                    <br /> {`${tienda.horario.hTarde}`} hs <br />
                    Sabado
                    <br />
                    {`${tienda.horario.hfindes} hs`}
                  </div>

                  <img className="iconos" src={numero} alt="" />
                  <div className="datosText"> {tienda.tel} </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
