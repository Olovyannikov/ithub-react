import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/shared/api/base-api.ts';
import { categoriesApi, ProductModel, productsApi } from '@/entities/Product';
import { AllProductsModel } from '@/entities/Product/model/AllProductsModel.ts';

export const extraArgument = {
    categoriesApi,
    productsApi,
};

export const store = configureStore({
    reducer: {
        [ProductModel.reducerPath]: ProductModel.reducer,
        [AllProductsModel.reducerPath]: AllProductsModel.reducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument } }).concat(baseApi.middleware),
});
