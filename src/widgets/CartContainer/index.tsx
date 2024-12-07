import { Box, Button, Group, Modal, Paper, Stack, Text, TextInput, Title } from '@mantine/core';
import { Top } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux.ts';
import { CartEmpty, CartModel, CartProduct } from '@/entities/Cart';
import { getDeclinations } from '@/shared/lib/getDeclinations.ts';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';

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
                        <Box mb={32}>
                            <Title mb={24} fz={40}>
                                Order details
                            </Title>
                            <Text c='gray' fz={40} fw={500}>
                                {getDeclinations({ count, one: 'item', few: 'items', many: 'items' })}
                            </Text>
                            <Group justify='space-between' align='baseline'>
                                <Text c='gray' fz={40} fw={500}>
                                    Total
                                </Text>
                                <Text fw={700} fz={64} lh={1}>
                                    ${total}
                                </Text>
                            </Group>
                        </Box>
                        <Box
                            onSubmit={form.onSubmit(
                                (values) => {
                                    open();
                                    console.log({ values });
                                },
                                (errors) => {
                                    console.log(errors);
                                }
                            )}
                            component='form'
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
            <Modal.Root centered opened={opened} onClose={close}>
                <Modal.Overlay />
                <Modal.Content>
                    <Modal.Header bg='green.9' c='white'>
                        <Modal.Title fw={500} fz={40}>
                            Congratulations!
                        </Modal.Title>
                        <Modal.CloseButton c='white' size='xl' />
                    </Modal.Header>
                    <Modal.Body c='white' bg='green.9'>
                        <Text fz={20} lh={1} fw={500}>
                            Your order has been successfully placed on the website.
                        </Text>
                        <br />
                        <Text fz={20} lh={1} fw={500}>
                            A manager will contact you shortly to confirm your order.
                        </Text>
                    </Modal.Body>
                </Modal.Content>
            </Modal.Root>
        </>
    );
};
