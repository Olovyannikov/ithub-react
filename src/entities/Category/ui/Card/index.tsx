import { Button, Image, Stack, Text } from '@mantine/core';
import { Link } from 'react-router';

interface CardProps {
    imageSrc?: string;
    category?: string;
    id?: number;
}

export const Card = ({ category, imageSrc, id }: CardProps) => {
    return (
        <Button px={0} h='100%' component={Link} to={`/categories/${id}`} variant='transparent'>
            <Stack h='100%' c='black'>
                <Image flex={1} fit='cover' radius='lg' w={316} h={350} src={imageSrc} alt={category} />
                <Text fz={20} ta='center'>
                    {category}
                </Text>
            </Stack>
        </Button>
    );
};
