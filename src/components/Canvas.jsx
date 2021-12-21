import React, {useEffect, useRef} from 'react';
import {observer} from "mobx-react-lite";
import CanvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";

const Canvas = observer( () => {
    const canvasRef = useRef()

    useEffect(() => {
        CanvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
    })

    return (
        <div className="canvas">
            <canvas ref={canvasRef} width="600px" height="400px"/>
        </div>
    );
});

export default Canvas;