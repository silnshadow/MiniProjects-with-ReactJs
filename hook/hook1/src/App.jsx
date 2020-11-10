import React, {useState} from 'react';

const App = () => {
    let newTime = new Date().toLocaleTimeString();

    const [ctime,setcTime] = useState(newTime);
    
    const UpdateTime = () => {
         newTime = new Date().toLocaleTimeString();
         setcTime(newTime); 
    }
    return(
        <>
            <h1 className="Heading">{ctime}</h1>
            <div className="Button_style">
                <button onClick={UpdateTime} style={{backgroundColor:"red"}}>GeTime</button>
            </div>
        </>
    );
}

export default App;