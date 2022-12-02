import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <div className="App">
      <div className="card-film">
        <h1>Фильм</h1>
        <Stars count={5} />
      </div>
    </div>
  );
}

export default App;
