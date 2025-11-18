import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container-fluid mt-4 px-5">
				<div className="row g-4 justify-content-between">
					<Hero />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;