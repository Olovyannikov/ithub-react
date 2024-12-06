import { RootLayout } from '@/widgets/RootLayout';
import { CategoriesList, type CategoryByIdDto, type ProductDto, ProductModel } from '@/entities/Product';
import { Container } from '@mantine/core';
import { Contacts } from '@/widgets/Contacts';
import { useAppSelector } from '@/shared/lib/redux';
import { PageLoader } from '@/shared/ui';
import { CategoriesFilterBar } from '../../../features/CategoriesProductsFilters';

const { selectHasFilters, selectFilteredProducts, selectProducts, selectIsLoading } = ProductModel.selectors;

export default function CategoryPage() {
    const showFiltered = useAppSelector(selectHasFilters);
    const isLoading = useAppSelector(selectIsLoading);

    const products = useAppSelector(selectProducts) as CategoryByIdDto;
    const filteredProducts = useAppSelector(selectFilteredProducts) as ProductDto;

    if (isLoading) return <PageLoader />;

    if (!products) return;

    return (
        <RootLayout title={`Category ${products?.category.title}`}>
            <Container>
                <CategoriesList
                    title={products?.category.title}
                    categories={showFiltered && filteredProducts ? filteredProducts : products?.data}
                    filtersSlot={<CategoriesFilterBar />}
                />
                <Contacts />
            </Container>
        </RootLayout>
    );
}
