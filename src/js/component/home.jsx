import React from "react";
import Navbar from "./Navbar"
import Card from "./Card"
import JumboCard from "./JumboCard"
import Footer from "./Footer"

//include images into your bundle.


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<JumboCard />
			<div className="d-flex gap-4 mt-2 flex-wrap justify-content-center">
				<Card
					titulo="Carta de Ejemplo 1"
					descripcion="Un texto de ejemplo rápido para desarrollar el título de la tarjeta 1 y constituir la mayor parte del contenido de la tarjeta 1."
					boton="Go for Ejemplo 1" />

				<Card
					titulo="Carta de Ejemplo 2"
					descripcion="Un texto de ejemplo rápido para desarrollar el título de la tarjeta 2 y constituir la mayor parte del contenido de la tarjeta 2."
					boton="Go for Ejemplo 2" />

				<Card
					titulo="Carta de Ejemplo 3"
					descripcion="Un texto de ejemplo rápido para desarrollar el título de la tarjeta 3 y constituir la mayor parte del contenido de la tarjeta 3."
					boton="Go for Ejemplo 3" />

				<Card
					titulo="Carta de Ejemplo 4"
					descripcion="Un texto de ejemplo rápido para desarrollar el título de la tarjeta 4 y constituir la mayor parte del contenido de la tarjeta 4."
					boton="Go for Ejemplo 4" />
			</div>
			<Footer />
		</div>
	)
};
export default Home;