import { useState } from "react";


function Form(){

 // function handleSubmit(event){
  //  alert("submitted");  
  //  event.preventDefault();
 // }

const [name, setName] = useState("");
const [url, setUrl] = useState("");



//new way to write function
  let handleSubmit = (event) => {
    event.preventDefault();
    //alert("submitted");
    //console.log(name);
    //console.log(name, url);

    if (name === "" || url === ""){
      alert("Name and URL are required");
    }
    else{
      console.log(name, url);

      //send this to the table?
    }
  }

  let handleNameChange = (event) => {
    setName(event.target.value);
    //console.log(event.target.value);
  }

  let handleUrlChange = (event) => {
    setUrl(event.target.value);
    //console.log(event.target.value);
  }

    return (  
    <form onSubmit={handleSubmit}>
        <label for="linkName">Link Name</label>
      <input type="text" name="linkName" onChange={handleNameChange}/>
  
      <br/>
  
      <label for="linkUrl">Link URL</label>
      <input type="text" name="linkUrl" onChange={handleUrlChange}/>
  
  
      <br/>
      <br/>
      <input type="submit" disabled={name === "" || url === ""}/>
      </form>
  
    )
  }

  export default Form;