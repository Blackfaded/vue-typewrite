# vue-typewrite [![npm version](https://badge.fury.io/js/vue-typewrite.svg)](https://badge.fury.io/js/vue-typewrite)

This Vue.js plugin emulates typing in a text.

[DEMO](https://blackfaded.github.io/vue-typewrite/)

## Usage

### Installation
```bash
npm i vue-typewrite
```

### in your main.js file

```js
import Vue from 'vue';
import Typewriter from 'vue-typewrite';

Vue.use(Typewriter);
```

### In your application

```html
<template>
    <v-type-write text="Hello World!"></v-type-write>
</template>
```

### Configuration

| name       | type              | default   | description                        |
| ---------- | ----------------- | --------- | ---------------------------------- | 
| text       | string - required |           | the text to be typed               |
| typeDelay  | number            | 0         | time until the text starts typing  |
| typeSpeed  | number            | 150       | time between each char typed in ms |
| caretColor | string            | '#101010' | color of the caret (any css color) |
| textColor  | string            | ''inherit | color of the text (any css color)  |

For multiline texts use ```\n``` for now.

### example

```html
<v-type-write :text="'Multiline \n is also supported'"></v-type-write>
<v-type-write :typeDelay="150" text="I start typing after 150ms"></v-type-write>
```

## contribute
* clone this repo
* `npm i` 
* `npm run serve`
* make changes on new branch
* update README
* submit PR

# Todo
- [ ] be able to delete text
- [ ] be able to select text
- [ ] be able to loop the writing
- [ ] accept array of textelements
- [ ] render html elements like `h1`, `p` etc.
- [ ] emit events
- [ ] customize caret (like underscore, solid, easing)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright &copy; 2019-Present, René Heinen. All rights reserved.
