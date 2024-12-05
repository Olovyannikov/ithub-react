import { RootLayout } from '@/widgets/RootLayout';
import { Container } from '@mantine/core';
import { Contacts } from '@/widgets/Contacts';
import { AllProductsList, AllProductsModel } from '@/entities/Product';
import { useAppSelector } from '@/shared/lib/redux.ts';
import { PageLoader } from '@/shared/ui';
import { FilterBar } from '@/features/ProductsFilters';

const { selectHasFilters, selectProducts, selectFilteredProducts, selectIsLoading } = AllProductsModel.selectors;

export default function AllProductsPage() {
    const showFiltered = useAppSelector(selectHasFilters);
    const products = useAppSelector(selectProducts);
    const filteredProducts = useAppSelector(selectFilteredProducts);
    const isLoading = useAppSelector(selectIsLoading);

    if (isLoading) return <PageLoader />;

    if (!products) return;

    return (
        <RootLayout title='All Products'>
            <Container>
                <AllProductsList
                    title='All Products'
                    products={showFiltered && filteredProducts ? filteredProducts : products}
                    filtersSlot={<FilterBar model='products' />}
                />
                <Contacts />
            </Container>
        </RootLayout>
    );
}
