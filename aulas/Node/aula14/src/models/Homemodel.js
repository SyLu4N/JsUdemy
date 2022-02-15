const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  titulo: { type: String, require: true },
  descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;




