import * as React from 'react';
import Selection from './Selection';
import { action } from '@storybook/addon-actions';


export default {
    title: 'App/Selection',
    component: 'Selection',
}

export const Main = () => {
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
    const [key, setKey] = React.useState('1');
    const handleSelect = (key: string) => {
        setKey(key);
    }
    
    return (
        <Selection selectedKey={key} items={Items} 
            onSelect={(k)=>{
                handleSelect(k);
                action('Clicked')(`Tab ${k}`)
            }}/>
    )
}