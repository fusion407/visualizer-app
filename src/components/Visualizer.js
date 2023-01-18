import React, { useRef, useEffect } from 'react'


function Visualizer(props) {
    const canvasRef = useRef(null)
    const {
        musicSource,
        musicContext,
        fftCount,
        hueMultiplier,
        saturation,
        lightness,
        rotations,
        barWidth,
        barHeight
    } = props
    

    useEffect(() => {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      //Our first draw
      context.fillStyle = '#9999ff'
      context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }, [])

    console.log("musicSource: " + props.musicSource)
    console.log("musicContext: " + props.musicContext)
    console.log("fftCount: " + props.fftCount)
    console.log("hueMultiplier: " + props.hueMultiplier)
    console.log("saturation: " + props.saturation)
    console.log("lightness: " + props.lightness)
    console.log("rotations: " + props.rotations)
    console.log("barWidth: " + props.barWidth)
    console.log("barHeight: " + props.barHeight)



    return(
        <div className="visualizer">
            <canvas ref={canvasRef} />
        </div>
    )
}

export default Visualizer;