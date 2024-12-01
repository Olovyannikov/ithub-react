import { Box, Container, Group } from '@mantine/core';
import { Top } from '@/shared/ui';
import { useLoaderData } from 'react-router';
import { Card } from '@/entities/Category';

interface CategoriesProps {
    showAll?: boolean;
}

export const Categories = ({ showAll = false }: CategoriesProps) => {
    const { categories } = useLoaderData();

    const renderCategories = showAll ? categories : categories.slice(0, 4);
    const renderTitle = showAll
        ? {}
        : {
              href: '/categories',
              linkLabel: 'All categories',
          };

    return (
        <Box component='section' mb={80}>
            <Container>
                <Top mb={40} title='Categories' {...renderTitle} />
                <Group h={392}>
                    {renderCategories.map((category: { title?: string; image?: string; id?: number }) => (
                        <Card key={category.id} category={category.title} imageSrc={category.image} id={category.id} />
                    ))}
                </Group>
            </Container>
        </Box>
    );
};
