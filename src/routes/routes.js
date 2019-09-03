import Router from './lib/Router';
import { authMiddleware } from '~/app/middlewares';
import TodoRoutes from './todo-routes';
import UserRoutes from './user-routes';

export default Router(
	TodoRoutes,
	UserRoutes
)