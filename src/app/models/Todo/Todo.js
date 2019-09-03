import Model from '../Model';
import Schema from './schema';

class Todo extends Model {
    constructor() {
        super(Schema);
    }
}

export default Todo;