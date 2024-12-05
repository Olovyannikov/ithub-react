import { RootLayout } from '@/widgets/RootLayout';
import { CategoriesList, ProductModel } from '@/entities/Product';
import { Container } from '@mantine/core';
import { Contacts } from '@/widgets/Contacts';
import { FilterBar } from '@/features/ProductsFilters';
import { useAppSelector } from '@/shared/lib/redux';
import { PageLoader } from '@/shared/ui';

const { selectHasFilters, selectFilteredProducts, selectProducts, selectIsLoading } = ProductModel.selectors;

export default function CategoryPage() {
    const showFiltered = useAppSelector(selectHasFilters);
    const products = useAppSelector(selectProducts);
    const filteredProducts = useAppSelector(selectFilteredProducts);
    const isLoading = useAppSelector(selectIsLoading);

    if (isLoading) return <PageLoader />;

    if (!products) return;

    return (
        <RootLayout title={`Category ${products?.category.title}`}>
            <Container>
                <CategoriesList
                    title={products?.category.title}
                    categories={showFiltered && filteredProducts ? filteredProducts : products?.data}
                    filtersSlot={<FilterBar model='categories' />}
                />
                <Contacts />
            </Container>
        </RootLayout>
    );
}
