const express = require('express');
const app = express();

app.get('/', (req, res) => { //Oque vamos ver
  res.send(`
  <section>
    <p><a href="http://localhost:3000/contato">Entre em contato conosco</a></p>
  `);
}); 

app.get('/contato', (req, res) =>{ //Aba contato.
  res.send(`<form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>`);

  app.post('/', (req, res) =>{ //Quando postado
    res.send('Formulário recebido!')
  });
});

  app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na prota 3000');
  });
