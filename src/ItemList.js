import { useState } from "react";

const ItemList = ()=>{

    const initialListItems = ()=>{
        const initialItems = [
            {
                id:1,
                listItem:'Learn Something',
                isChecked:false
            },
            {
                id:2,
                listItem:'Youtube',
                isChecked:false
            },
            {
                id:3,
                listItem:'Job',
                isChecked:false
            },
            {
                id:4,
                listItem:'Exercise',
                isChecked:true
            },
        ]

        return initialItems;
    }

    const [listItem,setListItem] = useState(()=>initialListItems())

    function handleCheckBox(receievedId){

        let modifiedList = listItem.map(item => 
            item.id === receievedId ? {...item,isChecked:!item.isChecked} : item
        )
        setListItem(modifiedList);

    }

    function handleDelete(receievedId){

        let afterDeleteList = listItem.filter(item =>
            item.id !== receievedId
        )
        setListItem(afterDeleteList);
    }

    return(
        <div className="itemListDiv">
            {
            (listItem.length) ? (
                <ul>
                {listItem.map(item=>(
                    <li key={item.id}>
                        <input 
                            type="checkbox" 
                            checked = {item.isChecked}
                            onChange={()=>handleCheckBox(item.id)}
                        />
                        <span
                            style={item.isChecked ? {textDecoration:'line-through'} : null}
                        >
                            {item.listItem}
                        </span>
                        <button 
                            className="itemListDltBtn"
                            onClick={()=>handleDelete(item.id)}
                        >
                            Delete Item
                        </button>
                    </li>
                ))}
            </ul>
            ) 
            : 
            (
                <span>Empty List</span>
            )
            }
            
        </div>
    )
}

export default ItemList;