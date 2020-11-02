import React from 'react';

function App(){
let currDate = new Date(2020,5,8,5);
currDate = currDate.getHours();
let greeting="";
const cssStyle ={};

if (currDate > 1 && currDate < 12){
    greeting="Good Morning";
    cssStyle.color="#00b894";
}else if(currDate >= 12 && currDate < 20){
    greeting="Good Afternoon";
    cssStyle.color="orange";

}else if(currDate >=20 && currDate <20){
    greeting="Good Night";
    cssStyle.color="black";
}

return (
    <>
    <div class="Para">
        <h1>
            Hello Master, <span style={cssStyle}>{greeting}</span>
        </h1>
    </div>
    </>
)
}

export default App;