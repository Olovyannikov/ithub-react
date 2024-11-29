import { API } from '@/shared/api';

export const Loaders = {
    index: async () => {
        const categoriesRequest = await fetch(API.BASE_URL + '/categories/all');
        const categories = await categoriesRequest.json();

        return {
            data: categories,
        };
    },
};
