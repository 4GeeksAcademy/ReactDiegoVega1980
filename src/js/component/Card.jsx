import React from "react";

const Card = (props) => {
    return(
        <div className="card" style={{width: "18rem" }}>
        <img src="https://picsum.photos/500/325" className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.descripcion}</p>
          <a href="#" className="btn btn-primary">{props.boton}</a>
        </div>
      </div>
    );
};

export default Card