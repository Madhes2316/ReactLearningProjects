

const InputForm = (props)=>{

    return(
        <div className = "inputBox">
            <h1>AWS SecretManager CloudFormation JSON Creation</h1>
            <h3>Resources:</h3>
                <span>Resource/File Name:</span>
                <input 
                type="text"
                required
                size={50}
                onChange={(e) => props.setResource(e.target.value)}
                value={props.resource}
                />
                <br /> <br />
                <span>Resource Description:</span>
                <br />
                <textarea 
                required
                rows="3" cols="60" name="comment"
                onChange={(e) => props.setMainDescription(e.target.value)}
                value={props.maindescription}
                ></textarea>
                <br /> <br />
            <form action="submit">
                <span>Type:</span>
                <input 
                type="text" 
                value="AWS::SecretsManager::Secret"
                size={25}
                disabled
                />
                <h4>Properties:</h4>
                <span>Name:</span>
                <input 
                required
                size={50}
                type="text" 
                onChange={(e) => props.setProperty(e.target.value)}
                value={props.property}
                />
                <br /> <br />
                <span>Description:</span>
                <br />
                <textarea 
                required
                rows="3" cols="60" name="comment"
                onChange={(e) => props.setDescription(e.target.value)}
                value={props.description}
                ></textarea>
                <br /> <br />
                <span>Secret String-Key:</span>
                <input 
                type="text" 
                required
                size={30}
                onChange={(e) => props.setSecretKeyProp(e.target.value)}
                value={props.secretkeyProp}
                />
                <span style={{marginLeft:'5px'}}>Secret String-Key Value:</span>
                <input 
                type="text" 
                required
                size={30}
                onChange={(e) => props.setSecretValue(e.target.value)}
                value={props.secretValue}
                />
                <br /> <br />
                <hr />
                <button
                onClick={(e) => props.handleAddPropertyClick(e)}
                >Add Property</button>
                <button style={{marginLeft:'5px'}}
                onClick={(e) => props.handleClearPropertyClick(e)}
                >Clear property values</button>
            </form>
            <br />
            <button
            onClick={(e) => {
                props.handleGenerateYamlClick(e)
                }
            }
            >Generate JSON</button>
            <button 
            style={{marginLeft:'5px'}}
            onClick={(e) => props.handleClearAllClick(e)}
            >
                Clear All
            </button>
        </div>
    );
}

export default InputForm;