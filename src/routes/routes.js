import Router from './lib/Router';
import { authMiddleware } from '~/app/middlewares';
import TodoRoutes from './todo-routes';

export default Router(
	TodoRoutes
)