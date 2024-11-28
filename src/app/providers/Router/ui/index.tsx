import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { routerConfig } from '@/shared/config/routerConfig';

export const AppRouter = () => {
    return (
        <Suspense fallback='Loading...'>
            <Routes>
                {Object.values(routerConfig).map((route) => (
                    <Route key={route.path} {...route} />
                ))}
            </Routes>
        </Suspense>
    );
};