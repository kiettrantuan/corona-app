import * as React from "react";
import { Box } from "rebass";
import Selection from '../components/Selection';



const Items = [
    {
        id: '1',
        key: '1',
        title: 'Prevention',
        posts: [
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
        ]
    },
    {
        id: '2',
        key: '2',
        title: 'Symptoms',
        posts: [
                {
                id: '1',
                heading: 'Wear a facemask 2',
                body: 'You should wear facemask when you are around other people',
                link: '#',
                amount: 53,
                imgsrc: 'https://via.placeholder.com/100',
            },
            {
                id: '2',
                heading: 'Avoid close contact 2',
                body: 'Put distance between yourself and other people',
                link: '#',
                amount: 127,
                imgsrc: 'https://via.placeholder.com/50',
            },
        ]
    },
    {
        id: '3',
        key: '3',
        title: 'Diagnosis',
        posts: [
                {
                id: '1',
                heading: 'Wear a facemask 3',
                body: 'You should wear facemask when you are around other people',
                link: '#',
                amount: 53,
                imgsrc: 'https://via.placeholder.com/100',
            },
            {
                id: '2',
                heading: 'Avoid close contact 3',
                body: 'Put distance between yourself and other people',
                link: '#',
                amount: 127,
                imgsrc: 'https://via.placeholder.com/50',
            },
        ]
    }
]


const HomePage = () => {
    return (
        <Selection selectedKey={Items[0].key} items={Items}/>
    );
};

export default HomePage;