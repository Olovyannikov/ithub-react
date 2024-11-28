import type { RouteProps } from 'react-router';
import {IndexPageLazy} from "@/pages/IndexPage";
import {NotFoundPageLazy} from "@/pages/NotFoundPage";

export enum AppRoutes {
    INDEX = 'index',
    NOT_FOUND = 'notFound',
}

export const RouterPaths: Record<AppRoutes, string> = {
    [AppRoutes.INDEX]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.INDEX]: {
        path: RouterPaths.index,
        element: <IndexPageLazy />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPaths.notFound,
        element: <NotFoundPageLazy />,
    },
};