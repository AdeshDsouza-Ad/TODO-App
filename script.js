const form=document.querySelector('.form-todo')
const inputBox=document.querySelector('.inputBox')
const todolist=document.querySelector('.todo-list')
const remove=document.querySelector('.remove')

form.addEventListener('submit',(e)=>
{
    e.preventDefault()
    const inputValue=inputBox.value

    const newli=document.createElement('li')
    newli.innerHTML=` <span class="text">${inputValue}</span>
                  <div class="todo-buttons">
                    <button class="todo-btn remove">Remove</button>
                  </div>`

    inputBox.value="";
    todolist.append(newli)
    
})

todolist.addEventListener('click',(e)=>
{
      if(e.target.classList.contains("remove"))
      {
        const node=e.target.parentElement.parentElement

        node.remove()
      }
})


