import { createAppAsyncThunk, createSlice } from '@/shared/lib/redux.ts';
import type { ProductDto } from '../api/dto.ts';
import type { PayloadAction } from '@reduxjs/toolkit';
import { isNumberLike } from '@mantine/core';

export const fetchAllProducts = createAppAsyncThunk<ProductDto, void>('allProducts/fetchAllProducts', (_, thunkAPI) => {
    return thunkAPI.extra.productsApi.getAllProducts();
});

interface AllProductsModelState {
    isDiscounted: boolean;
    isLoading: boolean;
    products: ProductDto | null;
    filteredProducts: ProductDto;
    hasFilters: boolean;
    priceFrom: number | null;
    priceTo: number | null;
    sortState: 'Asc' | 'Desc' | 'Default' | string;
}

const initialState: AllProductsModelState = {
    isLoading: true,
    isDiscounted: false,
    hasFilters: false,
    products: null,
    filteredProducts: [],
    priceFrom: null,
    priceTo: null,
    sortState: 'Default',
};

export const AllProductsModel = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {
        setProductsIsDiscounted: (state) => {
            state.isDiscounted = !state.isDiscounted;
            if (state.isDiscounted) state.hasFilters = true;
        },
        setPriceFrom: (state, { payload }: PayloadAction<number>) => {
            state.priceFrom = payload;
            if (isNumberLike(state.priceFrom)) state.hasFilters = true;
        },
        setPriceTo: (state, { payload }: PayloadAction<number>) => {
            state.priceTo = payload;
            if (isNumberLike(state.priceTo)) state.hasFilters = true;
        },
        setSortState: (state, { payload }: PayloadAction<'Asc' | 'Desc' | 'Default' | string>) => {
            state.sortState = payload;
            if (state.sortState !== 'Default') state.hasFilters = true;
        },
    },
    selectors: {
        selectIsDiscounted: (state) => state.isDiscounted,
        selectHasFilters: (state) => state.hasFilters,
        selectProducts: (state) => state.products,
        selectSortState: (state) => state.sortState,
        selectFilteredProducts: (state) => {
            let currentProduct = [...(state.products ?? [])];

            if (!currentProduct) return state.products;

            if (state.isDiscounted) {
                currentProduct = currentProduct?.filter((product) => Number(product.discont_price) > 0);
            }

            if (state.priceFrom) {
                currentProduct = currentProduct.filter((product) => Number(product.price) >= (state.priceFrom ?? 0));
            }

            if (state.priceTo) {
                currentProduct = currentProduct.filter((product) => Number(product.price) <= (state.priceTo ?? 0));
            }

            if (state.sortState === 'Asc') {
                currentProduct = currentProduct.sort((a, b) => a.price - b.price);
            }

            if (state.sortState === 'Desc') {
                currentProduct = currentProduct.sort((a, b) => b.price - a.price);
            }

            return currentProduct;
        },
        selectIsLoading: (state) => state.isLoading,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        });

        builder.addCase(fetchAllProducts.pending, (state) => {
            state.isLoading = false;
        });
    },
});
