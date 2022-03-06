import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Breadcrum from "../component/Breadcrum";
import Card from "../component/Cards";
import Service from "../component/Service";
/* import Work from "../component/Works"; */



export const Home = () => {
	return (
		<>
			<section id="header">
				<div className="container py-3">
					<Breadcrum />
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-12 py-5">
							<Card
								title="Ricardo Hurtado Lastra"
								title2="Biografia"
								description="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
							/>
						</div>
					</div>
				</div>
			</section>
			<section id="body-1">
				<div className="container">
					<div className="row">
						<div className="col-md-6 text-center" id="service-1">
							<Service
								title="Servicios"
								description="“Ser Full Stack Developer no implica dominar por completo cada aspecto del front-end o el back-end, pero sí poder trabajar en ambos lados, comunicarlos y entender lo que sucede cuando se crea una aplicación”"
							/>
						</div>
						<div className="col-md-6 text-center" id="service-2">
							<Service
								title="Años de experiencia"
								description="“Ser Full Stack Developer no implica dominar por completo cada aspecto del front-end o el back-end, pero sí poder trabajar en ambos lados, comunicarlos y entender lo que sucede cuando se crea una aplicación”"
							/>
						</div>
						<div className="col-md-6 text-center py-5" id="service-3">
							<Service
								title="Mis Habilidad"
								description="“Ser Full Stack Developer no implica dominar por completo cada aspecto del front-end o el back-end, pero sí poder trabajar en ambos lados, comunicarlos y entender lo que sucede cuando se crea una aplicación”"
							/>
						</div>
						<div className="col-md-6 text-center py-5" id="service-4">
							<Service
								title="Mis Portafolios"
								description="“Ser Full Stack Developer no implica dominar por completo cada aspecto del front-end o el back-end, pero sí poder trabajar en ambos lados, comunicarlos y entender lo que sucede cuando se crea una aplicación”"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* <section id="body-2">
				<div className="container">
					<Work
						title="Mis Trabajos"
					/>
				</div>
			</section> */}
		</>
	);
};
