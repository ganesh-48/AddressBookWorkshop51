window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
  });

  const createInnerHtml = () => {
    const headerHtml = ` 
      <th>Fullname</th>
      <th>Address</th>
      <th>City</th>
      <th>State</th>
      <th>Zip Code</th>
      <th>Phone Number</th>
      <th>Actions</th>
    `;
    let contactList = createContactJSON();
    if(contactList.length == 0) return;
    document.querySelector(".person-count").textContent = contactList.length;
    let innerHtml = `${headerHtml}`;
    for(const contactData of contactList)
    {
    innerHtml = `${innerHtml}
    <tr>
        <td>${contactData._firstName} ${contactData._lastName}</td>
        <td>${contactData._address}</td>
        <td>${contactData._city}</td>
        <td>${contactData._state}</td>
        <td>${contactData._zip}</td>
        <td>${contactData._phone}</td>
        <td>
        <img name="${contactData._id}" onclick="remove(this)" alt="delete" 
                src="D:/javascript/AddressBookWorkshop/delete.png">
        <img name="${contactData._id}" alt="edit" onclick="update(this)"
                src="D:/javascript/AddressBookWorkshop/pencil-edit-button.svg">
        </td>
    </tr>
    `;
    }
  document.querySelector('#table-display').innerHTML = innerHtml;
  }

  const createContactJSON = () => {
    let contactListLocal = [
    {
        _firstName: "Sai",
        _lastName: "Sharma",
        _address: "SaiNiwas",
        _city: "Pune",
        _state: "Maharashtra",
        _phone: "9420264885",
        _zip: "413140",
    },
    {
        _firstName: "Sham",
        _lastName: "Bharti",
        _address: "AnandNAger",
        _city: "Mumbai",
        _state: "Maharashtra",
        _phone: "9421659595",
        _zip: "413301",
    }
    ];
    return contactListLocal;
  } 