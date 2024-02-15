import { useRef } from 'react';

const AddItem = (props) =>{

    const inputRef = useRef();
    return(
        <form onClick={(e) => props.handleNewItemSubmit(e)}>
            <label htmlFor="addItem">Add Item</label>
            <input 
            type="text" 
            autoFocus
            id="addItem"
            required
            ref={inputRef}
            onChange={(e) => props.setNewItem(e.target.value)}
            value={props.newItem}
            />
            <button 
            className="addItemBtn"
            type="submit"
            onClick={()=>inputRef.current.focus()}
            >Add Item</button>
        </form>
    );
}

export default AddItem;