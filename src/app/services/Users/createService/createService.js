import Service from '../../Service';
import User from '~/app/models/User';

export default class createService extends Service {
	
	constructor({req, res}) {
		super({req, res});
	}
	
	async handle() {
		try {
			 let _Users = (new User).getInstance();
			(new _Users(this.req.body)).save((err, user) => {
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