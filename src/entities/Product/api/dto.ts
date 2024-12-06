import type { Product, Category } from '../types';

export type ProductDto = Product[];

export type CategoriesDto = Category[];
export type CategoryId = number;

export interface CategoryByIdDto {
    category: Category;
    data: ProductDto;
}