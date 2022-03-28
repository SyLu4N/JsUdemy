function HomeController() {

}

HomeController.prototype.index = async (req, res) => {
  res.json('Index');
};

export default new HomeController();
