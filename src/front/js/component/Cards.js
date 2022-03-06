import React from "react";
import PropTypes from "prop-types";
import Rigo from "../../img/rigo-baby.jpg";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Card = (props) => {
    return (
        <> <div className="container">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://i.pinimg.com/564x/49/df/07/49df07ffea248dfca6a579e9096fa04f.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{props.title}</h3>
                            <h5 className="card-title py-3">{props.title2}</h5>
                            <p className="card-text">
                                {props.description}
                            </p>
                            <p className="card-text">
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-action animate__animated animate__backInRight animate__delay-1s">
                                        <FaEnvelope /> Kao.hurtado22@gmail.com
                                    </li>
                                    <li className="list-group-item list-group-item-action animate__animated animate__backInRight animate__delay-2s">
                                        <FaWhatsapp /> +56988847176
                                    </li>
                                    <li className="list-group-item list-group-item-action animate__animated animate__backInRight animate__delay-3s">
                                        <FaLinkedin /> <a href="https://www.linkedin.com/in/ricardo-hurtado-409035226/" target="_blank" >Ricardo Hurtado</a>
                                    </li>
                                    <li className="list-group-item list-group-item-action animate__animated animate__backInRight animate__delay-4s">
                                        <FaGithub /> <a href="https://github.com/kao-hurtado22" target="_blank" >Ricardo Hurtado (Git Hub)</a>
                                    </li>
                                </ul>
                            </p>

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
    title2: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
};

export default Card;




