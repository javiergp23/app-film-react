import { useEffect, useState } from 'react'
import Peliculas from "./componenets/Peliculas.jsx";
import PageWraper from "./componenets/PageWraper.jsx";
import Paginacion from "./componenets/Paginacion.jsx";

function App() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 5;

  useEffect(() => {
    buscarPeliculas()
  },[peliculas])

  const buscarPeliculas = async () => {
    let url = `https://lucasmoy.dev/data/react/peliculas.json`;

    let resultado = fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
      
  }

  const getTotalPaginas = () => {
    let canntidadTotalDePeliculas = peliculasJson.length
    Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA)
  };

  return (
    <>
      <PageWraper>

        <button onClick={buscarPeliculas}>
        </button>
      
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
