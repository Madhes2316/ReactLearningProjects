import './App.css';
import Footer from './Footer';
import Header from './Header';
import ItemList from './ItemList'
import { useState } from "react";

function App() {

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

  return (
    <div>
    <Header />
    <ItemList 
    listItem = {listItem}
    setListItem = {setListItem}
    handleCheckBox = {handleCheckBox}
    handleDelete = {handleDelete}
    />
    <Footer 
    listItem = {listItem}
    />
    </div>
  );
}

export default App;
