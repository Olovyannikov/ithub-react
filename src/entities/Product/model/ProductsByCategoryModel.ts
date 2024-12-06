import { createAppAsyncThunk, createSlice } from '@/shared/lib/redux.ts';
import type { CategoryByIdDto } from '../api/dto';
import type { ProductsModelState } from './types';
import { reducers } from './reducers';
import { selectors } from './selectors';

export const fetchProducts = createAppAsyncThunk<CategoryByIdDto, number>('products/fetchProducts', (id, thunkAPI) => {
    return thunkAPI.extra.categoriesApi.getCategoryProductsById(id);
});

const initialState: ProductsModelState<CategoryByIdDto> = {
    isLoading: true,
    isDiscounted: false,
    hasFilters: false,
    products: null,
    priceFrom: null,
    priceTo: null,
    sortState: 'Default',
    isIdle: true,
};

export const ProductModel = createSlice({
    name: 'product',
    initialState,
    reducers: reducers,
    selectors: selectors,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        });

        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = false;
        });
    },
});
