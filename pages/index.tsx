import * as React from "react";
import { Box } from 'rebass';
import TabNav from '../components/TabNav';
import TabStories from '../components/TabStories';

const HomePage = () => {
    return (
        <Box
            sx={{
                width: '375px',
                mx: 'auto',
                p: '15px',
                backgroundColor: '#e8e8e8'
            }}>
            Container
            <TabNav/>
            <TabStories/>
        </Box>
    );
};

export default HomePage;