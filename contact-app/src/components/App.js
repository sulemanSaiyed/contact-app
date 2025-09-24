import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {

  const contacts=[
    { id:"1",
    "name":"pandu",
    "email":"sul@gmail.com",
    },
    {id:"2",
    "name":"kandu",
    "email":"sop@gmail.com",
    },
        ];

  return (
  <div className="ui conatiner ">


    <Header/>
    <AddContact/>
    <ContactList contactsData={contacts}/>
    </div>
  );
}

export default App;
