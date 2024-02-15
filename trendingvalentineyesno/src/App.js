import YesNo from './YesNo'
import { useState } from 'react';
function App() {

    let noParams = [
      {
        id:1,
        value:'No'
      },
      {
        id:2,
        value:'Are u sure?'
      },
      {
        id:3,
        value:'Really?'
      },
      {
        id:4,
        value:'I am sad'
      },
      {
        id:5,
        value:'I am gonna Cry'
      },
      {
        id:6,
        value:'But I love you'
      },
      {
        id:7,
        value:'Okay I will go'
      },
      {
        id:8,
        value:'Just Kidding lol'
      },
      {
        id:9,
        value:'Please Please Please'
      },
      {
        id:10,
        value:'Test 10'
      },
      {
        id:11,
        value:'Test 11'
      },
      {
        id:12,
        value:'Test 12'
      },
      {
        id:13,
        value:'Test 13'
      },
      {
        id:14,
        value:'Test 14'
      },
      {
        id:15,
        value:'Test 15'
      },
      {
        id:16,
        value:'Test 16'
      },
      {
        id:17,
        value:'Test 17'
      },
      {
        id:18,
        value:'Test 18'
      },
      {
        id:19,
        value:'Test 19'
      },
      {
        id:20,
        value:'Test 20'
      },
    ]

    const sadCatsGifDir = 'sadCats/';
  
  const [mainQuestion,setMainQuestion] = useState("Will you be my Valentine?")
  const [yesValue,setYesValue] = useState('Yes');
  const [noValue,setNoValue] = useState(noParams[0]);
  const [yesBtnSize,setYesBtnSize] = useState(20)
  const [gifName,setGifName] = useState(`${sadCatsGifDir}sadCat_1.gif`)

  
  function handleYesClick(e){
    e.preventDefault();
    setMainQuestion("Huarrrayyyyyyyyyyyyyyyyyyyyy!!!!!");
    setGifName("happyCat.gif");
  }

  function handleNoClick(e,currentId){
    e.preventDefault();
    if(currentId < 20){
    console.log("🚀 ~ handleNoClick ~ currentId:", currentId)
    console.log("🚀 ~ handleNoClick ~ currentId * 10 + 20:", currentId * 10 + 30)
    setYesBtnSize(currentId * 10 + 30)
    setNoValue(noParams[currentId])
    setGifName(`${sadCatsGifDir}sadCat_${currentId + 1}.gif`)
    }
  }


  return (
    <div>
      <YesNo
      handleYesClick = {handleYesClick}
      yesValue = {yesValue}
      setYesValue = {setYesValue}
      mainQuestion = {mainQuestion}
      setMainQuestion = {setMainQuestion}
      noValue = {noValue}
      setNoValue = {setNoValue}
      handleNoClick = {handleNoClick}
      yesBtnSize = {yesBtnSize}
      gifName = {gifName}
      />
    </div>
  );
}

export default App;
