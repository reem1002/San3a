import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import san3aReducer from "./san3aSlice";
import productsReducer from "./productsSlice";
import favoritesReducer from "./favoritesSlice";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
    products: productsReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
    san3a: san3aReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["favorites", "products", "cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
