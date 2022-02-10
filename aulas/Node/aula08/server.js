const express = require('express');
const app = express();

app.use(
  express.urlencoded({
    extended: true
  })
);

app.get('/', (req, res) => { //Oque vamos ver
  res.send(`
  <form action="/" method="POST">
  Nome Cliente: <input type="text" name="nome">
  <button>Enviar</button>
  </form>`);
});

app.get('/teste/:idUsuarios?/:parametro?', (req, res) =>{
  console.log(req.params);
  console.log(req.query);
  res.send(req.query.facebookprofile);
});

app.post('/', (req, res) =>{ //Quando postado
  console.log(req.body);
  res.send(`Oque você enviou foi: ${req.body.nome}`);
});


app.listen(3000, () =>{
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na prota 3000');
});
