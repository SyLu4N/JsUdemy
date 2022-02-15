require('dotenv').config(); //arquivos .env segurança
const express = require('express'); //inciando o express
const app = express(); // iniciando o express
const mongoose = require('mongoose'); // salvando da maneira certa
mongoose.connect(process.env.CONNECTIONSTRING)
  .then( () => {
    app.emit('pronto'); //emitindo evento de pronto
  })
  
  .catch(e => console.log(e)); // salvando da maneira certa

const session = require('express-session'); //identificando usuarios
const MongoStore = require('connect-mongo'); //Vão ser salvas na BD
const flash = require('connect-flash'); //Mensagem rápidas, somem sozinhas
const routes = require('./routes'); //Rotas do site ex: site/contato
const path = require('path'); //caminhos absolutos
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret:'130581()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),  
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, //Tempo de duração do cokkie (7dias);
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); // views arquivos que rederizamos na tela

//nossos próprios middlewares
app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta: 3000');
  });
})
