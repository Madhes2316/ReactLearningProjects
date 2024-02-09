const SearchItem = (props) =>{

    return(
        <form action="submit" onSubmit={(e) => e.preventDefault()} style={{marginTop:'15px'}}>
            <label htmlFor="searchItem">Search Item</label>
            <input type="text"
            onChange={(e)=>props.setSearchItem(e.target.value)}
            value={props.searchItem}
            placeholder="Search Items"
            />
        </form>
    );
}

export default SearchItem;