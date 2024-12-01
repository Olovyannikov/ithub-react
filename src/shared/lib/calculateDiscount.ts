export const calculateDiscount = ({ price, discountPrice }: { price: number; discountPrice: number }) => {
    return Number.parseInt(`${((price - discountPrice) / price) * 100}`);
};
