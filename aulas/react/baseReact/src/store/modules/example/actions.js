import * as types from '../types';

export function clicaBotaoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}
export function clicaBotaoSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCESS,
  };
}
export function clicaBotaoFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
