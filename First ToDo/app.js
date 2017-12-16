/*
Vladislav Ligai
Lab 4
*/

const todo = require('./todo');
async function main(){
	/*
	1. Create a task with the following details:
	{
		title: "Ponder Dinosaurs",
		description: "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
	}
	*/
	const taskOne = await todo.createTask("Ponder Dinosaurs","Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
	/*
	2. Log the task, and then create a new task with the following details:
	{
		title: "Play Pokemon with Twitch TV",
		description: "Should we revive Helix?"
	}
	*/
	console.log("---------------Log the First Task---------------");
	console.log(taskOne);
	const taskTwo = await todo.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
	//3. After the task is inserted, query all tasks and log them
	let allTasks = await todo.getAllTasks();
	console.log("---------------Log All Tasks---------------");
	console.log(allTasks);
	//4. After all the tasks are logged, remove the first task
	await todo.removeTask(taskOne._id);
	//5. Query all the remaining tasks and log them
	allTasks = await todo.getAllTasks();
	console.log("---------------Log Without Task One---------------");
	console.log(allTasks);
	//6. Complete the remaining task
	await todo.completeTask(taskTwo._id);
	//7. Log the task that has been completed with its new value.
	const updatedTaskTwo = await todo.getTask(taskTwo._id);
	console.log("---------------Log Completed Task Two---------------");
	console.log(updatedTaskTwo);
	
	await todo.removeTask(taskTwo._id);
	process.exit(0);
}
main();