import React from "react";
import SeleccionLogo from '../images/Seleccion-Logo.png';
import { useParams } from "react-router-dom";
import "./Homepage.css";
import { Link } from "react-router-dom";

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
import Homepage from "./Homepage";

function PlayerDetail() {

  const { id } = useParams();

  const jugadores = [
    {
      id: 1,
      nombre: "David Ospina",
      edad: 37,
      numero:'#1',
      posicion: "Arquero",
      Equipos: 'Atlético Nacional',
      imagen: Arquero1
    },
    {
      id: 2,
      nombre: "Alvaro Montero",
      edad: 30,
      numero:'#25',
      posicion: "Arquero",
      Equipos: 'Club Atlético Vélez Sarsfield',
      imagen: arquero2
    },
    {
      id: 3,
      nombre: "Camilo Vargas",
      edad: 36,
      numero:'#12',
      posicion: "Arquero",
      Equipos: 'Atlas Fútbol Club',
      imagen: arquero3
    },
    {
      id: 4,
      nombre: "Daniel Muñoz",
      edad: 29,
      numero:'#21',
      posicion: "Defensa - Lateral derecho",
      Equipos: 'Crystal Palace Football Club',
      imagen: Jugador1
    },
    {
      id: 5,
      nombre: "Santiago Arias",
      edad: 34,
      numero:'#4',
      posicion: "Defensa - Lateral derecho",
      Equipos: 'Club Atletico Independiente',
      imagen: Jugador2
    },
    {
      id: 6,
      nombre: "Johan Mojica",
      edad: 33,
      numero:'#17',
      posicion: "Defensa - Lateral Izquierdo",
      Equipos: 'Real Club Deportivo Mallorca',
      imagen: Jugador3
    },
    {
      id: 7,
      nombre: "Yerry Mina",
      edad: 31,
      numero:'#13',
      posicion: "Defensa central",
      Equipos: 'Cagliari Calcio',
      imagen: Jugador4
    },
    {
      id: 8,
      nombre: "Davinson Sánchez",
      edad: 29,
      numero:'#23',
      posicion: "Defensa central",
      Equipos: 'Galatasaray Spor Kulübü',
      imagen: Jugador5
    },
    {
      id: 9,
      nombre: "James Rodríguez",
      edad: 34,
      numero:'#10',
      posicion: "Mediocentro ofensivo - Capitan",
      Equipos: 'Minnesota United FC',
      imagen: Jugador6
    },
    {
      id: 10,
      nombre: "Richard Rios",
      edad: 25,
      numero:'#6',
      posicion: "mediocampista central",
      Equipos: 'Sport Lisboa e Benfica',
      imagen: Jugador7
    },
    {
      id: 11,
      nombre: "Luis Díaz",
      edad: 29,
      numero:'#7',
      posicion: "Extremo izquierdo - Delantero",
      Equipos: 'Bayern de Múnich',
      imagen: Jugador8
    },
    {
      id: 12,
      nombre: "Jhon Arias",
      edad: 28,
      numero:'#11',
      posicion: "mediocampista central - Delantero",
      Equipos: 'Sport Lisboa e Benfica',
      imagen: Jugador9
    },
  ];

  const jugador = jugadores.find(j => j.id === parseInt(id));

  if (!jugador) {
    return <h1>Jugador no encontrado</h1>;
  }


  return (
    <div className="player-detail">

      <header>
        <img src={SeleccionLogo} alt="Logo Selección Colombia" />
        <h1>SELECCIÓN COLOMBIA</h1>
      </header>

      <div className="card-detail">
        <img src={jugador.imagen} alt={jugador.nombre} />
        <h1>{jugador.numero}</h1>
        <h2>Edad:</h2><p>{jugador.edad}</p>
        <h2>Posición:</h2><p>{jugador.posicion}</p>
        <h2>Equipo actual:</h2><p>{jugador.Equipos}</p>
        <Link to={'/'} className='Back'>
          <h1>Volver</h1>
        </Link>
      </div>

    </div>
  );
}

export default PlayerDetail;
