import { createBrowserRouter } from 'react-router';
import { IndexPageLazy } from '@/pages/IndexPage';
import { NotFoundPageLazy } from '@/pages/NotFoundPage';
import { Loaders } from './loaders.ts';
import { CategoriesPageLazy } from '@/pages/CategoriesPage';

export const AppRoutes = {
    INDEX: 'index',
    CATEGORIES: 'categories',
    NOT_FOUND: 'notFound',
} as const;

type Keys = keyof typeof AppRoutes;
type AppRoute = (typeof AppRoutes)[Keys];

const RouterPaths: Record<AppRoute, string> = {
    [AppRoutes.INDEX]: '/',
    [AppRoutes.CATEGORIES]: '/categories',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig = createBrowserRouter([
    {
        path: RouterPaths.index,
        element: <IndexPageLazy />,
        loader: Loaders.index,
    },
    {
        path: RouterPaths.categories,
        element: <CategoriesPageLazy />,
    },
    {
        path: RouterPaths.notFound,
        element: <NotFoundPageLazy />,
    },
]);
