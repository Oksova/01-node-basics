import * as fs from 'fs/promises';
import path from 'path';
import shortid from 'shortid';

const contactsPath = path.resolve('./db/contacts.json');
console.log(contactsPath);

export async function listContacts() {
  try {
    const contact = await fs.readFile(contactsPath, 'utf8');
    const parsedContacts = JSON.parse(contact);
    console.table(parsedContacts);
  } catch (error) {
    throw error;
  }
}

// console.table(await listContacts());

export async function getContactById(contactId) {
  try {
    const contact = await fs.readFile(contactsPath, 'utf8');
    const parsedContacts = JSON.parse(contact);
    const findContact = parsedContacts.find(
      contact => contact.id === contactId,
    );
    console.table(findContact);
  } catch (error) {
    throw error;
  }
}
// console.log(getContactById(6));

export async function removeContact(contactId) {
  try {
    const contact = await fs.readFile(contactsPath, 'utf8');
    const parsedContacts = JSON.parse(contact);
    const deleteContact = parsedContacts.filter(
      contact => contact.id !== contactId,
    );
    console.table(deleteContact);
  } catch (error) {
    throw error;
  }
}
// console.log(removeContact(7));

export async function addContact(name, email, phone) {
  try {
    const id = shortid.generate();
    const contact = await fs.readFile(contactsPath, 'utf8');
    const parsedContacts = JSON.parse(contact);
    const updateContactList = [...parsedContacts, { id, name, email, phone }];
    console.table(updateContactList);
  } catch (error) {
    throw error;
  }
}
// console.table(addContact('Mariia', 'mary@mail.com', '0951231570'));
