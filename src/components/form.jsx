import { useState } from "react";


function Form(props){

 // function handleSubmit(event){
  //  alert("submitted");  
  //  event.preventDefault();
 // }

const [name, setName] = useState("");
const [URL, setUrl] = useState("");



//new way to write function
  let handleSubmit = (event) => {
    event.preventDefault();
    //alert("submitted");
    //console.log(name);
    //console.log(name, url);

    if (name === "" || URL === ""){
      alert("Name and URL are required");
    }
    else{
      console.log(name, URL);
      props.onNewSubmit({name, URL})

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
        <label form="linkName">Link Name</label>
      <input type="text" name="linkName" onChange={handleNameChange}/>
  
      <br/>
  
      <label form="linkUrl">Link URL</label>
      <input type="text" name="linkUrl" onChange={handleUrlChange}/>
  
  
      <br/>
      <br/>
      <input type="submit" disabled={name === "" || URL === ""}/>
      </form>
  
    )
  }

  export default Form;