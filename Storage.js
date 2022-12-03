function saveData()
{
    let username = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('Contact').value;

    let myObj = {
        Name: username,
        Email: email,
        Contact: contact
    }

    localStorage.setItem('MyObj', myObj);
}