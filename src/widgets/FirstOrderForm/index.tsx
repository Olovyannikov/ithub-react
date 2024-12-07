import { Box, Button, Container, Group, Image, Paper, Stack, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

export const FirstOrderForm = () => {
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
        <Box component='section' mb={80}>
            <Container>
                <Paper
                    radius='sm'
                    pt={32}
                    px={32}
                    style={{
                        background: 'linear-gradient(#0B710B, #339933)',
                    }}
                >
                    <Title fz={64} c='white' mb='xl' ta='center'>
                        5% off on the first order
                    </Title>
                    <Group gap={32}>
                        <Image maw={748} mah={360} src='/images/off_price_form_image@2x.webp' />
                        <form
                            style={{ flex: '1' }}
                            onSubmit={form.onSubmit(
                                (values) => {
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
                                <Button type='submit' my={16} bg='white' c='black' size='lg'>
                                    Get a discount
                                </Button>
                            </Stack>
                        </form>
                    </Group>
                </Paper>
            </Container>
        </Box>
    );
};
