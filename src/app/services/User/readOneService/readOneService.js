import Service from '../../Service';
import User from '~/app/models/User';

// let axios = require('axios')

export default class readOneService extends Service {

	constructor({req, res}) {
		super({req, res});
	}

	async handle() {
		try {
			let _User = (new User).getInstance();
			_User.findOne({ _id: this.req.params.id }, (err, user) => {
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