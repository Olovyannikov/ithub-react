import { Box, Button, Group, Paper, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';

import { CartEmpty, CartModel, CartProduct } from '@/entities/Cart';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux.ts';
import { Top } from '@/shared/ui';

import { OrderDetails, SuccessModal } from './ui';

export const CartContainer = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(CartModel.selectors.selectCartProducts);
    const count = useAppSelector(CartModel.selectors.selectCartCount);
    const total = useAppSelector(CartModel.selectors.selectCartTotalPrice);

    const [opened, { open, close }] = useDisclosure(false);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            phone: '',
            email: '',
        },

        validate: {
            name: (value) => (value.length < 1 ? 'Required Field' : null),
            phone: (value) => (value.length < 1 ? 'Required Field' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    return (
        <>
            <Box component='section'>
                <Top my={40} title='Shopping Cart' href='/products' linkLabel='Back to the store' />
                {!count && <CartEmpty />}
                <Group gap={32} align='start'>
                    {products?.map((product) => (
                        <CartProduct
                            {...product}
                            key={product.id}
                            increment={product.count ?? 1}
                            setDecrement={() => dispatch(CartModel.actions.removeCurrentProduct(product.id))}
                            setIncrement={() =>
                                dispatch(
                                    CartModel.actions.addProductToCart({ ...product, count: (product.count ?? 0) + 1 })
                                )
                            }
                            removeAllProducts={() =>
                                dispatch(CartModel.actions.removeAllSameProductsFromCart(product.id))
                            }
                        />
                    ))}
                    <Paper w='100%' maw={548} bg='gray.1' p={32} radius='sm' display={count === 0 ? 'none' : 'block'}>
                        <OrderDetails count={count} total={total} />
                        <Box
                            component='form'
                            onSubmit={form.onSubmit(
                                (values) => {
                                    open();
                                    // test
                                    //eslint-disable-next-line no-console
                                    console.log({ values });
                                },
                                (errors) => {
                                    // test
                                    //eslint-disable-next-line no-console
                                    console.log(errors);
                                }
                            )}
                        >
                            <Stack gap={16}>
                                <TextInput
                                    size='lg'
                                    placeholder='Name'
                                    key={form.key('name')}
                                    {...form.getInputProps('name')}
                                />
                                <TextInput
                                    size='lg'
                                    placeholder='Phone number'
                                    key={form.key('phone')}
                                    {...form.getInputProps('phone')}
                                />
                                <TextInput
                                    size='lg'
                                    placeholder='Email'
                                    key={form.key('email')}
                                    {...form.getInputProps('email')}
                                />
                                <Button
                                    type='submit'
                                    mt={16}
                                    bg={opened ? 'white' : 'green'}
                                    c={opened ? 'green' : 'white'}
                                    size='lg'
                                >
                                    {opened ? 'The order is Placed' : 'Order'}
                                </Button>
                            </Stack>
                        </Box>
                    </Paper>
                </Group>
            </Box>
            <SuccessModal close={close} opened={opened} />
        </>
    );
};
