import Peliculas from "./componenets/Peliculas.jsx";
import PageWraper from "./componenets/PageWraper.jsx";

function App() {
  return (
    <>
      <PageWraper>
        <Peliculas
          titulo="Oblivion (2012)"
          calificacion="8.1"
          director="Joss Whedon"
          fecha="1 May 2015"
          duracion="2h21"
          actores="Robert Downey Jr.,Chris Evans, Chris Hemsworth"
          img="images/uploads/mv1.jpg"
        >
          Earth's mightiest heroes must come together and learn to fight as a
          team if they are to stop the mischievous Loki and his alien army from
          enslaving humanity...
        </Peliculas>
      </PageWraper>
    </>
  );
}

export default App;
