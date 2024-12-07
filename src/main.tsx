import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { AppRouter } from '@/app/providers/Router/ui';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { store } from '@/app/store';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <ErrorBoundary>
                    <AppRouter />
                </ErrorBoundary>
            </ThemeProvider>
        </Provider>
    </StrictMode>
);
