import { ActionIcon, Button, Group, Text } from '@mantine/core';
import { useState } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid';
import { CartModel, CartProduct } from '@/entities/Cart';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux.ts';

interface AddProductToCartProps {
    product: CartProduct;
}

export const AddProductToCart = ({ product }: AddProductToCartProps) => {
    const [increment, setIncrement] = useState(0);

    const dispatch = useAppDispatch();

    const prods = useAppSelector(CartModel.selectors.selectCartProducts);
    const total = useAppSelector(CartModel.selectors.selectCartTotalPrice);
    const count = useAppSelector(CartModel.selectors.selectCartCount);

    console.log({ prods, total, count });

    return (
        <Group my={32}>
            <Group gap={0}>
                <ActionIcon
                    variant='default'
                    radius='xxs'
                    c='gray'
                    size='lg'
                    onClick={() => (increment < 1 ? null : setIncrement((increment) => increment - 1))}
                >
                    <MinusIcon width={16} />
                </ActionIcon>
                <Text px='lg'>{increment}</Text>
                <ActionIcon
                    c='gray'
                    size='lg'
                    variant='default'
                    radius='xxs'
                    onClick={() => setIncrement((increment) => increment + 1)}
                >
                    <PlusIcon width={16} />
                </ActionIcon>
            </Group>
            <Button
                flex={1}
                maw={316}
                radius='xxs'
                onClick={() => dispatch(CartModel.actions.addProductToCart({ ...product, count: increment }))}
            >
                Add to Cart
            </Button>
        </Group>
    );
};
