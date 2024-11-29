import { Box, Container, Group } from '@mantine/core';
import { Top } from '@/shared/ui';
import { useLoaderData } from 'react-router';
import { Card } from '@/entities/Category';
import { Carousel } from '@mantine/carousel';

export const Categories = () => {
    const { data } = useLoaderData();

    console.log(data);

    return (
        <Box component='section' mb={80}>
            <Container>
                <Top mb={80} title='Categories' href='/categories' linkLabel='All categories' />
                <Carousel withControls={false} slideSize='24%' height={392} align='start'>
                    {data?.map((category: { title: string | undefined; image: string | undefined }) => (
                        <Carousel.Slide key={category.title}>
                            <Card category={category.title} imageSrc={category.image} />
                        </Carousel.Slide>
                    ))}
                </Carousel>
                <Group gap={32}></Group>
            </Container>
        </Box>
    );
};
