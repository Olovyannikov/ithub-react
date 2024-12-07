import { BiLogoInstagramAlt, BiLogoWhatsapp } from 'react-icons/bi';
import { ActionIcon, Box, Container, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

import { Top } from '@/shared/ui';

import { MapState, YMapsQuery } from './const';
import { ContactPane } from './ui';

export const Contacts = () => {
    const isLarge = useMediaQuery('(min-width: 730px)');

    return (
        <Box component='section' mb={80}>
            <Container>
                <Top mb={40} title='Contact' />
                <Grid mb={32}>
                    <Grid.Col span={isLarge ? 6 : 12}>
                        <ContactPane
                            title='Phone'
                            description={
                                <a style={{ color: 'currentcolor', textDecoration: 'none' }} href='tel:+74993506604'>
                                    +7 (499) 350-66-04
                                </a>
                            }
                        />
                    </Grid.Col>
                    <Grid.Col span={isLarge ? 6 : 12}>
                        <ContactPane title='Socials'>
                            <ActionIcon size={38} p={0} component='a' href='#' variant='transparent'>
                                <BiLogoInstagramAlt size={38} />
                            </ActionIcon>
                            <ActionIcon size={38} p={0} component='a' href='#' variant='transparent'>
                                <BiLogoWhatsapp size={38} />
                            </ActionIcon>
                        </ContactPane>
                    </Grid.Col>
                    <Grid.Col span={isLarge ? 6 : 12}>
                        <ContactPane title='Address' description='Dubininskaya Ulitsa, 96, Moscow, Russia, 115093' />
                    </Grid.Col>
                    <Grid.Col span={isLarge ? 6 : 12}>
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
