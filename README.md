# What is this?
This is a demo project for my html canvas library [canvaslib](https://github.com/antheboets/canvas-lib).
 
Watch the demo live [here]().
# How to install and view the result
## Clone
You can clone this project with the following command.
```sh
git clone https://github.com/antheboets/html-canvas-lib-demo.git
```
## Installation
Use this command to install all the packages, including the [canvaslib](https://github.com/antheboets/canvas-lib) module.
```sh
npm install
```
## Build
The javascript for the web app needs to be bundelt first. This project uses [Webpack](https://webpack.js.org/).
```sh
npm run build
```
open the index.html file.
## Source code
This is a snippet of the code that is used to add and use the HTML canvas. The full source code can be found [here](https://github.com/antheboets/html-canvas-lib-demo/blob/main/src/index.mjs).
```javascript
//adding an eventListener that is called on the load event of the window
//the function used in the eventListener is a async function so we can you the await keyword later
window.addEventListener("load",async ()=>{
    //initializing the canvas object with the singleton function
    const canvas = getCanvas()
    //adding the background video layer
    canvas.createLayer("./background.webm")
    //adding the first image layer
    canvas.createLayer(["./redBackground.png","./greenBackground.png","./blueBackground.png"])
    //adding the second image layer
    canvas.createLayer(["./hello.png","./world.png"])
    //starting the animation asynchronisly
    await canvas.startAsync()
})
```
<!--
## How it is implement the module
Install the module with npm.
```sh
npm install antheboets/canvas-lib:dev
```
After installing the module you can import it into JavaScript.
```javascript
import {getCanvas} from 'canvaslib'
```
-->