const Login = require('../models/loginModel');

exports.index = (req, res) =>{
  if(req.session.user) return res.render('login-logado');
  return res.render('login');
};

exports.register = async (req, res) =>{
  try{
    console.log('esse é o body', req.body);
    const login = new Login(req.body);
    await login.register();
  
    if(login.errors.length > 0){
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('/login/index');
      });
      return;
    }
  
    req.flash('success', 'Registro criado com sucesso!');
    req.session.save(function () {
      return res.redirect('/');
    });
  }catch(e) {
    console.log(e);
    return res.render('404');
  }
};

exports.login = async (req, res) =>{
  try{
    console.log('esse é o body', req.body);
    const login = new Login(req.body);
    await login.login();
  
    if(login.errors.length > 0){
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('/');
      });
      return;
    }
  
    req.flash('success', 'Logado com sucesso!');
    req.session.user = login.user;
    req.session.save(function () {
      return res.redirect('/');
    });
  }catch(e) {
    console.log(e);
    return res.render('404');
  }
};

exports.logout = function (req, res) {
  req.session.destroy();
  res.redirect('/login/index');
}