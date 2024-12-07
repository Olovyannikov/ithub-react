import { Link } from 'react-router';
import { Button, Container, Image, Stack, Text, Title } from '@mantine/core';

import { Contacts } from '@/widgets/Contacts';
import { RootLayout } from '@/widgets/RootLayout';

export default function NotFoundPage() {
    return (
        <RootLayout title='404 | Not Found'>
            <Container my={80}>
                <Stack m='auto' maw={690}>
                    <Stack ta='center' gap={32} mb={32}>
                        <Image src='/images/404.webp' alt='Not Found' />
                        <Title fz={64} lh='70px'>
                            Page Not Found
                        </Title>
                        <Text c='gray' fw={500} fz={20}>
                            We’re sorry, the page you requested could not be found. <br /> Please go back to the
                            homepage.
                        </Text>
                    </Stack>
                    <Button size='xl' m='auto' component={Link} to='/'>
                        Go home
                    </Button>
                </Stack>
            </Container>
            <Contacts />
        </RootLayout>
    );
}
