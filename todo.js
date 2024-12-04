function addTask()
{
    var taskInput=document.getElementById("new-task")
    var taskList=document.getElementById("task-list")


    if(taskInput.value=="")
    {
        alert("Please Enter the Task")
        return 
    }
    var listItem=document.createElement('li')
    listItem.innerText=taskInput.value

    var buttonContainer=document.createElement('div')
    buttonContainer.className='task-button'

    var deletebutton=document.createElement('button')
    deletebutton.innerText='Delete'
    deletebutton.onclick=function()
    {
        taskList.removeChild(listItem)
    }


    var completebutton=document.createElement('button')
    completebutton.innerText='Complete'
    completebutton.onclick=function()
    {
        listItem.classList.toggle('completed')
    }

    buttonContainer.appendChild(deletebutton)
    buttonContainer.appendChild(completebutton)
    listItem.appendChild(buttonContainer)
    taskList.appendChild(listItem)

    taskInput.value=""
}