import * as React from 'react';
import { Flex, Box, Text, Link } from 'rebass';


const NavLink = ({value}) => {
    return (
        <Link 
            sx={{
                display: 'inline-block',
                lineHeight: '40px',
                margin: 'auto',
                width: '100%',
                textAlign: 'center',
                color: 'gray',
                backgroundColor: '#fff',
                borderRadius: '20px',
                cursor: 'pointer'
            }}>
            {value}
        </Link>
    )
}

const TabNav = () => {
    return (
        <Flex
            sx={{
                padding: '4px 1px',
                marginBottom: '20px',
                backgroundColor: '#fff',
                alignItems: 'center',
                borderRadius: '28px',
            }}>
            <Box width={1 / 3} marginLeft={1}>
                <NavLink value={'Prevention'}/>
            </Box>
            <Box width={1 / 3} mx={1}>
                <NavLink value={'Symptoms'}/>
            </Box>
            <Box width={1 / 3} marginRight={1}>
                <NavLink value={'Diagnosis'}/>
            </Box>
        </Flex>
    )
}

export default TabNav;