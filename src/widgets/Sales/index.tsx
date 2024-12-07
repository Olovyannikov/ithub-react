import { Carousel } from '@mantine/carousel';
import { Box, Center, Container, Loader } from '@mantine/core';

import { ProductItem, useGetAllSalesQuery } from '@/entities/Product';
import { Top } from '@/shared/ui';

export const Sales = () => {
    const { data: sales, isLoading } = useGetAllSalesQuery();

    return (
        <Box component='section' mb={80}>
            <Container>
                <Top mb={40} title='Sale' href='/sale' linkLabel='All sales' />
                {isLoading && (
                    <Center>
                        <Loader />
                    </Center>
                )}
                {sales && (
                    <Carousel
                        slideGap={32}
                        withControls={false}
                        slideSize={{
                            xs: '100%',
                            md: '50%',
                            lg: '25%',
                        }}
                        height={422}
                        align='start'
                    >
                        {sales?.map((sale) => (
                            <Carousel.Slide key={sale.id}>
                                <ProductItem {...sale} />
                            </Carousel.Slide>
                        ))}
                    </Carousel>
                )}
            </Container>
        </Box>
    );
};
