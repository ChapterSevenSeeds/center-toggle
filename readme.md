# React Center Toggle
## Usage
Serves to toggle something centered perfectly over another.

## API
The module is imported like so:

    import { CenterToggleChild, CenterToggleContainer, CenterToggleItem } from 'react-center-toggle';

The module must be used like so:

    <CenterToggleContainer toggled={/* A stateful boolean */}>
        <CenterToggleItem>
            /* The child element to be toggled. */
        </CenterToggleItem>
        <CenterToggleChild>
            /* The child element centered above which the 'CenterToggleItem' will appear. */
        </CenterToggleChild>
    </CenterToggleContainer>

## Example
The following code snippet provides a button the clicking of which will hide and show a sentence directly centered inside a red box.

    import React, { useState } from 'react';
    import ReactDOM from 'react-dom';
    import { CenterToggleChild, CenterToggleContainer, CenterToggleItem } from 'react-center-toggle';

    ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
    );


    function App() {
        const [toggle, setToggle] = useState(false);
        return (
            <div style={{margin: '200px'}}>
                <CenterToggleContainer toggled={toggle}>
                    <CenterToggleChild>
                        <div style={{ height: '50px', width: '300px', backgroundColor: "red", opacity: '.5' }}/>
                    </CenterToggleChild>
                    <CenterToggleItem>
                        <span>This will appear in the highlighted area.</span>
                    </CenterToggleItem>
                </CenterToggleContainer>
                <button style={{ marginTop: '50px' }} onClick={() => setToggle(!toggle)}>Click me!</button>
            </div>
        );
    }

## FAQ
- The three functional components exported by the module are purely functions and nothing more. They do not represent a tangible piece of the DOM.
- The 'CenterToggleContainer' function can only have two children: 'CenterToggleChild' & 'CenterToggleItem'.
- Both 'CenterToggleItem' and 'CenterToggleChild' can only have one child element.
- The children of both 'CenterToggleItem' and 'CenterToggleChild' must have an accessible ref. Failure to provide an accessible ref to either function will cause the toggled item not to appear perfectly centered.

## Feedback
Please leave feedback on the GitHub page if you notice any issues or have suggestions for improvement. I could use all of the critiques I can get especially since I have no clue what the fetch I'm doing half the time. 