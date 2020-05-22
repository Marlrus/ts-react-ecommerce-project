import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import { persistRootReducer } from './root-reducer';

const middleware = [logger];

export const store = createStore(
   persistRootReducer,
   applyMiddleware(...middleware)
);

export const persistor = persistStore(store);

// export default { store, persistor };
