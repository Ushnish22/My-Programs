var items=document.querySelector('.list-group-item:nth-child(2)');
items.style.background = "green";

var items=document.querySelector('.list-group-item:nth-child(3)');
items.style.visibility = "hidden";

var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}