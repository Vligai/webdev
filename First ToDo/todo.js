/*
Vladislav Ligai
Lab 4
*/
const uuid = require('uuid');
const getCollectionFn = require('./mongoCollections').getCollectionFn;
const getCollection = getCollectionFn('todoItems');

/*
This async function will resolve to the newly created to-do list object
{
    _id: "a unique identifier for the task; you will generate these using uuid package",
    title: "the title of the task",
    description: "a descriptive bio of the task",
    completed: false,
    completedAt: null
}   
*/
async function createTask(title, description){
	if (typeof title !== 'string')
		throw ("Title must be a string!");
	if (typeof description !== 'string')
		throw ("Description must be a string!");
	const newCollection = await getCollection();
	const newTask = {
		_id: uuid(),
		title,
		description,
		completed: false,
		completedAt: null
	};
	const updatedTask = await newCollection.insertOne(newTask);
	if (updatedTask.insertedCount !== 1)
		//If the task cannot be created, the method should reject.
		throw("Couldn't add new task");
	else{
		const createdTask = await newCollection.findOne({ _id: newTask._id });
		return createdTask;
	}
}
/*
This function will resolve to an array of all tasks in the database.
*/
async function getAllTasks(){
	const newCollection = await getCollection();
	const findCol = await newCollection.find();
	const arrCol = await findCol.toArray();
	return arrCol;
}
/*
When given an id, this function will resolve to a task from the database.
*/
async function getTask(id){
	if (typeof id !== 'string')
		//If no id is provided, the method should reject.
		throw ("ID must be a string!");
	const newCollection = await getCollection();
	const foundTask = await newCollection.findOne({ _id: id });
	if (!foundTask)
		//If the task does not exist, the method should reject.
		throw("Task not found!")
	else
		return foundTask
}
/*
This function will modify the task in the database. It will set
completed to true and completedAt to the current time (Links to an external site.)
*/
async function completeTask(taskId){
	if (typeof taskId !== 'string')
		//If no id is provided, the method should reject.
		throw ("ID must be a string!");
	const newCollection = await getCollection();
	const updatedTaskID = await newCollection.updateOne(
		{ _id: taskId },
		{ $set: {
			completed: true,
			completedAt: new Date()
		}
	}
	);
	if(!updatedTaskID)
		//If the task cannot be updated (does not exist, etc), this method should reject.
		throw("Task could not be updated!");	
	else
		//If the update is successful, this method will resolve to the updated task.
		return updatedTaskID.value;
}
/*
This function will remove the task from the database.
*/
async function removeTask(id){
	if (typeof id !== 'string')
		//If no id is provided, the method should reject.
		throw ("ID must be a string!");
	const newCollection = await getCollection();
	const rmtask = await newCollection.removeOne({ _id: id });
	if(!rmtask)
		//If the task cannot be removed (does not exist), the method should reject.
		throw ("Task cannot be removed!");
	else 
		//If the removal succeeds, resolve to true.
		return true;
}

module.exports = {
	createTask,
	getAllTasks,
	getTask,
	completeTask,
	removeTask
};
