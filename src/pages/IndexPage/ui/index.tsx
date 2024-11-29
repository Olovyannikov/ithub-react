import { RootLayout } from '@/widgets/RootLayout';
import { BackgroundImage, Button, Stack, Title } from '@mantine/core';

export default function IndexPage() {
    return (
        <RootLayout title='Main Page'>
            <section>
                <BackgroundImage src='/images/hero@2x.jpg'>
                    <Stack pt={80} px={40} pb={210} gap={40}>
                        <Title c='white' fz={96}>
                            Amazing Discounts <br /> on Garden Products!
                        </Title>
                        <Button w='fit-content' size='xl' miw={218}>
                            Check out
                        </Button>
                    </Stack>
                </BackgroundImage>
            </section>
        </RootLayout>
    );
}
