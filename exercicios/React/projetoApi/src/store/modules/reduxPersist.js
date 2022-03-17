import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'CONSUMO_API', //nome da aplicação
      storage,
      whitelist: ['auth'], //quem vamos salvar
    },
    reducers,
  );

  return persistedReducers;
};
