import { Container, Flex, Image } from '@mantine/core';

import s from './Header.module.css';
import { Navigation } from '../Navigation';
import { CartButton } from '@/entities/Cart';

export const Header = () => {
    return (
        <header>
            <Container py='xl'>
                <Flex align='center' justify='space-between'>
                    <Image className={s.logo} width={70} height={70} src='/logo.svg' alt='Logotype' />
                    <Navigation />
                    <CartButton counter={0} />
                </Flex>
            </Container>
        </header>
    );
};
