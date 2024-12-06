import { configureStore } from '@reduxjs/toolkit';
import { AllProductsModel, categoriesApi, ProductModel, productsApi } from '@/entities/Product';
import { baseApi } from '@/shared/api/base-api.ts';
import { CartModel } from '@/entities/Cart';

export const extraArgument = {
    categoriesApi,
    productsApi,
};

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        [ProductModel.reducerPath]: ProductModel.reducer,
        [AllProductsModel.reducerPath]: AllProductsModel.reducer,
        [CartModel.reducerPath]: CartModel.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument } }).concat(baseApi.middleware),
});
