import { Image, Stack, Text } from '@mantine/core';

interface CardProps {
    imageSrc?: string;
    category?: string;
}

export const Card = ({ category, imageSrc }: CardProps) => {
    return (
        <Stack h={'100%'}>
            <Image flex={1} fit='cover' radius='lg' w={316} h={350} src={imageSrc} alt={category} />
            <Text fz={20} ta='center'>
                {category}
            </Text>
        </Stack>
    );
};
