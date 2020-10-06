import * as React from 'react';
import { Flex, Box, Link } from 'rebass';
import styled from '@emotion/styled';
import Cards from './Cards';

// Add Airbnb Cereal App font
const webfont = require('./webfont/webfont.module.css');

const BoxStyle = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    border-radius: 20px;
    cursor: pointer;
    font-family: ${({selected}) => (selected ? "Airbnb Cereal App Bold" : "Airbnb Cereal App Medium")};
    color: ${({selected}) => (selected ? "#7DA752" : "rgb(194,194,181)")};
    background-color: ${({selected}) => (selected ? "rgba(125,167,82,0.2)" : "")};
`

const Items = [
    {
        id: '1',
        key: '1',
        title: 'Prevention',
        posts: [
            {
                id: '1',
                heading: 'Title 1.1',
                body: 'Description 1.1',
                link: '#',
                amount: 11,
                imgsrc: 'https://via.placeholder.com/100',
            },
            {
                id: '2',
                heading: 'Title 1.2',
                body: 'Description 1.2',
                link: '#',
                amount: 12,
                imgsrc: 'https://via.placeholder.com/100x200',
            },
        ],
    },
    {
        id: '2',
        key: '2',
        title: 'Symptoms',
        posts: [
            {
                id: '1',
                heading: 'Title 2.1',
                body: 'Description 2.1',
                link: '#',
                amount: 21,
                imgsrc: 'https://via.placeholder.com/200x100',
            },
            {
                id: '2',
                heading: 'Title 2.2',
                body: 'Description 2.2',
                link: '#',
                amount: 22,
                imgsrc: 'https://via.placeholder.com/200',
            },
        ],
    },
    {
        id: '3',
        key: '3',
        title: 'Diagnosis',
        posts: [
            {
                id: '1',
                heading: 'Title 3.1',
                body: 'Description 3.1',
                link: '#',
                amount: 31,
                imgsrc: 'https://via.placeholder.com/300x100',
            },
            {
                id: '2',
                heading: 'Title 3.2',
                body: 'Description 3.2',
                link: '#',
                amount: 32,
                imgsrc: 'https://via.placeholder.com/300x200',
            },
        ],
    }
]

const Selection = ({
        selectedKey='1', 
        items=Items
    }) => {

    const [key, setKey] = React.useState(selectedKey);
    const handleSelect = (key: string) => {
        setKey(key);
    }

    console.log(key);
    return (
        <Box 
            sx={{
                width: '375px',
                mx: 'auto',
                p: '15px',
                backgroundColor: 'rgb(243,239,234)'
            }}>

            <Flex 
                sx={{
                    width: '345px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    padding: '5px 1px',
                    marginBottom: '20px',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    borderRadius: '28px',
                }}>
                {items.map((i) => { 
                    return (
                            <BoxStyle width={1 / 3} onClick={()=>handleSelect(i.key)} selected={i.key === key}>
                                <Link>{i.title}</Link>
                            </BoxStyle>
                    )
                })}
            </Flex>
            
            {items.map((i) => { return (
                <>
                    {key === i.key && <Cards Data={i.posts}/>}
                </>
            )})}

        </Box>
    )
}

export default Selection;