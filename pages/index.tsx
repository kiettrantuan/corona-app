import * as React from 'react';
import { Box } from 'rebass';
import Selection from '../components/Selection';
import Card from '../components/Card';


const Items = [
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
    }
]

const Data = [
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
]
const Data2 = [
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
]
const Data3 = [
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
]

const HomePage = () => {
    const [key, setKey] = React.useState('1');
    const handleSelect = (key: string) => {
        setKey(key);
    } 
    
    return (
        <Box 
            sx={{
                width: '375px',
                // mx: 'auto',
                p: '15px',
                backgroundColor: 'rgb(243,239,234)'
            }}>
            
            <Selection selectedKey={key} items={Items} onSelect={(k)=>handleSelect(k)}/>
            
            {key === '1' && 
                Data.map( (props) => {
                    return (
                        <Card heading={props.heading} body={props.body} 
                            link={props.link} amount={props.amount} 
                            imgsrc={props.imgsrc} key={props.id}/>
                    )
                })
            }
            {key === '2' && 
                Data2.map( (props) => {
                    return (
                        <Card heading={props.heading} body={props.body} 
                            link={props.link} amount={props.amount} 
                            imgsrc={props.imgsrc} key={props.id}/>
                    )
                })
            }
            {key === '3' && 
                Data3.map( (props) => {
                    return (
                        <Card heading={props.heading} body={props.body} 
                            link={props.link} amount={props.amount} 
                            imgsrc={props.imgsrc} key={props.id}/>
                    )
                })
            }
        </Box>
    )
}

export default HomePage;