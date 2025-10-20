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

import productsReducer from "./productsSlice";
import favoritesReducer from "./favoritesSlice";
import cartReducer from "./cartSlice"; // ✅ أضفنا الكارت هنا

const rootReducer = combineReducers({
    products: productsReducer,
    favorites: favoritesReducer,
    cart: cartReducer, // ✅ أضفنا الكارت
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["favorites", "products", "cart"], // ✅ نحافظ على cart كمان
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
