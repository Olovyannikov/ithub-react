import { Container } from '@mantine/core';

import { AllProductsList, AllProductsModel, type ProductDto } from '@/entities/Product';
import { AllProductsFilterBar } from '@/features/AllProductsFilters';
import { useAppSelector } from '@/shared/lib/redux.ts';
import { PageLoader } from '@/shared/ui';
import { Contacts } from '@/widgets/Contacts';
import { RootLayout } from '@/widgets/RootLayout';

const { selectHasFilters, selectProducts, selectFilteredProducts, selectIsLoading } = AllProductsModel.selectors;

export default function AllProductsPage() {
    const isLoading = useAppSelector(selectIsLoading);
    const showFiltered = useAppSelector(selectHasFilters);

    const products = useAppSelector(selectProducts) as ProductDto;
    const filteredProducts = useAppSelector(selectFilteredProducts) as ProductDto;

    if (isLoading) return <PageLoader />;

    if (!products) return;

    return (
        <RootLayout title='All Products'>
            <Container>
                <AllProductsList
                    title='All Products'
                    products={showFiltered && filteredProducts ? filteredProducts : products}
                    filtersSlot={<AllProductsFilterBar />}
                />
                <Contacts />
            </Container>
        </RootLayout>
    );
}
