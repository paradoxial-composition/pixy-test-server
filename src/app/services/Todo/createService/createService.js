import Service from '../../Service';
import Todo from '~/app/models/Todo';

export default class createService extends Service {
	
	constructor({req, res}) {
		super({req, res});
	}
	
	async handle() {
		try {
			 let _Todo = (new Todo).getInstance();
			(new _Todo(this.req.body)).save((err, todo) => {
				if (err) {
					this.res.send(err)
				} else {
					return this.toJson({
						todo
					})
				}
			})
		} catch (e) {
			console.log('data base error.')
			return this.end()
		}

	}
}