import Service from '../../Service';
import Todo from '~/app/models/Todo';

// let axios = require('axios')

export default class readAllService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {
		try {
			let _Todo = (new Todo).getInstance();
			_Todo.find((err, todo) => {
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