import React, { useRef, useEffect } from 'react'


function Visualizer(props) {
    const canvasRef = useRef(null)
  
    useEffect(() => {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      //Our first draw
      context.fillStyle = '#9999ff'
      context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }, [])

    return(
        <div className="visualizer">
            <canvas ref={canvasRef} {...props}/>
        </div>
    )
}

export default Visualizer;