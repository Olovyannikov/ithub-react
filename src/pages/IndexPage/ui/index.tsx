import { Categories } from '@/widgets/Categories';
import { Contacts } from '@/widgets/Contacts';
import { FirstOrderForm } from '@/widgets/FirstOrderForm';
import { IndexHero } from '@/widgets/IndexHero';
import { RootLayout } from '@/widgets/RootLayout';
import { Sales } from '@/widgets/Sales';

export default function IndexPage() {
    return (
        <RootLayout title='Main Page'>
            <IndexHero />
            <Categories />
            <FirstOrderForm />
            <Sales />
            <Contacts />
        </RootLayout>
    );
}
