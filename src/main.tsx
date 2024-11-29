import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { AppRouter } from '@/app/providers/Router/ui';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <ThemeProvider>
            <ErrorBoundary>
                <AppRouter />
            </ErrorBoundary>
        </ThemeProvider>
    </StrictMode>
);
