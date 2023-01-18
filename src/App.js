import './App.css';
import MediaPlayer from './components/MediaPlayer'
import VisualEditor from './components/VisualEditor'
import Visualizer from './components/Visualizer'


function App() {
  return (
    <>
      <header className="App-header">
      <MediaPlayer />
      </header>
      <div className="App">
        <Visualizer />
        <VisualEditor />
      </div>
    </>
  );
}

export default App;
