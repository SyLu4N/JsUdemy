const Contato = require('../models/ContatoModel');

exports.index = (req, res) => {
  res.render('contato', {
    contato: {}
  });
  return;
};

exports.registerContato = async(req, res) => {
  try {
    console.log('contatoController',req.body);
    const contato = new Contato(req.body);
    for(const input in req.body){
      console.log(input);
      if(req.body[input] === 'undefined'){
        req.body = '';
      }
    }
    await contato.register();

    if(contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('back'));
      return;
    }

    req.flash('success', 'Contato registrado com sucesso.');
    req.session.save(() => res.redirect(`/contato`));
    return;
  } catch(e) {
    console.log(e);
    return res.render('404');
  }
};
