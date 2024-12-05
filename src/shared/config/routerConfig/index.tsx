import { createBrowserRouter } from 'react-router';
import { IndexPageLazy } from '@/pages/IndexPage';
import { NotFoundPageLazy } from '@/pages/NotFoundPage';
import { Loaders } from './loaders.ts';
import { CategoriesPageLazy } from '@/pages/CategoriesPage';
import { CategoryPageLazy } from '@/pages/CategoryPage';
import { AllProductsPageLazy } from '@/pages/AllProductsPage';

export const AppRoutes = {
    INDEX: 'index',
    CATEGORIES: 'categories',
    CATEGORY: 'category',
    ALL_PRODUCTS: 'products',
    NOT_FOUND: 'notFound',
} as const;

type Keys = keyof typeof AppRoutes;
type AppRoute = (typeof AppRoutes)[Keys];

const RouterPaths: Record<AppRoute, string> = {
    [AppRoutes.INDEX]: '/',
    [AppRoutes.CATEGORIES]: '/categories',
    [AppRoutes.CATEGORY]: '/categories/:id',
    [AppRoutes.ALL_PRODUCTS]: '/products',
    [AppRoutes.NOT_FOUND]: '*',
};

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
        path: RouterPaths.notFound,
        Component: NotFoundPageLazy,
    },
]);
