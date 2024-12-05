import { Box, Container, Divider, Flex, Image } from '@mantine/core';

import { Navigation } from '../Navigation';
import { CartButton } from '@/entities/Cart';
import { Link } from 'react-router';
import s from './Header.module.css';

export const Header = () => {
    return (
        <Box component='header'>
            <Container py='xl'>
                <Flex align='center' justify='space-between'>
                    <Link to='/' relative={'path'}>
                        <Image className={s.logo} width={70} height={70} src='/logo.svg' alt='Logotype' />
                    </Link>
                    <Navigation />
                    <CartButton counter={0} />
                </Flex>
            </Container>
            <Divider />
        </Box>
    );
};
