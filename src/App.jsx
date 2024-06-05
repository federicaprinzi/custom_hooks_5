import "./App.css";
import useCurrentLocation from "./components/hooks/useCurrentLocation";

const App = () => {
  const { location, error, loading, getLocation, reset } = useCurrentLocation();
  return (
    <div>
      <h1> Posizione Attuale: </h1>
      {loading && <p>Caricamento in corso...</p>}
      {error && <p>Trovato un errore: {error}</p>}
      {location && (
        <div>
          <p>Latitudine: {location.latitude}</p>
          <p>Longitudine: {location.longitude}</p>
        </div>
      )}
      <button onClick={getLocation}> Ottieni </button>
      <button onClick={reset}> Reset </button>
    </div>
  );
};

export default App;
