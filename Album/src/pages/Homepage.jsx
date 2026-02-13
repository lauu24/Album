import React from "react";
import { Link } from "react-router-dom";

import "./Homepage.css";
import SeleccionLogo from '../images/Seleccion-Logo.png';
import Arquero1 from '../images/Arquero1.svg';
import arquero2 from '../images/Arquero2.svg';
import arquero3 from '../images/Arquero3.svg';
import Jugador1 from '../images/Jugador1.svg';
import Jugador2 from '../images/Jugador2.svg';
import Jugador3 from '../images/Jugador3.svg';
import Jugador4 from '../images/Jugador4.svg';
import Jugador5 from '../images/Jugador5.svg';
import Jugador6 from '../images/Jugador6.svg';
import Jugador7 from '../images/Jugador7.svg';
import Jugador8 from '../images/Jugador8.svg';
import Jugador9 from '../images/Jugador9.svg';



function Homepage() {
  return (
    <div>
      <header>
        <img src={SeleccionLogo} alt="Logo Selección Colombia" />
        <h1>SELECCIÓN COLOMBIA</h1>
      </header>

      <main>
        <section className="container">

            <section className="home-intro">
                <h1>Plantel de Colombia</h1>
                <p>La Selección Colombia de Fútbol es el equipo que representa al país en las competiciones internacionales organizadas por la FIFA y la Conmebol. 
                    A lo largo de su historia, se ha destacado por su talento, técnica y pasión en el juego, logrando participaciones memorables en Copas del Mundo 
                    y Copas América. Reconocida por su identidad futbolística y el compromiso de sus jugadores, la selección se ha convertido en un símbolo de orgullo 
                    y unión para millones de colombianos.
                </p>
            </section>

            <section className="container-arquero">

                <div className="title-arquero">
                    <h1>Arqueros</h1>
                </div>


                <section className="cards">

                    <Link to ='/jugador/1' className="card">
                        <img src={Arquero1} alt="David Ospina" />
                    </Link>
                    
                    <Link to ='/jugador/2' className="card">
                        <img src={arquero2} alt="Alvaro Montero" />
                    </Link>
                    <Link to ='/jugador/3' className="card">
                        <img src={arquero3} alt="Camilo Vargas" />
                    </Link>
            
                </section>

            </section>

            <section className="container-player">

                <div className="title-players">
                    <h1>Jugadores de campo</h1>
                </div>

                <section className="cards">

                    <Link to ='/jugador/4' className="card">
                        <img src={Jugador1} alt="Daniel Muñoz" />
                    </Link>
                    <Link to ='/jugador/5' className="card">
                        <img src={Jugador2} alt="Santiago Arias" />
                    </Link>
                    <Link to ='/jugador/6' className="card">
                        <img src={Jugador3} alt="Johan Mojica" />
                    </Link>
                    <Link to ='/jugador/7' className="card">
                        <img src={Jugador4} alt="Yerry Mina" />
                    </Link>
                    <Link to ='/jugador/8' className="card">
                        <img src={Jugador5} alt="Davinson Sánchez" />
                    </Link>
                    <Link to ='/jugador/9' className="card">
                        <img src={Jugador6} alt="James Rodríguez" />
                    </Link>
                    <Link to ='/jugador/10' className="card">
                        <img src={Jugador7} alt="Richard Rios" />
                    </Link>
                    <Link to ='/jugador/11' className="card">
                        <img src={Jugador8} alt="Luis Díaz" />
                    </Link>
                    <Link to ='/jugador/12' className="card">
                        <img src={Jugador9} alt="Jhon Arias" />
                    </Link>
                </section>
            </section>

        </section>
      </main>
    </div>
  );
}

export default Homepage;
