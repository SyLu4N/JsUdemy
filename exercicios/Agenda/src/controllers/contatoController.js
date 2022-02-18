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
    req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
    return;
  } catch(e) {
    return res.render('404');
    console.log(e);
  }
};


exports.editIndex = async function (req, res) {
  if(!req.params.id) return res.render('404');

  const contato = await Contato.buscaPorId(req.params.id);
  
  if(!contato) return res.render('404');

  res.render('contato', { contato });
};

exports.edit = async function(req, res){
  try{
    if(!req.params.id) return res.render('404');
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);
  
    if(contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('back'));
      return;
    }
  
    req.flash('success', 'Contado editado.');
    req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
 
  } catch (e){
    console.log(e)
    res.render('404')
  }
};