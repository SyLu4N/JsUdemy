import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'REACT-BASE', //nome da aplicação
      storage,
      whitelist: ['example'], //quem vamos salvar
    },
    reducers,
  );

  return persistedReducers;
};
