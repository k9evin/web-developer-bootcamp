let input = prompt("What would you like to do?");
let todos = [];
while (input !== "quit" && input !== "q") {
    if (input == "new") {
        const todo = prompt("Enter the todo: ");
        todos.push(todo);
        console.log(`${todo} added to the list`);
    } else if (input === "list") {
        console.log("****************************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("****************************");
	} else if (input === "delete") {
		const index = parseInt(prompt("Select the index you would like to delete: "));
		if (Number.isNaN(index)) {
			console.log("Unknown index");
		} else {
			todos.splice(index, 1);
		}
	}
    input = prompt("What would you like to do?");
}
