const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;




