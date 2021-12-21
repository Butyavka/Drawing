import React from 'react';
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Eraser from "../tools/Eraser";
import Line from "../tools/Line";

const ToolBar = () => {

    const changeColor = (e) => {
        toolState.setFillColor(e.target.value)
        toolState.setStrokeColor(e.target.value)
    }

    return (
        <div className="toolbar">
            <div className="toolbar__button-box">
                <button
                    className="toolbar__button brush"
                    onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
                />
                <button
                    className="toolbar__button rect"
                    onClick={() => toolState.setTool(new Rect(canvasState.canvas))}
                />
                <button
                    className="toolbar__button circle"
                    onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
                />
                <button
                    className="toolbar__button eraser"
                    onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}
                />
                <button
                    className="toolbar__button line"
                    onClick={() => toolState.setTool(new Line(canvasState.canvas))}
                />
                <input onChange={(e) => changeColor(e)} type="color"/>
            </div>
            <div className="toolbar__button-box">
                <button className="toolbar__button undo"></button>
                <button className="toolbar__button redo"></button>
                <button className="toolbar__button save"></button>
            </div>
        </div>
    );
};

export default ToolBar;