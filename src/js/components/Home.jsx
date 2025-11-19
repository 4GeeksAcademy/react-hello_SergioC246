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
			<div className="container mt-4 px-5">
				<Hero />
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