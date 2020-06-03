import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { persistRootReducer } from './root-reducer';
import { State } from './store.types';
import { ShopActions } from './shop/shop.types';

type Actions = ShopActions;

const middleware = [thunk as ThunkMiddleware<State, Actions>];

if (process.env.NODE_ENV === 'development') middleware.push(logger);

export const store = createStore(
   persistRootReducer,
   applyMiddleware(...middleware)
);

export const persistor = persistStore(store);

// export default { store, persistor };
