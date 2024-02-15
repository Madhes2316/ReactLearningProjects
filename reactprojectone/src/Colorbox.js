const Colorbox = (props)=>{

    let boxColor =props.boxColor;
    let textColor  = (props.isDarkColor) ? 'black' : 'white';
    let hexValue = (props.hexValue) ? props.hexValue : null

    return(
        <div className="colorBox" style={{backgroundColor:boxColor}}>
            <div style ={{ marginTop: "35%"}}>
                <p style={{color:textColor}}>{ (boxColor) ? (boxColor) :'Empty Value' }</p>
                <span style={{color:textColor}}>{hexValue}</span>
            </div>
        </div>
    );
}

export default Colorbox;