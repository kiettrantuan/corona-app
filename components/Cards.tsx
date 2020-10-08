import * as React from 'react';
import { Box, Flex, Card, Image, Heading, Text, Link } from 'rebass';
import styled from '@emotion/styled';
import WebFont from 'webfontloader';


// Add Airbnb Cereal App font
WebFont.load({
    custom: {
        families: ['Airbnb Cereal App Medium', 'Airbnb Cereal App Light','Airbnb Cereal App Bold'],
        urls: ['./webfont/webfont.module.css']
    }
})


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



export const CardImage = ({imgsrc='https://via.placeholder.com/100'}) => {
    return (
        <Box width={1/3} marginRight={'15px'}>
            <Box width={'100px'} height={'100px'}>
                <Image src={imgsrc}
                    sx={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '10px'
                    }}>
                </Image>
            </Box>
        </Box>
    )
};
export const CardText = ({heading='Title', body='Description', link='#', amount=0}) => {
    return (
        <Box width={2/3}
            sx={{
                // fontSize: '12px',
                marginRight: '10px',
                boxSizing: 'border-box',
                // overflowWrap: 'break-word'
            }}>
            <HeadingStyle>{heading}</HeadingStyle>
            <Flex 
                sx={{
                    alignItems: 'center',
                    width: '100%',
                    height: '50px',
                    py: '8px',
                }}>
                <TextStyle>{body}</TextStyle>
            </Flex>
            <LinkStyle href={link}>{amount} Discussions &#8594;</LinkStyle>
        </Box>
    )
};

const Cards = (
    props: {Data: {
        id: string,
        heading: string,
        body: string,
        link: string,
        amount: number,
        imgsrc: string,
    }[]}) => {
        
    return (
        <>
            {props.Data.map((c) => {
                return (
                    <Card marginBottom={'15px'} key={c.id}>
                        <Flex 
                            sx={{
                            padding: '10px',
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            borderRadius: '16px',
                            maxHeight: '120px'
                            }}>
                            <CardImage imgsrc={c.imgsrc}/>
                            <CardText
                                heading={c.heading}
                                body={c.body}
                                link={c.link}
                                amount={c.amount}/>
                        </Flex>
                    </Card>
                )
            })}
        </>
    )
};

export default Cards;