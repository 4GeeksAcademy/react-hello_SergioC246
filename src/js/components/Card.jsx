import React from "react";

const Card = () => {

     const cardStyle = {
        width: '35rem'
    }

    return (
        <div className="card col-sm-12 col-md-6 col-lg-4" style={cardStyle}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Adoration_of_the_sheperds_-_Matthias_Stomer.jpg/960px-Adoration_of_the_sheperds_-_Matthias_Stomer.jpg" className="card-img-top" alt="lorem"/>
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
};


export default Card