import * as React from 'react';
import { Box, Flex, Image, Heading, Text, Link } from 'rebass';
import styled from '@emotion/styled';

// Add Airbnb Cereal App font
import * as webfont from './webfont/webfont.module.css';
const GlobalStyle = styled('div')`
    @import url('${webfont}');
`

const HeadingStyle = styled(Heading)`
    font-family: 'Airbnb Cereal App Bold';
    font-size: 16px;
`
const TextStyle = styled(Text)`
    font-family: 'Airbnb Cereal App Light';
    font-size: 13px;
    color: rgb(121,130,130);
    display: -webkit-box;   
    -webkit-line-clamp: 2;   
    -webkit-box-orient: vertical;   
    overflow: hidden;
    text-overflow: ellipsis;
`
const LinkStyle = styled(Link)`
    text-decoration: none;
    font-family: 'Airbnb Cereal App Medium';
    font-size: 15px;
    cursor: pointer;
    color: #7DA752;
`

const Card = (
    props: {
        heading: string,
        body: string,
        link: string,
        amount: number,
        imgsrc: string,
    }) => {
        
    return (
        <GlobalStyle>
            <Box marginBottom={'15px'}>
                <Flex 
                    sx={{
                        width: '345px',
                        padding: '10px',
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        borderRadius: '16px',
                        // maxHeight: '120px'
                    }}>
                    <Box width={1/3} marginRight={'15px'}>
                        <Box width={'100px'} height={'100px'}>
                            <Image src={props.imgsrc}
                                sx={{
                                    width: '100px',
                                    height: '100px',
                                    objectFit: 'cover',
                                    borderRadius: '10px'
                                }}/>
                        </Box>
                    </Box>   
                    <Box width={2/3}
                        sx={{
                            marginRight: '10px',
                            boxSizing: 'border-box',
                        }}>
                        <HeadingStyle>{props.heading}</HeadingStyle>
                        <Flex 
                            sx={{
                                alignItems: 'center',
                                width: '100%',
                                height: '50px',
                                py: '8px',
                            }}>
                            <TextStyle>{props.body}</TextStyle>
                        </Flex>
                        <LinkStyle href={props.link}>{props.amount} Discussions &#8594;</LinkStyle>
                    </Box>
                </Flex>
            </Box>
        </GlobalStyle>
    )
};

export default Card;