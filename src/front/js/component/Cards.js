import React from "react";
import PropTypes from "prop-types";
import Rigo from "../../img/rigo-baby.jpg";


const Card = (props) => {
    return (
        <> <div className="container">
            <div className="card mb-3" style={{ maxWidth: 650 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={Rigo} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">
                                {props.description}
                            </p>
                            <p className="card-text">
                                <small className="text-muted">{props.description2}</small>
                            </p>
                            <a href="#" className="btn btn-secondary text-white">
                                Contacto
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    description2: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonURL: PropTypes.string,
};

export default Card;




