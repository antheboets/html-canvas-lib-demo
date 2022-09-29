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
## How it is implement the module
Install the module with npm.
```sh
npm install antheboets/canvas-lib:dev
```
After installing the module you can import it into JavaScript.
```javascript
import {getCanvas} from 'canvaslib'
```