import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <BrowserRouter>
            <ErrorBoundary>App</ErrorBoundary>
        </BrowserRouter>
    </StrictMode>
);
