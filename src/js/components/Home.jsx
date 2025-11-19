import React from "react";

//include images into your bundle
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
				<Hero />
			</div>
			<div className="container">
				<div className="row justify-content-center gap-4">
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