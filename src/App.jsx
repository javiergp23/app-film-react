import { useState } from 'react'
import Peliculas from "./componenets/Peliculas.jsx";
import PageWraper from "./componenets/PageWraper.jsx";
import peliculasJson from './pelicula.json'
import Paginacion from "./componenets/Paginacion.jsx";

function App() {
  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 5;

  let peliculas = peliculasJson;

  const cargarPeliculas = () => {
    peliculas = peliculas.slice((paginaActual - 1) * TOTAL_POR_PAGINA, paginaActual * TOTAL_POR_PAGINA);
  };

  const getTotalPaginas = () => {
    let canntidadTotalDePeliculas = peliculasJson.length
    Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA)
  };

  cargarPeliculas();

  return (
    <>
      <PageWraper>
        {peliculas.map(pelicula => 

          <Peliculas
          titulo={pelicula.titulo}
          calificacion={pelicula.calificacion}
          director={pelicula.director}
          fecha={pelicula.fecha}
          duracion={pelicula.duracion}
          actores={pelicula.actores}
          img={pelicula.img}
          descripcion={pelicula.descripcion}
          >
        </Peliculas>
        )}

      <Paginacion pagina={paginaActual} total={4} onChange={(pagina) => {
        setPaginaActual(pagina);
      }}/>
      </PageWraper>
    </>
  );
}

export default App;
