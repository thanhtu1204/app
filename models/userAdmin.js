var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserAdmin = new Schema({
    user: {type: String, unique: true},
    password: {type: String}
});
module.exports = mongoose.model('userAdmin', UserAdmin);
