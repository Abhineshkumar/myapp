import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';


const App =()=>{
    return(
        <div>
         <Player/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));
