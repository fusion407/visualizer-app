import './App.css';
import React, {useState} from 'react'
import MediaPlayer from './components/MediaPlayer'
import VisualEditor from './components/VisualEditor'
import Visualizer from './components/Visualizer'
import music from './strobe.mp3'

function App() {

  const [musicSource, setMusicSource] = useState(music);
  const [musicContext, setMusicContext] = useState();
  const [fftCount, setFftCount] = useState(1024);
  const [hueMultiplier, setHueMultiplier] = useState(0.05);
  const [saturation, setSaturation] = useState(100);
  const [lightness, setLightness] = useState(3);
  const [rotations, setRotations] = useState(4);
  const [width, setWidth] = useState(5);
  const [height, setHeight] = useState(2.5);

  return (
    <>
      <header className="App-header">
      <MediaPlayer 
        musicSource={musicSource}
        musicContext={musicContext}
      />
      </header>
      <div className="App">
        <Visualizer 
          musicSource={musicSource}
          musicContext={musicContext}
          fftCount={fftCount}
          hueMultiplier={hueMultiplier}
          saturation={saturation}
          lightness={lightness}
          rotations={rotations}
          width={width}
          height={height}
        />
        <VisualEditor />
      </div>
    </>
  );
}

export default App;
