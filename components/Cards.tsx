import * as React from 'react';
import { Box, Flex, Card, Image, Heading, Text, Link } from 'rebass';
import styled from '@emotion/styled';

const TextStyle = styled(Text)`
    font-family: 'Helvetica, Arial, sans-serif';
    font-size: 12px;
    color: rgb(121,130,130);
    display: -webkit-box;   
    -webkit-line-clamp: 2;   
    -webkit-box-orient: vertical;   
    overflow: hidden;
    text-overflow: ellipsis;
`


export const CardImage = ({imgsrc}) => {
    return (
        <Box width={1/3} marginRight={'15px'}>
            <Image src={imgsrc}
                sx={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '10px'
                }}>
            </Image>
        </Box>
    )
};
export const CardText = ({heading, body, link}) => {
    return (
        <Box width={2/3}
            sx={{
                // fontSize: '12px',
                marginRight: '16px',
                boxSizing: 'border-box',
                // overflowWrap: 'break-word'
            }}>
            <Heading fontFamily={'Helvetica, Arial, sans-serif'}
                fontSize={'16px'}>
                {heading}
            </Heading>
            <Box width={'100%'} my={2}>
                <TextStyle>{body}</TextStyle>
            </Box>
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
        imgsrc: 'https://via.placeholder.com/100',
    },
    {
        id: '2',
        heading: 'Avoid close contact',
        body: 'Put distance between yourself and other people',
        link: '127 Discussions',
        imgsrc: 'https://via.placeholder.com/100',
    },
    {
        id: '3',
        heading: 'Empty',
        body: '',
        link: '0 Discussions',
        imgsrc: 'https://via.placeholder.com/100',
    },
    {
        id: '4',
        heading: 'Too much',
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
        link: '127 Discussions',
        imgsrc: 'https://via.placeholder.com/100',
    },
    {
        id: '5',
        heading: 'Too much 2',
        body: 'AaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaBBBBBBBBBBBCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',
        link: '0 Discussions',
        imgsrc: 'https://via.placeholder.com/100',
    },
];

const Cards = () => {
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
                            <CardImage imgsrc={props.imgsrc}/>
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

export default Cards;