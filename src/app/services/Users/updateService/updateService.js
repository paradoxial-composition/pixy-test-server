import Service from '../../Service';
import User from '~/app/models/Todo';

// let axios = require('axios')

export default class updateService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {

		try {
			let _User = (new User).getInstance();
			_User.update({ _id: this.req.params.id }, this.req.body, (err, user) => { // to Object_Id may be a future probleme
				if (err) {
					this.res.send(err)
				} else {
					return this.toJson({
						user
					})
				}
			})
		} catch (e) {
			console.log('data base error.')
			return this.end()
		}
	}
}