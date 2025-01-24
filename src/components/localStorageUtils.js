class Contact {
    constructor(name, phone) {
      this.name = name;
      this.phone = phone;
    }
  
    static fromJSON(json) {
      return new Contact(json.name, json.phone);
    }
  }
  
  class ContactManager {
    constructor() {
      this.contacts = this.loadFromLocalStorage();
    }
  
    add(contact) {
      this.contacts.push(contact);
      this.saveToLocalStorage();
      return this.contacts;
    }
  
    delete(contact) {
      const index = this.contacts.indexOf(contact);
      if (index > -1) {
        this.contacts.splice(index, 1);
        this.saveToLocalStorage();
      }
      return this.contacts;
    }
  
    saveToLocalStorage() {
      localStorage.setItem('contacts-data', JSON.stringify(this.contacts));
    }
  
    loadFromLocalStorage() {
      const json = localStorage.getItem('contacts-data');
      if (json === null) return [];
  
      const jsonParsed = JSON.parse(json, function (key, value) {
        if (key === 'date') value = new Date(value);
        return value;
      });
  
      const loadedContacts = [];
      for (let i = 0; i < jsonParsed.length; i++) {
        loadedContacts.push(Contact.fromJSON(jsonParsed[i]));
      }
      return loadedContacts;
    }
  }
  
  export { Contact, ContactManager };
  