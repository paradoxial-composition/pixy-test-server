import Router from './lib/Router';
import { authMiddleware } from '~/app/middlewares';
import todoRoutes from './todo-routes';
import userRoutes from './user-routes';

import { 
	createTodoService,
	deleteTodoService,
	readAllTodoService,
	readOneTodoService,
	updateTodoService,

	readOneUserService,
	createUserService,
	readAllUserService,
	deleteUserService,
	updateUserService,
} from '~/app/services';

export default Router([
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
		path: 'todo:id',
		service: updateTodoService,
		method: "POST",
	},
	{
		path: 'users/login',
		service: readOneUserService,
		method: "POST",
	},
	{
		path: 'users/register',
		service: createUserService,
		method: "POST",
	},
	{
		path: 'users',
		service: readAllUserService,
		method: "GET",
	},
	{
		path: 'users/:id',
		service: deleteUserService,
		method: "DELETE",
	},
	{
		path: 'users/:id',
		service: updateUserService,
		method: "POST",
	}
	//userRoutes
])