import "./index.css";

const Slot = (props) =>{
    let x = props.x; //Object destructuring , making calling object more simpler}
    let y = props.y;
    let z = props.z;

    if((x===y) && (y===z)){

        return(
            <>
            <div className="Slot_inner">
            <h1 style={{textAlign:"center"}}>{x} {y} {z}</h1>
            <h1 style={{textAlign:"center"}}>This is matching.</h1>
            <hr/>
            </div>
            </>
        );
    }
    else{
        return(
            <>
            <div className="Slot_inner">
            <h1 style={{textAlign:"center"}}>{x} {y} {z}</h1>
            <h1 style={{textAlign:"center"}}>This is Not matching.</h1>
            </div>
            </>
        );
}
}

export default Slot;