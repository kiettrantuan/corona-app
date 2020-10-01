import * as React from 'react';
import { Box, Flex, Card, Image, Heading, Text, Link } from 'rebass';


const CardImage = () => {
    return (
        <Box width={1/3} marginRight={'15px'}>
            <Image src={'https://via.placeholder.com/100'}
                sx={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '10px'
                }}>
            </Image>
        </Box>
    )
};
const CardText = ({heading, body, link}) => {
    return (
        <Box width={2/3}
            sx={{
                // fontSize: '12px',
                marginRight: '16px',
                boxSizing: 'border-box',
                // overflowWrap: 'break-word'
            }}>
                <Heading fontFamily={'Helvetica, Arial, sans-serif'} fontSize={'16px'}>{heading}</Heading>
                <Text 
                    sx={{
                        my: '8px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontSize: '12px',
                        color: 'rgb(121,130,130)',
                    }}>
                    {body}
                </Text>
                <Link 
                    sx={{
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        cursor:'pointer',
                        color: '#7DA752'
                    }}>
                    {link} &#8594;
                </Link>

        </Box>
    )
};

const Data = [
    {
        id: '1',
        heading: 'Wear a facemask',
        body: 'You should wear facemask when you are around other people',
        link: '153 Discussions',
    },
    {
        id: '2',
        heading: 'Avoid close contact',
        body: 'Put distance between yourself and other people',
        link: '127 Discussions',
    },
];

const TabStories = () => {
    // const textHeadingOne = 'Wear a facemask';
    // const textHeadingTwo = 'Avoid close contact';
    // const textBodyOne = 'You should wear facemask when you are around other people';
    // const textBodyTwo = 'Put distance between yourself and other people';
    // const textLinkOne = '153 Discussions';
    // const textLinkTwo = '127 Discussions';

    return (
        <Box>
            {Data.map((props) => {
                return (
                    <Card marginBottom={'15px'}>
                        <Flex 
                            sx={{
                            padding: '10px',
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            borderRadius: '16px',
                            }}>
                            <CardImage />
                            <CardText
                                heading={props.heading}
                                body={props.body}
                                link={props.link}/>
                        </Flex>
                    </Card>
                )
            })}
        </Box>
    )
};

export default TabStories;