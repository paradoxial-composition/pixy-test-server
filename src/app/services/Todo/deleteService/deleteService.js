
import Service from '../../Service';
import Todo from '~/app/models/Todo';

// let axios = require('axios')

export default class deleteService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {

		try {
			let _Todo = (new Todo).getInstance();
			_Todo.remove({ _id: this.req.params.id }, (err, todo) => {
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