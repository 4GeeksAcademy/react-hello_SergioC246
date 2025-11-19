import React from "react";

const Card = () => {
    return (
        <div className="card p-0 col-sm-12 col-md-6 col-lg-4" style={{ width: '18rem' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Adoration_of_the_sheperds_-_Matthias_Stomer.jpg/1280px-Adoration_of_the_sheperds_-_Matthias_Stomer.jpg" className="object-fit-cover" alt="lorem" />
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-success">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card