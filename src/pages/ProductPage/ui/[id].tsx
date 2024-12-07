import { Box, Container } from '@mantine/core';

import { AllProductsModel, ProductCard } from '@/entities/Product';
import { AddProductToCart } from '@/features/AddProductToCart';
import { useAppSelector } from '@/shared/lib/redux.ts';
import { Contacts } from '@/widgets/Contacts';
import { RootLayout } from '@/widgets/RootLayout';

export default function ProductPage() {
    const product = useAppSelector(AllProductsModel.selectors.selectCurrentProduct);

    if (!product) return null;

    return (
        <RootLayout title={`${product?.title}`}>
            <Container>
                <Box component='section' mt={116} mb={80}>
                    <ProductCard {...product} addToCartSlot={<AddProductToCart product={product} />} />
                </Box>
                <Contacts />
            </Container>
        </RootLayout>
    );
}
