import { store } from '@/app/store';
import { ProductApi, CategoriesApi, fetchProducts } from '@/entities/Product';
import { LoaderFunctionArgs } from 'react-router';
import { fetchAllProducts } from '@/entities/Product/model/AllProductsModel.ts';

export const Loaders = {
    index: async () => {
        store.dispatch(CategoriesApi.util.prefetch('getAllCategories', undefined, {}));
        store.dispatch(ProductApi.util.prefetch('getAllSales', undefined, {}));
        return null;
    },
    categories: async () => {
        store.dispatch(CategoriesApi.util.prefetch('getAllCategories', undefined, {}));
        return null;
    },
    category: async ({ params }: LoaderFunctionArgs<{ params: { id: string } }>) => {
        store.dispatch(fetchProducts(Number(params.id)));
        return null;
    },
    products: async () => {
        store.dispatch(fetchAllProducts());
        return null;
    },
};
