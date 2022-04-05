import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';

import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Sobre from '../pages/Sobre';
import User from '../pages/User';
import UserEdit from '../pages/UserEdit';
import EditPassword from '../pages/EditPassword';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Alunos} isClosed={false} />
      <MyRoute exact path="/aprendiz/:id" component={Aluno} isClosed />
      <MyRoute exact path="/aprendiz/" component={Aluno} isClosed />
      <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />
      <MyRoute exact path="/login/" component={Login} isClosed={false} />
      <MyRoute exact path="/register/" component={Register} isClosed={false} />
      <MyRoute exact path="/sobre/" component={Sobre} isClosed={false} />
      <MyRoute exact path="/user/" component={User} isClosed />
      <MyRoute exact path="/user/:id" component={UserEdit} isClosed />
      <MyRoute exact path="/EditPassWord" component={EditPassword} isClosed />
      <MyRoute exact path="*" component={Page404} />
    </Switch>
  );
}
