import * as React from 'react';
import { Box } from 'rebass';
import Selection from '../components/Selection';
import { Card, CardProps } from '../components/Card';

const ITEMS = [
    {
        key: '1',
        title: 'Prevention',
    },
    {
        key: '2',
        title: 'Symptoms',
    },
    {
        key: '3',
        title: 'Diagnosis',
    },
];

const DATA = [
    {
        key: '1',
        heading: 'Title 1.1',
        body: 'Description 1.1',
        link: '#',
        amount: 11,
        imgsrc: 'https://via.placeholder.com/100',
    },
    {
        key: '2',
        heading: 'Title 1.2',
        body: 'Description 1.2',
        link: '#',
        amount: 12,
        imgsrc: 'https://via.placeholder.com/100x200',
    },
];
const DATA_2 = [
    {
        key: '1',
        heading: 'Title 2.1',
        body: 'Description 2.1',
        link: '#',
        amount: 21,
        imgsrc: 'https://via.placeholder.com/200x100',
    },
    {
        key: '2',
        heading: 'Title 2.2',
        body: 'Description 2.2',
        link: '#',
        amount: 22,
        imgsrc: 'https://via.placeholder.com/200',
    },
];
const DATA_3 = [
    {
        key: '1',
        heading: 'Title 3.1',
        body: 'Description 3.1',
        link: '#',
        amount: 31,
        imgsrc: 'https://via.placeholder.com/300x100',
    },
    {
        key: '2',
        heading: 'Title 3.2',
        body: 'Description 3.2',
        link: '#',
        amount: 32,
        imgsrc: 'https://via.placeholder.com/300x200',
    },
];

const HomePage = () => {
    const [key, setKey] = React.useState('1');

    return (
        <Box
            sx={{
                width: '375px',
                // mx: 'auto',
                p: '15px',
                backgroundColor: 'rgb(243,239,234)',
            }}
        >
            <Selection selectedKey={key} items={ITEMS} onSelect={setKey} />

            {key === '1' &&
                DATA.map((props: CardProps) => {
                    return <Card {...props} />;
                })}
            {key === '2' &&
                DATA_2.map((props: CardProps) => {
                    return <Card {...props} />;
                })}
            {key === '3' &&
                DATA_3.map((props: CardProps) => {
                    return <Card {...props} />;
                })}
        </Box>
    );
};

export default HomePage;
