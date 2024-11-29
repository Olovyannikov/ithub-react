import { Suspense } from 'react';
import { RouterProvider } from 'react-router';
import { routerConfig } from '@/shared/config/routerConfig';

export const AppRouter = () => {
    return (
        <Suspense fallback='Loading...'>
            <RouterProvider router={routerConfig} />
        </Suspense>
    );
};
