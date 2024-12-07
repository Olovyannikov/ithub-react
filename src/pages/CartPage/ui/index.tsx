import { Container } from '@mantine/core';

import { CartContainer } from '@/widgets/CartContainer';
import { Contacts } from '@/widgets/Contacts';
import { RootLayout } from '@/widgets/RootLayout';

export default function CartPage() {
    return (
        <RootLayout title='Cart'>
            <Container mb={90}>
                <CartContainer />
            </Container>
            <Contacts />
        </RootLayout>
    );
}
