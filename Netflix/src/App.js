import React from 'react';
import './components/css/App.css';
import './components/css/card.css'
import { seriesList } from './data/series-static.js';
import './components/css/styles.css';

function series(serie){
  let prueba = "";
  if(serie.seasons){
    if(serie.seasons === 1){
      prueba = serie.seasons + " temporada"
    }else{
      prueba = serie.seasons + " temporadas"
    }
  }else if(serie.episodes){
    if(serie.episodes === 1){
      prueba = serie.episodes + " episodio"
    }else{
      prueba = serie.episodes + " episodios"
    }
    
  }else{
    prueba = "Miniserie"
  };
  return prueba;
}

function ListaPeliculas(){
  
  const peliculas = seriesList.map(pelicula =>
        <article className="card" key={pelicula.id} >

            <div className="season">{series(pelicula)}</div>
            <img src={`./img/`+pelicula.img} alt={pelicula.title}/>
            <div className="container">
                {pelicula.matching>50 && <div className="coincidencia">{pelicula.matching}% de coincidencia</div>}
                <div className="info-card-container">
                    <div>
                        <span className={`pegi age-`+pelicula.pegi}>{pelicula.pegi}+</span>
                        <span className="year">{pelicula.year}</span>
                    </div>
                    <div className="tooltip">
                        <div className="tooltiptext">Añadir</div>
                        <span className="material-icons btn-icon">add</span>
                    </div>
                </div>
                <p>{pelicula.desc}</p>
            </div>
        </article>
    
);
return peliculas;
}

export default function App() {

  return (
    <div className="App">
      <header>
      </header>
      <body> 
      <div className="grid-similares" >
        <ListaPeliculas/>
      </div>
      </body>
    </div>
  );
}


