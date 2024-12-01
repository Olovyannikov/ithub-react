import { API } from '@/shared/api';

export const Loaders = {
    index: async () => {
        const categoriesRequest = await fetch(API.BASE_URL + API.ALL_CATEGORIES);
        const salesRequest = await fetch(API.BASE_URL + API.SALE);
        const categories = await categoriesRequest.json();
        const sale = await salesRequest.json();

        return {
            categories,
            sale,
        };
    },
};
