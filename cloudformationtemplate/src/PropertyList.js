const PropertyList = (props)=>{
    return(
        <div>
        <h1>Property List</h1>
        {
            (props.propertyObject.length) ? 
            (
                <ul className="PropertyListul">
                    {props.propertyObject.map(item =>(
                        <li key={item.id} className="PropertyListli">
                            <span>PropertyName:</span>
                            {item.propertyName}
                            <br />
                            <span>Property's Description:</span>
                            {item.descriptionName}
                            <br />
                            <span>Secret Key:</span>
                            {item.ssKey}
                            <br />
                            <span>Secret Value:</span>
                            {item.ssValue}
                        </li>
                    ))}
                </ul>
            ) :
            (
                <p>No Properties to Show</p>
            )
        }
        </div>
    );
}

export default PropertyList;