import { createBrowserRouter } from 'react-router';

import { AllProductsPageLazy } from '@/pages/AllProductsPage';
import { AllSalesPageLazy } from '@/pages/AllSalesPage';
import { CartPageLazy } from '@/pages/CartPage';
import { CategoriesPageLazy } from '@/pages/CategoriesPage';
import { CategoryPageLazy } from '@/pages/CategoryPage';
import { IndexPageLazy } from '@/pages/IndexPage';
import { NotFoundPageLazy } from '@/pages/NotFoundPage';
import { ProductPageLazy } from '@/pages/ProductPage/ui/lazy.ts';

import { Loaders } from './loaders.ts';

export const AppRoutes = {
    INDEX: 'index',
    CATEGORIES: 'categories',
    CATEGORY: 'category',
    ALL_PRODUCTS: 'products',
    ALL_SALES: 'sales',
    CURRENT_PRODUCT: 'product',
    CART: 'cart',
    NOT_FOUND: 'notFound',
} as const;

type Keys = keyof typeof AppRoutes;
type AppRoute = (typeof AppRoutes)[Keys];

const RouterPaths: Record<AppRoute, string> = {
    [AppRoutes.INDEX]: '/',
    [AppRoutes.CATEGORIES]: '/categories',
    [AppRoutes.CATEGORY]: '/categories/:id',
    [AppRoutes.ALL_PRODUCTS]: '/products',
    [AppRoutes.ALL_SALES]: '/sales',
    [AppRoutes.CURRENT_PRODUCT]: '/product/:id',
    [AppRoutes.CART]: '/cart',
    [AppRoutes.NOT_FOUND]: '*',
};

// eslint-disable-next-line react-refresh/only-export-components
export const routerConfig = createBrowserRouter([
    {
        path: RouterPaths.index,
        Component: IndexPageLazy,
        loader: Loaders.index,
    },
    {
        path: RouterPaths.categories,
        Component: CategoriesPageLazy,
    },
    {
        path: RouterPaths.category,
        Component: CategoryPageLazy,
        loader: Loaders.category,
    },
    {
        path: RouterPaths.products,
        Component: AllProductsPageLazy,
        loader: Loaders.products,
    },
    {
        path: RouterPaths.sales,
        Component: AllSalesPageLazy,
        loader: Loaders.products,
    },
    {
        path: RouterPaths.product,
        Component: ProductPageLazy,
        loader: Loaders.product,
    },
    {
        path: RouterPaths.cart,
        Component: CartPageLazy,
    },
    {
        path: RouterPaths.notFound,
        Component: NotFoundPageLazy,
    },
]);
