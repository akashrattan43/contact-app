import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
    state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "Jhonny@gmail.com",
          phone: '232 - 323 - 2323',
        },
        {
          id: 2,
          name: "Hola Mohal",
          email: "Hola@gmail.com",
          phone: '232 - 323 - 2323',
        },
        {
          id: 3,
          name: "Spuker Smith",
          email: "Spuker@gmail.com",
          phone: '232 - 323 - 2323',
        },
      ],
    };
  

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
