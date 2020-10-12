import * as React from 'react';
import Selection from './Selection';
import { action } from '@storybook/addon-actions';

export default {
    title: 'App/Selection',
    component: 'Selection',
};

export const Main = () => {
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
    const [key, setKey] = React.useState('1');

    return (
        <Selection
            selectedKey={key}
            items={ITEMS}
            onSelect={(k) => {
                setKey(k);
                action('Clicked')(`Tab ${k}`);
            }}
        />
    );
};
