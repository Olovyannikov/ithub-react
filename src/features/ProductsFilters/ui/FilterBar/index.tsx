import { useId } from 'react';
import { Box, Checkbox, Group, Select, Text, TextInput } from '@mantine/core';
import { ProductModel, AllProductsModel } from '@/entities/Product';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux.ts';

interface FilterBarProps {
    model: 'products' | 'categories';
}

export const FilterBar = ({ model = 'categories' }: FilterBarProps) => {
    const checkboxId = useId();

    const { selectIsDiscounted, selectSortState } = (model === 'categories' ? ProductModel : AllProductsModel)
        .selectors;
    const { setProductsIsDiscounted, setPriceTo, setPriceFrom, setSortState } = (
        model === 'categories' ? ProductModel : AllProductsModel
    ).actions;

    const dispatch = useAppDispatch();
    const isDiscounted = useAppSelector(selectIsDiscounted);
    const sortState = useAppSelector(selectSortState);

    return (
        <Box my={40} component='form'>
            <Group gap={40}>
                <Group gap='md'>
                    <Text fw='bold'>Price</Text>
                    <TextInput onChange={(e) => dispatch(setPriceFrom(+e.target.value))} maw={112} placeholder='from' />
                    <TextInput onChange={(e) => dispatch(setPriceTo(+e.target.value))} maw={112} placeholder='to' />
                </Group>
                <Checkbox.Group onClick={() => dispatch(setProductsIsDiscounted())}>
                    <Group>
                        <Text style={{ cursor: 'pointer' }} htmlFor={checkboxId} fw='bold' component='label'>
                            Discounted items
                        </Text>
                        <Checkbox.Indicator
                            style={{ cursor: 'pointer' }}
                            id={checkboxId}
                            checked={isDiscounted}
                            size='lg'
                            radius='xxs'
                        />
                    </Group>
                </Checkbox.Group>
                <Group>
                    <Text fw='bold'>Sorted</Text>
                    <Select
                        data={['Default', 'Asc', 'Desc']}
                        defaultValue={sortState}
                        onChange={(e) => dispatch(setSortState(e ?? 'Default'))}
                    />
                </Group>
            </Group>
        </Box>
    );
};
