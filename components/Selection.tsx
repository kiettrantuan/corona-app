import * as React from 'react';
import { Flex, Box, Link } from 'rebass';
import styled from '@emotion/styled';

/* Add Airbnb Cereal App font
   - Require can be used instead of Import */
// const webfont = require('./webfont/webfont.module.css');
/* - File other than .tsx/.ts must be declared as a module in
.d.ts file in root dir & included in tsconfig.json for Import
   - In this case: module css declared in styles.d.ts */
import * as webfont from './webfont/webfont.module.css';
const GlobalStyle = styled('div')`
    @import url('${webfont}');
`;

const BoxStyle = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 15px;
    font-family: ${({ selected }) => (selected ? 'Airbnb Cereal App Bold' : 'Airbnb Cereal App Medium')};
    color: ${({ selected }) => (selected ? '#7DA752' : 'rgb(194,194,181)')};
    background-color: ${({ selected }) => (selected ? 'rgba(125,167,82,0.2)' : '')};
`;

const Selection = (props: {
    selectedKey: string;
    items: { key: string; title: string }[];
    onSelect?: (key: string) => void;
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
                }}
            >
                {props.items.map((i) => {
                    return (
                        <BoxStyle
                            width={1 / 3}
                            key={i.key}
                            onClick={() => props.onSelect(i.key)}
                            selected={i.key === props.selectedKey}
                        >
                            <Link>{i.title}</Link>
                        </BoxStyle>
                    );
                })}
            </Flex>
        </GlobalStyle>
    );
};

export default Selection;
