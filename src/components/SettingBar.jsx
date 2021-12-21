import React from 'react';
import toolState from "../store/toolState";

const SettingBar = () => {
    return (
        <div className="toolbar setting-bar">
            <label htmlFor="line-width">Толщина линии</label>
            <input
                onChange={(e) => toolState.setLineWidth(e.target.value)}
                id="line-width"
                type="number"
                defaultValue={1}
                min={1}
                max={50}
            />
        </div>
    );
};

export default SettingBar;