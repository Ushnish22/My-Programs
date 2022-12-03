function saveData()
{
    let username = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('Contact').value;

    localStorage.setItem('Name',username)
    localStorage.setItem('Email',email)
    localStorage.setItem('Contact',contact)
}