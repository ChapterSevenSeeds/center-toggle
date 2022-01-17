import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { CenterToggleContainer, CenterToggleChild, CenterToggleItem } from './lib/CenterToggle';

ReactDOM.render(
    <React.StrictMode>
        <Asdf />
    </React.StrictMode>,
    document.getElementById('root')
);

function Asdf() {
    const [toggled, setToggled] = useState(false);
    return (
        <>
            <button onClick={() => setToggled(!toggled)}>Click</button>
            <CenterToggleContainer toggled={toggled}>
                <CenterToggleChild>
                    <div style={{ backgroundColor: 'red', width: '100%', height: '500px' }}>
                    </div>
                </CenterToggleChild>
                <CenterToggleItem>
                    <div>Hello</div>
                </CenterToggleItem>
            </CenterToggleContainer>
        </>
    );
}