function FormatYaml(propertyList,mainDescription){
    let resourceObject = propertyFormatting(propertyList);
    let stringObj = `
${JSON.stringify(resourceObject)}
`;
let mainDesp = `${JSON.stringify(mainDescription)}`;
    console.log("🚀 ~ FormatYaml ~ stringObj:", stringObj)
    console.log("🚀 ~ FormatYaml ~ resourceObject:", resourceObject)
    let contents = `
    {
        "AWSTemplateFormatVersion'": "2010-09-09",
        "Description": ${mainDesp},
        "Resources": ${stringObj}
    }
    `

    console.log("COntents:",contents);
    return contents;
}

function propertyFormatting(propertyList){
    var columns = {};
    console.log(propertyList);
    for(let i=0 ; i< propertyList.length ; i++) {
        let name = propertyList[i]['propertyName'];
        let desp = propertyList[i]['descriptionName'];
        let skey = propertyList[i]['ssKey'];
        let svalue = propertyList[i]['ssValue'];
        columns[name]={
            "Type":`AWS::SecretsManager::Secret`,
            "Properties":{
            "Name":name,
            "Description":desp,
            "SecretString":`{'${skey}':'${svalue}'}`
            }
        }
        console.log("Columns:",columns);
    } 
    return columns;
}

export default FormatYaml;