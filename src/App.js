import './App.css';
import MediaPlayer from './components/MediaPlayer'
import VisualEditor from './components/VisualEditor'
import Visualizer from './components/Visualizer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MediaPlayer />
      </header>
      <VisualEditor />
      <Visualizer />
    </div>
  );
}

export default App;
