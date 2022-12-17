var form=document.getElementById('addForm');
var expenseList=document.getElementById('expenses');

form.addEventListener('submit',addItem);

expenseList.addEventListener('click',removeItem);

expenseList.addEventListener('click',editItem);

function addItem(e)
{
    e.preventDefault();

    var newExpense=document.getElementById('expense').value;
    var description=document.getElementById('description').value;
    var type=document.getElementById('type').value;

    var li=document.createElement('li');

    li.appendChild(document.createTextNode(newExpense+'-'));
    li.appendChild(document.createTextNode(description+'-'));
    li.appendChild(document.createTextNode(type));

    var deleteBtn=document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deleteBtn);

    var editBtn=document.createElement('button');
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    expenseList.appendChild(li);
}

function removeItem(e)
{
    if(e.target.classList.contains('delete'));
    {
        if(confirm('Are you sure?'))
        {
            var li = e.target.parentElement;
            expenseList.removeChild(li);
        }
    }
}

function editItem(e)
{
    if(e.target.classList.contains('edit'));
    {
        if(confirm('Are you sure?'))
        {
            var li = e.target.parentElement;
            expenseList.removeChild(li);
        }
    }
}