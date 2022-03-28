"use strict";Object.defineProperty(exports, "__esModule", {value: true});function HomeController() {

}

HomeController.prototype.index = async (req, res) => {
  res.json('Index');
};

exports. default = new HomeController();
