import Service from '../../Service';
import Todo from '~/app/models/Todo';

export default class createService extends Service {
	
	constructor({req, res}) {
		super({req, res});
	}
	
	async handle() {
		// this.req.body.todoList.push()
		console.log(this.req.body)
		
		try {
			 let _Todo = (new Todo).getInstance();
			_Todo.update({ _id: this.req.body._id }, this.req.body, {upsert: true}, (err, todo) => {
			// (new _Todo(this.req.body)).save((err, todo) => {
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