import { ActionIcon, Box, Container, Grid } from '@mantine/core';
import { Top } from '@/shared/ui';
import { ContactPane } from './ui';
import { BiLogoInstagramAlt, BiLogoWhatsapp } from 'react-icons/bi';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { MapState, YMapsQuery } from './const';

export const Contacts = () => {
    return (
        <Box component='section' mb={80}>
            <Container>
                <Top mb={40} title='Contact' />
                <Grid mb={32}>
                    <Grid.Col span={6}>
                        <ContactPane title='Phone' description='+7 (499) 350-66-04' />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <ContactPane title='Socials'>
                            <ActionIcon size={38} p={0} component='a' href='#' variant='transparent'>
                                <BiLogoInstagramAlt size={38} />
                            </ActionIcon>
                            <ActionIcon size={38} p={0} component='a' href='#' variant='transparent'>
                                <BiLogoWhatsapp size={38} />
                            </ActionIcon>
                        </ContactPane>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <ContactPane title='Address' description='Dubininskaya Ulitsa, 96, Moscow, Russia, 115093' />
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <ContactPane title='Working Hours' description='24 hours a day' />
                    </Grid.Col>
                </Grid>
                <YMaps query={YMapsQuery}>
                    <Map
                        {...MapState}
                        state={{
                            center: [55.713487, 37.631757],
                            zoom: 17.39,
                        }}
                    >
                        <Placemark geometry={[55.713487, 37.631757]} />
                    </Map>
                </YMaps>
            </Container>
        </Box>
    );
};
