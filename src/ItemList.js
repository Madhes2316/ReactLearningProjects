

const ItemList = (props)=>{


    return(
        <div className="itemListDiv">
            {
            (props.listItem.length) ? (
                <ul>
                {props.listItem.map(item=>(
                    <li key={item.id}>
                        <input 
                            type="checkbox" 
                            checked = {item.isChecked}
                            onChange={()=>props.handleCheckBox(item.id)}
                        />
                        <span
                            style={item.isChecked ? {textDecoration:'line-through'} : null}
                        >
                            {item.listItem}
                        </span>
                        <button 
                            className="itemListDltBtn"
                            onClick={()=>props.handleDelete(item.id)}
                        >
                            Delete Item
                        </button>
                    </li>
                ))}
            </ul>
            ) 
            : 
            (
                <span>No List Found</span>
            )
            }
            
        </div>
    )
}

export default ItemList;