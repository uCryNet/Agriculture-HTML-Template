# Agriculture-HTML-Template

<img src="https://github.com/uCryNet/Agriculture-HTML-Template/blob/master/Screenshot.png"/>


This is a free fork paid template [Agro](https://themeforest.net/item/agro-agriculture-organic-food-html-template-pack/23207310). Not all pages, not Pixel Perfect but replica. [Live review](http://demo.artureanec.com/html/agro/index.html)

# How to use:
* Install [NodeJS](https://nodejs.org/en/) (if needed) and [Yarn](https://yarnpkg.com/en/docs/install)
* Download the build with [Git](https://git-scm.com/downloads): ```git clone https://github.com/uCryNet/Agriculture-HTML-Template```
* Install ```gulp``` globally: ```yarn global add gulp-cli```
* Go to the build folder: ```cd gulp-scss-starter```
* Install required dependencies: ```yarn```
* To get started, enter the command: ```yarn run dev``` (development mode)
* To build a project, enter the command ```yarn run build``` (build mode)

# Template structure:

```
gulp-scss-starter
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```
* Folder ```src``` - used during development:
    * BEM blocks: ```src/blocks```
    * fonts: ```src/fonts```
    * images: ```src/img```
    * JS file: ```src/js```
    * pages: ```src/views/pages```
    * SCSS file: ```src/styles```
    * HTML file: ```src/views```
* Folder ```dist``` - folder, from which the local development server is started (at startup ```yarn run dev```)
* Folder ```gulp-tasks``` - folder с Gulp-tasks

# Pattern structure:
* Gulp, yarm, webpack build - [gulp-scss-starter](https://github.com/andreyalexeich/gulp-scss-starter)
* No Bootstrap
* Use FlexBox
* Native JavaScript and jQuery (only Slick slider)
* [Slick slider](https://kenwheeler.github.io/slick/)
* [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll Library)
