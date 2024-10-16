import Peliculas from "./componenets/Peliculas.jsx";
import PageWraper from "./componenets/PageWraper.jsx";
import PeliculasJson from './pelicula.json'

function App() {

  let peliculas = PeliculasJson;
  return (
    <>
      <PageWraper>
        {peliculas.map(()=> {

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
        })}
      </PageWraper>
    </>
  );
}

export default App;
