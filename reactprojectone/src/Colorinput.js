import colorNames from 'colornames'
const Colorinput = (props)=>{

    function colorToHex(colorName){
        let hexValue = colorNames(colorName);
        return hexValue;
    }

    return(
        <form action="submit" className="colorInput" onSubmit={(e)=>props.handleText(e)}>
            <input type="text" 
            required
            placeholder="Enter color"
            onChange={
                (e) => 
                    {
                        props.setColor(e.target.value)
                        props.setHexValue(()=>colorToHex(e.target.value))
                    }
            }
            value={props.color}
            />
            <br />
            <button className ="togglebutton"
            >Toggle Text</button>
        </form>
    );
}

export default Colorinput;