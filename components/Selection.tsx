import * as React from 'react';
import { Flex, Box, Text, Link } from 'rebass';
import styled from '@emotion/styled';


const LinkStyle = styled(Link)`
    color: rgb(194,194,181);
    width: 100%;
    text-align: center;
    font-size: 15px;
`



const Selection = () => {
    return (
        <Flex
            sx={{
                fontFamily: 'Helvetica, Arial, sans-serif',
                padding: '4px 1px',
                marginBottom: '20px',
                backgroundColor: '#fff',
                alignItems: 'center',
                borderRadius: '28px',
            }}>
            <Box width={1 / 3} marginLeft={1}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    fontWeight: 'bold',
                    color: '#7DA752',
                    backgroundColor: 'rgba(125,167,82,0.2)',
                    borderRadius: '20px',
                    cursor: 'pointer'
                }}>
                <Link sx={{width:'100%',textAlign:'center',
                    fontSize:'15px'}}>
                    Prevention
                </Link>
            </Box>
            <Box width={1 / 3} mx={1}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    borderRadius: '20px',
                    cursor: 'pointer'
                }}>
                <LinkStyle>Symptoms</LinkStyle>
            </Box>
            <Box width={1 / 3} marginRight={1}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    borderRadius: '20px',
                    cursor: 'pointer'
                }}>
                <LinkStyle>Diagnosis</LinkStyle>
            </Box>
        </Flex>
    )
}

export default Selection;