import * as React from 'react';
import { Box, Flex, Card, Image, Heading, Text, Link } from 'rebass';
import styled from '@emotion/styled';

// Add Airbnb Cereal App font
const webfont = require('./webfont/webfont.module.css');


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
            <Box width={'100%'} my={2}>
                <TextStyle>{body}</TextStyle>
            </Box>
            <LinkStyle href={link}>{amount} Discussions &#8594;</LinkStyle>
        </Box>
    )
};

const Data = [
    {
        id: '1',
        heading: 'Wear a facemask',
        body: 'You should wear facemask when you are around other people',
        link: '#',
        amount: 53,
        imgsrc: 'https://via.placeholder.com/100',
    },
    {
        id: '2',
        heading: 'Avoid close contact',
        body: 'Put distance between yourself and other people',
        link: '#',
        amount: 127,
        imgsrc: 'https://via.placeholder.com/50',
    },
    {
        id: '3',
        heading: 'Empty',
        body: '',
        link: '#',
        imgsrc: 'https://via.placeholder.com/500',
    },
    {
        id: '4',
        heading: 'Too much',
        body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
        link: '#',
        imgsrc: 'https://via.placeholder.com/100x500',
    },
    {
        id: '5',
        heading: 'Too much 2',
        body: 'Loremipsumdolorsitamet,consectetueradipiscingelitAeneancommodoligulaegetdolor.Aeneanmassa.Cumsociisnatoquepenatibusetmagnisdisparturientmontes,nasceturridiculusmus',
        link: '#',
        imgsrc: 'https://via.placeholder.com/500x100',
    },
];

const Cards = () => {
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
                            maxHeight: '120px'
                            }}>
                            <CardImage imgsrc={props.imgsrc}/>
                            <CardText
                                heading={props.heading}
                                body={props.body}
                                link={props.link}
                                amount={props.amount}/>
                        </Flex>
                    </Card>
                )
            })}
        </Box>
    )
};

export default Cards;