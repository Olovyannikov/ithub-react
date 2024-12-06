import { RootLayout } from '@/widgets/RootLayout';
import { Container } from '@mantine/core';
import { Contacts } from '@/widgets/Contacts';
import { AllProductsList, AllProductsModel, type ProductDto } from '@/entities/Product';
import { useAppSelector } from '@/shared/lib/redux.ts';
import { PageLoader } from '@/shared/ui';
import { AllProductsFilterBar } from '@/features/AllProductsFilters';

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
