import { 
	createTodoService,
	deleteTodoService,
	readAllTodoService,
	readOneTodoService,
	updateTodoService,
} from '~/app/services';

export default  [
	{
		path: 'Todo',
		service: createTodoService,
		method: "POST",
	},
	{
		path: 'Todo',
		service: readAllTodoService,
		method: "GET",
	},
	{
		path: 'Todo/:id',
		service: readOneTodoService,
		method: "GET",
	},
	{
		path: 'Todo/:id',
		service: deleteTodoService,
		method: "DELETE",
	},
	{
		path: 'Todo/:id',
		service: updateTodoService,
		method: "POST",
	},
]