import { Component } from 'react';
import { ContactForm, ContactList, Filter } from './phoneBook';

export class App extends Component {
  state = { contacts: [], filter: '' };

  onSubmitData = obj => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, obj],
    }));
  };

  onHandleChange = e => {
    const { name: key, value } = e.currentTarget;
    this.setState({ [key]: value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <section>
          <div className="container">
            <h1>Phonebook</h1>
            <ContactForm
              onSubmitData={this.onSubmitData}
              contacts={this.state.contacts}
            />
            <h2>Contacts</h2>
            <Filter
              onHandleChange={this.onHandleChange}
              filter={this.state.filter}
            />
            <ContactList
              contacts={this.filterContacts()}
              deleteContacts={this.deleteContacts}
            />
          </div>
        </section>
      </div>
    );
  }
}
