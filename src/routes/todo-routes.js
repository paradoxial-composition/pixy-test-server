import { 
	createTodoService,
	deleteTodoService,
	readAllTodoService,
	readOneTodoService,
	updateTodoService,
} from '~/app/services';

export default  [
	{
		path: 'todo',
		service: createTodoService,
		method: "POST",
	},
	{
		path: 'todo',
		service: readAllTodoService,
		method: "GET",
	},
	{
		path: 'todo/:id',
		service: readOneTodoService,
		method: "GET",
	},
	{
		path: 'todo/:id',
		service: deleteTodoService,
		method: "DELETE",
	},
	{
		path: 'todo/:id',
		service: updateTodoService,
		method: "POST",
	},
]