# Agriculture-HTML-Template

<img src="https://github.com/uCryNet/Agriculture-HTML-Template/blob/master/Screenshot.png"/>


This is a free fork paid template [Agro](https://themeforest.net/item/agro-agriculture-organic-food-html-template-pack/23207310). Not all pages, not Pixel Perfect but replica. [Live review](http://demo.artureanec.com/html/agro/index.html)

# How to use:
* Download the build with [Git](https://git-scm.com/downloads): ```git clone https://github.com/uCryNet/Agriculture-HTML-Template```
* Go to the build folder: ```cd Agriculture-HTML-Template```
* Install required dependencies: ```npm i```
* To get started, enter the command: ```npm run dev``` (development mode)
* To build a project, enter the command ```npm run build``` (build mode)

# Template structure:
* Folder ```src``` - used during development:
    * BEM blocks: ```src/blocks```
    * fonts: ```src/fonts```
    * images: ```src/img```
    * JS file: ```src/js```
    * pages: ```src/views/pages```
    * SCSS file: ```src/styles```
    * HTML file: ```src/views```
* Folder ```dist``` - folder, from which the local development server is started (at startup ```npm run dev```)
* Folder ```gulp-tasks``` - folder с Gulp-tasks

# Pattern structure:
* Gulp, yarm, webpack build - [gulp-scss-starter](https://github.com/andreyalexeich/gulp-scss-starter)
* No Bootstrap
* Use FlexBox
* Native JavaScript and jQuery (only Slick slider)
* [Slick slider](https://kenwheeler.github.io/slick/)
* [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll Library)
