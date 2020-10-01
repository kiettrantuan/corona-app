import * as React from 'react';
import { CardText, CardImage } from './Cards';
import { Card, Flex } from 'rebass';

export default {
    title: 'App/Cards',
};

export const Main = (props) => {
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
}

Main.args = {
    heading: 'Text Heading',
    body: 'Text Body',
    link: 'Text Link',
    imgsrc: 'https://via.placeholder.com/100',
}