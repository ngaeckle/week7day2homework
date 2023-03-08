const todos = [
    {
        id: 1,
        title: 'walk the dogs',
        description: 'just walk the dogs man'
    },
    {
        id: 2,
        title: 'dishes',
        description: 'clean the dishes'
    },
    {
        id: 3,
        title: 'laundry',
        description: 'make dirty clothes clean'
    }
]



const todoContainer = document.getElementById('todos')


for (const action of todos){

    todoContainer.innerHTML += `
        <div class="card" id="${action.id}">
            <h2>${action.title}</h2>
            <p>Action Description: ${action.description}</p>            
        </div>
    `
}
for (const action of todos){
    const actionElement = document.getElementById(action.id)
        actionElement.addEventListener('click', function(){
            actionElement.remove()
    })
}