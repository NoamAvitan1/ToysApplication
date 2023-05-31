const mongoose = require('mongoose');
const { config } = require('../config/secret');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${config.USER_DB}:${config.PASS_DB}@cluster0.gjvgqtw.mongodb.net/toys`);
  console.log("mongo connect projects_toys atlas");
}