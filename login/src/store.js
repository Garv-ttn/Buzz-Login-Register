import { createStore, applyMiddleware } from "redux"
import RootReducer from "./Components/Reducers/RootReducer"
//import {persistStore, persistReducer} from 'redux-persist' 
//import storage from "redux-persist/lib/storage";
import rootReducer from "./Components/Reducers/RootReducer";


// const persistConfig={
//     key:'main-root',
//     storage,
// }

// const persistedReducer=persistReducer(persistConfig, rootReducer);

// const store = createStore(persistedReducer,applyMiddleware());

// const Persistor=persistStore(store);

// export{Persistor};
const store = createStore(rootReducer);

export default store;