var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: String,
    price: Number,
    desctipion: String
});

module.exports = mongoose.model('Product', ProductSchema);
