import * as React from 'react';
import { Box, Flex, Card, Image, Heading, Text, Link } from 'rebass';
// import imgOne from '../images/wear-masks.png';
// import imgTwo from './images/avoid-crowds.jpg';

// const imgOne = require('../images/wear-masks.png');

const CardImage = ({value}) => {
    return (
        <Box width={1/3} marginRight={'15px'}>
            <Image src={value}
                sx={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '10px'
                }}>
            </Image>
        </Box>
    )
}
const CardText = ({heading, body, link}) => {
    return (
        <Box width={2/3}
            sx={{
                // fontSize: '12px',
                marginRight: '16px',
                boxSizing: 'border-box',
                // overflowWrap: 'break-word'
            }}>
                <Heading fontSize={'16px'}>{heading}</Heading>
                <Text fontSize={'12px'} my={'8px'}>{body}</Text>
                <Link>{link}</Link>

        </Box>
    )
}

const TabStories = () => {
    const textHeadingOne = 'Wear a facemask';
    const textHeadingTwo = 'Avoid close contact';
    const textBodyOne = 'You should wear facemask when you are around other people';
    const textBodyTwo = 'Put distance between yourself and other people';
    const textLinkOne = '153 Discussions';
    const textLinkTwo = '127 Discussions';

    return (
        <Box>
            <Card marginBottom={'15px'}>
                <Flex 
                    sx={{
                    padding: '10px',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    borderRadius: '16px',
                    }}>
                    <CardImage value={'imgOne'}/>
                    <CardText
                        heading={textHeadingOne}
                        body={textBodyOne}
                        link={textLinkOne}/>
                </Flex>
            </Card>
            <Card>
                <Flex 
                    sx={{
                    padding: '10px',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    borderRadius: '10px',
                    }}>
                    <CardImage value={'imgTwo'}/>
                    <CardText
                        heading={textHeadingTwo}
                        body={textBodyTwo}
                        link={textLinkTwo}/>
                </Flex>
            </Card>
        </Box>
    )
}

export default TabStories;