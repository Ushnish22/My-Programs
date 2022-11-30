const btn=document.querySelector('.btn');
btn.addEventListener('mouseout',(e) => {
e.preventDefault();
document.querySelector('#my-form').style.background = '#ccc';
});
btn.addEventListener('mouseover',(e) => {
e.preventDefault();
document.querySelector('#my-form').style.background = '#cef';
});

const myform=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myform.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput===' '||emailInput===' ')
    {
        alert('Please fill the details');
    }
    else{
        console.log(nameInput.value);
    }

}