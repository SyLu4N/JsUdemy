exports.paginaInicial = (req, res) => {
  res.render('index');
};

exports.trataPost = (req, res) =>{
  res.send(req.body);
}