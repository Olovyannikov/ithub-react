import { Categories } from '@/widgets/Categories';
import { Contacts } from '@/widgets/Contacts';
import { RootLayout } from '@/widgets/RootLayout';

export default function CategoriesPage() {
    return (
        <RootLayout title='Categories'>
            <Categories showAll />
            <Contacts />
        </RootLayout>
    );
}
