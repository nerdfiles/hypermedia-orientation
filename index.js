const app = require('./src');

app();

class ErrorHandler {
  constructor() {
	  this.errors = [];


  }

  load(error) {
	  if (!this.errors.length && error) {
		  this.errors.push(error);
	  }

  }

  render() {

  }

  async transform() {
	  for (let i = 0; i < this.errors.length; i++) {
		  if (typeof this.errors[i].status === 'number') {
			  const f = await fs.readFileSync(path);
			  console.log(f);
		  }
	  }

	  const ValidateObject = ObjectValidator(this.errors[i]);
  }

  async extract(error) {

  }
}
