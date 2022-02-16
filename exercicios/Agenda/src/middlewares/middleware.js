exports.middlewareGlobal = (req, res, next) =>{
  res.locals.errors = req.flash('errors');
  res.locals.success = req.flash('success');
  res.locals.user = req.session.user;
  next();
};

exports.outroMiddleare = (req, res, next) =>{
  next();
};

exports.checkCsrfError = (err, req, res, next) =>{
  if(err) res.render('404');
  next();
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}

exports.loginRequired = (req, res, next) =>{
  if(!req.session.user){
    req.flash('errors', 'Você precisa estar logado para Cadastrar novos contatos.');
    req.session.save(() => res.redirect('/login/index'));
    return;
  }

  next();
};