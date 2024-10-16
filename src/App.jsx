import Peliculas from "./componenets/Peliculas.jsx";
import PageWraper from "./componenets/PageWraper.jsx";
import peliculasJson from './pelicula.json'

function App() {

  let peliculas = peliculasJson;
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
      </PageWraper>
    </>
  );
}

export default App;
