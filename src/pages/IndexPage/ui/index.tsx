import { RootLayout } from '@/widgets/RootLayout';
import { Hero } from '@/shared/ui';
import { Box, Button } from '@mantine/core';
import { Categories } from '@/widgets/Categories';

export default function IndexPage() {
    return (
        <RootLayout title='Main Page'>
            <Box component='section' mb={80}>
                <Hero src='/images/hero@2x.jpg' title={'Amazing Discounts\non Garden Products!'}>
                    <Button w='fit-content' size='xl' miw={218}>
                        Check out
                    </Button>
                </Hero>
            </Box>
            <Categories />
        </RootLayout>
    );
}
