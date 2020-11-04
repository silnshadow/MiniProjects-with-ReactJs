import React from 'react';
import Slot from './Slot';
import "./index.css";

const App = () => {
    return (
    <>
        <h1 className="Heading_style">
        Welcome to <span style={{color:"red"}}>Slot Machine Game</span> </h1>
        
        <div className="Slot_machine">
        <Slot x="❤️" y="❤️" z="❤️"/>
        <hr/>
        <Slot x="😄" y="😄" z="😄"/>
        <hr/>
        <Slot x="🍌" y="🍌" z="❤️"/>
        <hr/>        </div>
        
    </>
    )
}

export default App;