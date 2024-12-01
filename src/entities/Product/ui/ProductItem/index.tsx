import { Badge, Card, Group, Image, Text } from '@mantine/core';
import { Link } from 'react-router';

interface ProductItemProps {
    id: string | number;
    image: string;
    title: string;
    price: number;
    discount?: number;
    discountPrice?: number;
}

export const ProductItem = ({ id, image, title, discount, price, discountPrice }: ProductItemProps) => {
    return (
        <Card h='100%' component={Link} to={`/product/${id}`} shadow='sm' padding='lg' radius='md' withBorder>
            <Card.Section pos='relative'>
                {discount && (
                    <Badge radius='xs' miw={68} mih={34} pos='absolute' top={16} right={16}>
                        <Text fw='bold' fz={20}>
                            -{discount}%
                        </Text>
                    </Badge>
                )}
                <Image src={image} height={284} alt={title} />
            </Card.Section>

            <Group justify='space-between' mt='md' mb='md'>
                <Text lineClamp={1} fw={500}>
                    {title}
                </Text>
            </Group>

            <Group align='end'>
                <Text fz={40} lh={1}>
                    ${discountPrice}
                </Text>
                <Text fz={20} lh={1} c='gray' td='line-through'>
                    ${price}
                </Text>
            </Group>
        </Card>
    );
};
