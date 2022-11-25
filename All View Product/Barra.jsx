import React from "react";
import "./styles.css";

const Barra = () => {
  return (
    <div className="Contenedor-Barra">
      <div className="Barra">
        <div className="Barra-Izquierda">
          <span>Buscar:</span>
          <div className="Busqueda">
            <input
              type="text"
              placeholder=""
              className=""
              style={{ width: "200px" }}
            />
          </div>
        </div>
        <div className="Barra-Centro">
          <h1 className="Inicio">Ventas</h1>
        </div>
        <div className="Barra-Derecha">
          <img src="/logo192.png" alt="" style={{height:"80px", width:"80px"}}/>
        </div>
      </div>
    </div>
  );
};

export default Barra;
