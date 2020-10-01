import * as React from "react";
import { Box } from 'rebass';
import Selection from '../components/Selection';
import Cards from '../components/Cards';

const HomePage = () => {
    return (
        <Box
            sx={{
                width: '375px',
                mx: 'auto',
                p: '15px',
                backgroundColor: 'rgb(243,239,234)'
            }}>
            <Selection/>
            <Cards/>
        </Box>
    );
};

export default HomePage;