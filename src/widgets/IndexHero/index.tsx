import { Hero } from '@/shared/ui';
import { Box, Button } from '@mantine/core';

export const IndexHero = () => {
    return (
        <Box component='section' mb={80}>
            <Hero src='/images/hero@2x.jpg' title={'Amazing Discounts\non Garden Products!'}>
                <Button w='fit-content' size='xl' miw={218}>
                    Check out
                </Button>
            </Hero>
        </Box>
    );
};
