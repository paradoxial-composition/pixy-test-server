import Service from '../../Service';
import Todo from '~/app/models/Todo';

// let axios = require('axios')

export default class updateService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {

		try {
			let _Todo = (new Todo).getInstance();
			_Todo.update({ userId: this.req.body.userId }, this.req.body, (err, todo) => { // to Object_Id may be a future probleme
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