import { MantineProvider as Provider } from '@mantine/core';
import type { PropsWithChildren } from 'react';
import { theme } from './theme';
import { NavigationProgress } from '@mantine/nprogress';

import '.././../styles/index.css';

export const ThemeProvider = ({ children }: PropsWithChildren) => (
    <Provider theme={theme}>
        <NavigationProgress />
        {children}
    </Provider>
);
