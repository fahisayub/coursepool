import React from 'react';
import { ColorModeSwitcher } from '../utils/ColorModeSwitcher';
import { Grid } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Grid minW="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
    );
};

export default Navbar;