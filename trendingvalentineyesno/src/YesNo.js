const YesNo = (props)=>{

    let yesBtnSize = props.yesBtnSize +'px';
    let gifFileName = props.gifName;

    return(
        <div className="YesNoDiv">
            <h2>{props.mainQuestion}</h2>
            <img src={gifFileName} alt="sadCatGif" height="300px" width="300px"/>
            <br />
            {(gifFileName !== 'happyCat.gif') ? (
                <div>
                <button 
                style={{fontSize:yesBtnSize}} 
                onClick={(e) => props.handleYesClick(e)}
                className="yesBtn"
                >
                    {props.yesValue}
                </button>
                <input 
                style={{marginLeft:'5px'}} 
                className="noBtn"
                onClick={
                    (e) => props.handleNoClick(e,props.noValue.id)
                }
                type="button"
                value={props.noValue.value}
                >
                </input>
                    </div>
            ) : <h3>I Love you too!!!</h3>
            }
            
        </div>
    );
}

export default YesNo;