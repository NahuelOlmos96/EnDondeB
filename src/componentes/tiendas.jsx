import React from 'react';
import logotienda1 from "../imagnes/imgTienda1.jpg";
import horario from "../imagnes/horarioicono.png";
import ubi from "../imagnes/ubicacionicono.png";
import numero from "../imagnes/wpicono.png";
    
export const Tiendas = ({resultado}) =>{




    return(
        <div className=" contenedorTienda container  text-center ">
        <div className="row justify-content-center justify-content-lg-start">
          {resultado.map((tienda, index) => (
            <div
              key={index}
              className="card col-2"
              //animacion de scroll
              data-aos="zoom-in"
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
    );
} 