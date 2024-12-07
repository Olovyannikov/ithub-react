import { Box, Center, Container, Grid, Loader } from '@mantine/core';

import { CategoryCard, useGetAllCategoriesQuery } from '@/entities/Product';
import { Top } from '@/shared/ui';

interface CategoriesProps {
    showAll?: boolean;
}

export const Categories = ({ showAll = false }: CategoriesProps) => {
    const { data: categories, isLoading } = useGetAllCategoriesQuery();

    const renderCategories = showAll ? categories : categories?.slice(0, 4);
    const renderTitle = showAll
        ? {}
        : {
              href: '/categories',
              linkLabel: 'All categories',
          };

    return (
        <Box component='section' mb={80} mt={116}>
            <Container>
                <Top mb={40} title='Categories' {...renderTitle} />
                {isLoading && (
                    <Center>
                        <Loader />
                    </Center>
                )}
                <Grid hidden={!renderCategories} grow mih={392}>
                    {renderCategories?.map((category: { title?: string; image?: string; id?: number }) => (
                        <Grid.Col
                            key={category.id}
                            span={{
                                xs: 12,
                                md: 4,
                                lg: 1,
                            }}
                        >
                            <CategoryCard category={category.title} imageSrc={category.image} id={category.id} />
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};
