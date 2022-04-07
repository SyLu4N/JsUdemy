import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* changePasswordRequest({ payload }) {
  try {
    const { oldPassword, password } = payload;

    const teste = yield call(axios.put, '/users/password/', {
      oldPassword,
      password,
    });
    toast.success('Senha alterada com sucesso!');
    history.push(`/user/${payload.id}`);
    yield put(actions.changePasswordSuccess(teste));
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Algo deu errado, tente novamente mais tarde');
    }

    yield put(actions.changePasswordFailure());
  }
}

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Logado com sucesso!');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`; //token header

    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Usuário ou senha inválidos.');
    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  //Guarda o token
  const token = get(payload, 'auth.token', '');
  if (!token) return;

  axios.defaults.headers.Authorization = `Bearer ${token}`; //token header
}

function* registerRequest({ payload }) {
  const { id, nome, email, usuario, password } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        email,
        usuario,
        nome,
        password: password || undefined,
      });
      toast.success('Conta alterada com sucesso!');
      yield put(
        actions.registerUpdatedSuccess({ nome, email, usuario, password }),
      );
    } else {
      yield call(axios.post, '/users', {
        email,
        usuario,
        nome,
        password,
      });

      const log = usuario;
      const teste = { log: log, password: password };
      const response = yield call(axios.post, '/tokens', teste);
      toast.success('Conta criada com sucesso');
      yield put(
        actions.registerCreatedSuccess({ nome, email, usuario, password }),
      );
      history.push('/');
      yield put(actions.loginSuccess({ ...response.data }));
      axios.defaults.headers.Authorization = `Bearer ${response.data.token}`; //token header
    }
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      yield put(actions.loginFailure());
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(error));
    } else {
      toast.error('Algo deu errado, tente novamente mais tarde');
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.CHANGE_PASSWORD_REQUEST, changePasswordRequest),
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
