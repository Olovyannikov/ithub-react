import { BackgroundImage, BackgroundImageProps, Stack, Title } from '@mantine/core';
import type { PropsWithChildren } from 'react';

interface HeroProps extends BackgroundImageProps {
    title: string;
}

export const Hero = ({ title, children, ...props }: PropsWithChildren<HeroProps>) => {
    return (
        <BackgroundImage {...props}>
            <Stack pt={80} px={40} pb={210} gap={40}>
                <Title c='white' fz={96}>
                    {title}
                </Title>
                {children}
            </Stack>
        </BackgroundImage>
    );
};
