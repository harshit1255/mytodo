
form = document.querySelector('form');
tasks = document.getElementById('task-list')
form.addEventListener('submit',onformsubmit);

function onformsubmit(e)
{
    e.preventDefault();
    let t = form.tasktext.value;
    // console.log(t);
    let item = document.createElement('li');
    let del  = document.createElement('button');
    let edit = document.createElement('button');
    del.innerText = 'delete'
    edit.innerText = 'edit'
    let task = document.createElement('p');
    task.innerText= t;
    del.addEventListener('click',deleteitem);
    edit.addEventListener('click',edititem);
    item.append(task,del,edit);
    tasks.append(item);
}
function deleteitem(e)
{   e.preventDefault();
    console.log(e.target);
    let deleted = confirm('you really want to delete this task')
    if(deleted)
    {
        console.log(e.target.parentNode.remove());
    }
}
function edititem(e)
{
    let para = e.target.parentNode.firstChild;
    let text = prompt('please enter the new text')
    if(text && text.trim()!=='')
    {
        para.innerText=text;
    }


}