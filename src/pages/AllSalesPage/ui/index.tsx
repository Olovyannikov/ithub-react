import { RootLayout } from '@/widgets/RootLayout';
import { Container } from '@mantine/core';
import { Contacts } from '@/widgets/Contacts';
import { AllProductsList, AllProductsModel, type ProductDto } from '@/entities/Product';
import { useAppSelector } from '@/shared/lib/redux.ts';
import { PageLoader } from '@/shared/ui';
import { AllProductsFilterBar } from '@/features/AllProductsFilters';

export default function AllSalesPage() {
    const isLoading = useAppSelector(AllProductsModel.selectors.selectIsLoading);
    const products = useAppSelector((state) =>
        AllProductsModel.selectors.selectFilteredProducts(state, true)
    ) as ProductDto;

    if (isLoading) return <PageLoader />;

    if (!products) return null;

    return (
        <RootLayout title='Discounted Items'>
            <Container>
                <AllProductsList
                    title='Discounted Items'
                    products={products}
                    filtersSlot={<AllProductsFilterBar showDiscountPanel={false} />}
                />
                <Contacts />
            </Container>
        </RootLayout>
    );
}
