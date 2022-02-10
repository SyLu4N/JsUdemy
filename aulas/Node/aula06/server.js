const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/contato', (req, res) =>{
  res.send('Obrigado por entrar em contato conosco.');
});

  app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na prota 3000');
  });
