import { storiesOf } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';

storiesOf('My Button', module)
    .add('with emoji', () => ({
        component: Button,
        props: {
            text: '😀 😎 👍 💯',
        },
    }))
    .add('with emoji', () => ({
        component: Button,
        props: {
            text: '😀 😎 👍 💯',
        },
    }));