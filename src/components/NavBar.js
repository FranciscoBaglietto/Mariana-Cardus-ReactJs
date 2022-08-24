import React from "react";

const NavBar = () => {

    return (
        
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="./logo.png" width= '100'></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    PRODUCTOS
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">LINEA FACIAL</a></li>
                                    <li><a className="dropdown-item" href="#">MANOS</a></li>
                                    <li><a className="dropdown-item" href="#">LINEA CORPORAL</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">BUENOS HÁBITOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default NavBar;