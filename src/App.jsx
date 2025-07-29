
import {useState} from "react";

//TODO Form, table, some js to push the dara from the form to the table
import './App.css';
import Table from './components/table';
import Form from './components/form';
//Create a App component to render as our main component

function App (){ //Capitalize component names

  //all components have to return some JSX-- thats it

  const [favLinks, setFavLinks] = useState ([])


  let handleNewSubmission = (data) => {
  
    setFavLinks([...favLinks, data])

  }


  return (
    //Form
  <div>
    <h1 className="testclass">Submit your fav links!</h1>

    <Form onNewSubmit={handleNewSubmission} />

    <Table links={favLinks}/>
    
    </div>

  )
}

export default App;

//export default App; //this is the default export

//export {App}; //this is the named export
