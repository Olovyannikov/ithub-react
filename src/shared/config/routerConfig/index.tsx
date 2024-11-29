import { createBrowserRouter } from 'react-router';
import { IndexPageLazy } from '@/pages/IndexPage';
import { NotFoundPageLazy } from '@/pages/NotFoundPage';
import { Loaders } from './loaders.ts';

export const AppRoutes = {
    INDEX: 'index',
    NOT_FOUND: 'notFound',
} as const;

type Keys = keyof typeof AppRoutes;
type AppRoute = (typeof AppRoutes)[Keys];

const RouterPaths: Record<AppRoute, string> = {
    [AppRoutes.INDEX]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig = createBrowserRouter([
    {
        path: RouterPaths.index,
        element: <IndexPageLazy />,
        loader: Loaders.index,
    },
    {
        path: RouterPaths.notFound,
        element: <NotFoundPageLazy />,
    },
]);
