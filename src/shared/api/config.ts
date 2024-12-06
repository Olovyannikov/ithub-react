export const API = {
    BASE_URL: 'https://ithub-react-backend.onrender.com',
    SALE: '/sale',
    ALL_CATEGORIES: '/categories/all',
    CATEGORY_BY_ID: (id: number) => `/categories/${id}`,
    ALL_PRODUCTS: '/products/all',
    PRODUCT_BY_ID: (id: number) => `/products/${id}`,
};
