window.addEventListener('DOMContentLoaded', (event) => {
    const fullname = document.querySelector('#fullName');
    const textError = document.querySelector('.text-error');
    fullname.addEventListener('input', function () {
        if (fullname.value.length == 0) {
            textError.textContent = "";
            return
        }
        try {
            (new Contact()).fullName = fullname.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const phoneNumber = document.querySelector('#phonenumber');
    const phoneError = document.querySelector('.phone-error');
    phoneNumber.addEventListener('input', function () {
        if (phoneNumber.value.length == 0) {
            phoneError.textContent = "";
            return
        }
        try {
            (new Contact()).phonenumber = phoneNumber.value;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            addressError.textContent = "";
            return
        }
        try {
            (new Contact()).address = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });
});

/**UC8
 * Add the address book entry into an address book list.
 * And store into local storage.
 */
function createAndUpdateStorage(addContactData) {

    let contactDataList = JSON.parse(localStorage.getItem("ContactDataList"));

    if(contactDataList != undefined) {
        contactDataList.push(addContactData);
    } else {
        contactDataList = [addContactData];
    }
    alert(contactDataList.toString());
    localStorage.setItem("ContactDataList", JSON.stringify(contactDataList));
}

/**UC6 
 * clicking on submit button populating address book.
 * adding to list and saving to list.
*/

const save = () => {
    try{
      let contact = saveData();
      createAndUpdateStorage(contact);
    }catch(e){
      return;
    }
 };

 function saveData(){
    let contact = new Contact();
    contact._fullName = getInputValueById('#fullName');
    contact._address = getInputValueById('#address');
    contact._phoneNumber = getInputValueById('#phonenumber');
    contact._city = getInputValueById('#city');
    contact._state = getInputValueById('#state');
    contact._zip = getInputValueById('#zip');
 }

 const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}