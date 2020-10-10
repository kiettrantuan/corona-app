import * as React from 'react';
import Card from './Card';

export default {
    title: 'App/Card',
    component: Card,
    argTypes: {
        heading: {
            name: 'Header',
            description: 'Title',
            type: { name: 'string', required: false },
            defaultValue: 'Title',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Title' },
            }
        },
        body: {
            name: 'Body',
            description: 'Short Description',
            type: { name: 'string', required: false },
            defaultValue: 'Description',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'Description' },
            }
        },
        link: {
            name: 'Link',
            description: 'Link to Discussions',
            type: { name: 'string', required: false },
            defaultValue: '#',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '#' },
            }
        },
        imgsrc: {
            name: 'Image',
            description: 'Source of Image',
            type: { name: 'string', required: false },
            defaultValue: 'https://via.placeholder.com/100',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'https://via.placeholder.com/100' },
            }
        },
        amount: {
            name: 'Amount',
            description: 'Number of Posts',
            // control: { disable: true },
            type: { name: 'number', required: false },
            defaultValue: 'https://via.placeholder.com/100',
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '0' },
            }
        }
    },
}

const CardStory = (props) => {
    return (
        <Card heading={props.heading} body={props.body} 
            link={props.link} amount={props.amount} 
            imgsrc={props.imgsrc}/>
    )
}

export const Normal = CardStory.bind({});
export const LongBodyText = CardStory.bind({});
export const LongBodyTextWithNoSpace = CardStory.bind({});
export const EmptyBodyText = CardStory.bind({});
export const LargeImage = CardStory.bind({});
export const SmallImage = CardStory.bind({});
export const WideImage = CardStory.bind({});
export const TallImage = CardStory.bind({});

Normal.args = {
    heading: 'Header',
    body: 'Body',
    link: 'https://example.com/',
    amount: 127,
    imgsrc: 'https://via.placeholder.com/100',
}

LongBodyText.args = {
    heading: 'Header',
    body: 'Dummies Text: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, ',
    link: '#',
    amount: 1,
    imgsrc: 'https://via.placeholder.com/100',
}
LongBodyTextWithNoSpace.args = {
    heading: 'Header',
    body: 'ThisIsALongWithoutSpaceTextLoremipsumdolorsitamet,consectetueradipiscingelitAeneancommodoligulaegetdolor.Aeneanmassa.Cumsociisnatoquepenatibusetmagnisdisparturientmontes,nasceturridiculusmus.',
    link: '#',
    amount: 2,
    imgsrc: 'https://via.placeholder.com/100',
}
EmptyBodyText.args = {
    heading: 'Header',
    body: '',
    link: '#',
    amount: 3,
    imgsrc: 'https://via.placeholder.com/100',
}

LargeImage.args = {
    heading: 'Header',
    body: 'Body',
    link: '#',
    amount: 10,
    imgsrc: 'https://via.placeholder.com/1000x1000',
}
SmallImage.args = {
    heading: 'Header',
    body: 'Body',
    link: '#',
    amount: 71,
    imgsrc: 'https://via.placeholder.com/10x10',
}
WideImage.args = {
    heading: 'Header',
    body: 'Body',
    link: '#',
    amount: 32,
    imgsrc: 'https://via.placeholder.com/1000x100',
}
TallImage.args = {
    heading: 'Header',
    body: 'Body',
    link: '#',
    amount: 41,
    imgsrc: 'https://via.placeholder.com/100x1000',
}
