const todoList = [];
let desire = prompt('What would you like to do?');
let item = "willbe";

//new
//list
//delete
//try again
//quit

while (desire !== "quit") {

    if (desire === "new"){
        todoList.push(prompt("What would like to add?"));
        console.log(item = todoList.slice(-1) + ` was added to the List!`)
    }
    else if (desire === "list"){
        console.log("*****************");
        for(let i = 0; i < todoList.length; i++) {
            console.log(i + ": " + todoList[i]);
        }
        console.log("*****************");
    }
    else if (desire === "delete"){
        let delItem = parseInt(prompt("Which item would you like to delete?"));
        if (Number.isNaN(delItem) !== true){
        console.log(delItem + " " + todoList[delItem] + ' was deleted')
        todoList.splice(delItem, 1)
        }
        else {
            console.log("Invalid item.")
        }
    }
    desire = prompt('What would you like to do?').toLowerCase();
}

console.log('You quit the app.');