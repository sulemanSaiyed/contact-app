import React from "react";
import ContactCard from "./ContactCard";

const ContactList=(props)=>{
  console.log(props);

  const renderContactList=props.contactsData.map((contact)=>{
   return(<ContactCard key ={contact.id} contact={contact}/>);
  
});
  return(
<div className="ui celled list">{renderContactList}</div>
  );
};

export default ContactList;