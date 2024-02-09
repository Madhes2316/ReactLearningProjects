const AddItem = (props) =>{
    return(
        <form onClick={(e) => props.handleNewItemSubmit(e)}>
            <label htmlFor="addItem">Add Item</label>
            <input 
            type="text" 
            autoFocus
            id="addItem"
            required
            onChange={(e) => props.setNewItem(e.target.value)}
            value={props.newItem}
            />
            <button
            type="submit"
            >Add Item</button>
        </form>
    );
}

export default AddItem;