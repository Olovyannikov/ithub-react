import { Button, Image, Stack, Text } from '@mantine/core';
import { Link } from 'react-router';

interface CategoryCardProps {
    imageSrc?: string;
    category?: string;
    id?: number;
}

export const CategoryCard = ({ category, imageSrc, id }: CategoryCardProps) => {
    return (
        <Button px={0} h='100%' component={Link} to={`/categories/${id}`} variant='transparent'>
            <Stack h='100%' c='black'>
                <Image flex={1} fit='cover' radius='lg' w={316} mih={350} src={imageSrc} alt={category} />
                <Text fz={20} ta='center'>
                    {category}
                </Text>
            </Stack>
        </Button>
    );
};
