import { Box, Container, Divider, Flex, Image } from '@mantine/core';

import { Navigation } from '../Navigation';
import { CartButton, CartModel } from '@/entities/Cart';
import { Link } from 'react-router';
import { useAppSelector } from '@/shared/lib/redux.ts';

import s from './Header.module.css';

export const Header = () => {
    const productsCounter = useAppSelector(CartModel.selectors.selectCartCount);

    return (
        <Box component='header'>
            <Container py='xl'>
                <Flex align='center' justify='space-between'>
                    <Link to='/' relative={'path'}>
                        <Image className={s.logo} width={70} height={70} src='/logo.svg' alt='Logotype' />
                    </Link>
                    <Navigation />
                    <CartButton counter={productsCounter} />
                </Flex>
            </Container>
            <Divider />
        </Box>
    );
};
