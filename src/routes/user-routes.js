import { 
	loginService, 
	registerService,
	allUsersService,
	deleteUserService,
	updateUserService,
} from '~/app/services';

export default  [
	{
		path: 'users/login',
		service: loginService,
		method: "POST",
	},
	{
		path: 'users/register',
		service: registerService,
		method: "POST",
	},
	{
		path: 'users',
		service: allUsersService,
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
	},
]