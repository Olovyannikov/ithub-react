import { Box, Container } from '@mantine/core';
import { Top } from '@/shared/ui';
import { useLoaderData } from 'react-router';
import { ProductItem } from '@/entities/Product';
import { Carousel } from '@mantine/carousel';
import { calculateDiscount } from '@/shared/lib';

export const Sales = () => {
    const { sale } = useLoaderData();

    console.log(sale);

    return (
        <Box component='section' mb={80}>
            <Container>
                <Top mb={40} title='Sale' href='/sale' linkLabel='All sales' />
                <Carousel slideGap={32} withControls={false} slideSize={'25%'} height={422} align='start'>
                    {sale?.map(
                        (sale: { price: number; discont_price?: number; title: string; image: string; id: number }) => (
                            <Carousel.Slide key={sale.id}>
                                <ProductItem
                                    discount={calculateDiscount({
                                        price: sale.price,
                                        discountPrice: sale.discont_price ?? 0,
                                    })}
                                    id={sale.id}
                                    image={sale.image}
                                    title={sale.title}
                                    price={sale.price}
                                    discountPrice={sale.discont_price}
                                />
                            </Carousel.Slide>
                        )
                    )}
                </Carousel>
            </Container>
        </Box>
    );
};
