# Panacea Glass

I originally built this app with just straight javascript. You con find my [first repo here](https://github.com/czaas/chad-www).

## Why am I rebuilding it?

My first go at this app/website I was just trying to string it together. 

## Libraries

### For production

I'm using [React](https://github.com/facebook/react) js and I've found the organization of all my javascript is clear and makes sense where components are located.

For my modals I'm using a slightly modified [boron](https://github.com/yuanyan/boron) modal component which has made adding modals a breeze.

I'm using [Instafeed](https://github.com/stevenschobert/instafeed.js/) which is where my client post images of his work. This library uses Instagrams API and pulls images from his feed.

### Development

I'm using webpack and babel-loader to convert all my ES2015 code into browser complient Javascript. I've been experimenting with ES2015 class's, the import modules, arrow functions and other ES2015 features. 