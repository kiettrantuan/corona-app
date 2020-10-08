import * as React from 'react';
import { Flex, Box, Link } from 'rebass';
import styled from '@emotion/styled';

// Add Airbnb Cereal App font
import * as webfont from './webfont/webfont.module.css';
const GlobalStyle = styled('div')`
    @import url('${webfont}');
`

const BoxStyle = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 15px;
    font-family: ${({selected}) => (selected ? 'Airbnb Cereal App Bold' : 'Airbnb Cereal App Medium')};
    color: ${({selected}) => (selected ? '#7DA752' : 'rgb(194,194,181)')};
    background-color: ${({selected}) => (selected ? 'rgba(125,167,82,0.2)' : '')};
`


const Selection = (
    props: {
        selectedKey: string,
        items: {key: string, title: string}[],
        onSelect?: (key: string) => void
    }) => {

    return (
        <GlobalStyle>
        <Flex 
            sx={{
                width: '345px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                padding: '5px 5px',
                marginBottom: '20px',
                backgroundColor: '#fff',
                alignItems: 'center',
                borderRadius: '28px',
            }}>
            {props.items.map((i) => { 
                return (
                    <BoxStyle width={1/3} key={i.key}
                        onClick={()=>props.onSelect(i.key)} 
                        selected={i.key === props.selectedKey}>
                        <Link>{i.title}</Link>
                    </BoxStyle>
                )
            })}
        </Flex></GlobalStyle>
    )
}

export default Selection;