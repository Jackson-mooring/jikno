import { configure, getStorybook, setAddon } from '@storybook/angular';

import createPercyAddon from '@percy-io/percy-storybook';
const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

function loadStories() {
    require('../stories/index.ts');
    // You can require as many stories as you need.
}

configure(loadStories, module);

// NOTE: if you're using the Storybook options addon, call serializeStories *BEFORE* the setOptions call
serializeStories(getStorybook);