const todolist = [];
let choice = prompt("What do you want to do?")
while(choice != "quit")
    {
        if(choice == "new")
        {
            let new_item = prompt("What do you want to add to the list")
            todolist.push(new_item)
        }
        else if(choice == "list")
        {
            console.log("******************************")
            for(let i = 0; i < todolist.length; i++)
                console.log(i, todolist[i])
        }
        else if(choice == "delete")
        {
            console.log("******************************")
            let to_delete = parseInt(prompt("Which item to be deleted?"))
            console.log(`${todolist[to_delete]} is deleted`)
            todolist.splice(to_delete,1)

        }
        choice = prompt("What do you want to do?")
    }
console.log('Ok, You quit the app')