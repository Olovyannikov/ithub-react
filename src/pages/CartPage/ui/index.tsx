import { RootLayout } from '@/widgets/RootLayout';
import { Container } from '@mantine/core';
import { Contacts } from '@/widgets/Contacts';
import { CartContainer } from '@/widgets/CartContainer';

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
