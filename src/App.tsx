
import './App.css';
import Audio from './components/Audio';
import music from './binary/Kalimba.mp3';
// import music from './binary/sample1.mp3';

function App() {
  return (
    <div className="App">
     <Audio audio={music}/>
    </div>
  );
}

export default App;
