import { useState } from 'react'
import { saveAs } from 'file-saver';
import FormatYaml from './FormatYaml'
import InputForm from "./InputForm";
import PropertyList from './PropertyList';


function App() {

  const [resource,setResource] = useState('');
  const [property,setProperty] = useState('');
  const [description,setDescription] = useState('');
  const [maindescription,setMainDescription] = useState('');
  const [secretkeyProp,setSecretKeyProp] = useState('');
  const [secretValue,setSecretValue] = useState('');
  const [propertyObject,setPropertyObject] = useState([]);


  const newProperty = ()=>{
    if(property){
    const newId = propertyObject.length ? propertyObject[propertyObject.length - 1].id + 1 : 1;
    const newProperty = {
        id : newId,
        resourceName : resource,
        typeName : 'AWS::SecretsManager::Secret',
        propertyName : property,
        descriptionName : description,
        ssKey : secretkeyProp,
        ssValue : secretValue
    }
    const newPropertyItem = [...propertyObject,newProperty]
    setPropertyObject(newPropertyItem);
    console.log(propertyObject);
    clearProperty();
  }
}

  function handleAddPropertyClick(e){
    e.preventDefault();
    newProperty();
  }

  function clearProperty(){
    setProperty('');
    setDescription('');
    setSecretValue('');
    setSecretKeyProp('');
  }

  function handleClearPropertyClick(e){
    e.preventDefault();
    clearProperty();
  }

  function handleGenerateYamlClick(e){
    e.preventDefault();
    if(propertyObject.length>0){
    console.log("🚀 ~ handleGenerateYamlClick ~ propertyObject:", propertyObject)
    let textContents = FormatYaml(propertyObject,maindescription);
    const file = new Blob([textContents], { type: 'text/plain;charset=utf-8' });
    saveAs(file, `${propertyObject[0].resourceName}.json`);
    }
  };

  function handleClearAllClick(e){
    e.preventDefault();
    let result = window.confirm("This will remove off all the properties you added and clear off all the input fields,Do you want to continue?");
    if(result){
    setResource('');
    setMainDescription('');
    setPropertyObject([]);
    clearProperty();
    }
  }

  return (
    <div className='mainAppDiv'>
      <InputForm 
      property = {property}
      setProperty = {setProperty}
      description = {description}
      setDescription = {setDescription}
      secretkeyProp = {secretkeyProp}
      setSecretKeyProp = {setSecretKeyProp}
      secretValue = {secretValue}
      setSecretValue = {setSecretValue}
      resource = {resource}
      setResource = {setResource}
      maindescription = {maindescription}
      setMainDescription = {setMainDescription}
      handleAddPropertyClick = {handleAddPropertyClick}
      handleClearPropertyClick = {handleClearPropertyClick}
      handleGenerateYamlClick = {handleGenerateYamlClick}
      handleClearAllClick = {handleClearAllClick}
      />
      <PropertyList 
      propertyObject = {propertyObject}
      />
    </div>
  );
}

export default App;
