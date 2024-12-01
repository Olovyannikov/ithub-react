import { RootLayout } from '@/widgets/RootLayout';
import { Contacts } from '@/widgets/Contacts';
import { Categories } from '@/widgets/Categories';

export default function CategoriesPage() {
    return (
        <RootLayout title='Categories'>
            <Categories showAll />
            <Contacts />
        </RootLayout>
    );
}
