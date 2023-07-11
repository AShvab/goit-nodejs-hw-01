import contactsService from "./contacts.js";
import yargs from "yargs";

const { argv } = yargs(process.argv.slice(2));

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.table(allContacts);
      break;

    case "get":
      const oneContact = await contactsService.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contactsService.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await contactsService.removeContact(id);
      console.log(deleteContact);
      break;

    case "update":
      const updateContact = await contactsService.updateContactById(id, {
        name,
        email,
        phone,
      });
      console.log(updateContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
