import Service from '../../Service';
import User from '~/app/models/User';

export default class createService extends Service {
	
	constructor({req, res}) {
		super({req, res});
	}

	
	async handle() {
		console.log("Heyyoz")
		try {
			 let _User = (new User).getInstance();
			(new _User(this.req.body)).save((err, user) => {
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