import { RootLayout } from '@/widgets/RootLayout';
import { Categories } from '@/widgets/Categories';
import { FirstOrderForm } from '@/widgets/FirstOrderForm';
import { IndexHero } from '@/widgets/IndexHero';
import { Sales } from '@/widgets/Sales';
import { Contacts } from '@/widgets/Contacts';

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
