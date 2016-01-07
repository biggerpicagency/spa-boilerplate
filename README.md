# HTML5/Angular/Grunt Boilerplate for SPA
An opinionated starting point for Single Page Applications, used by [Bigger Picture Team](http://www.biggerpicture.agency).

## What is SPA Boilerplate?
This boilerplate is a first step to start building an excellent Single Page Application based on Angular. It contains necessary build processes, basic styles and files that every website needs to have.
With a think of application's high performance and the [Page Speed Insights score](https://developers.google.com/speed/pagespeed/insights/), we tried to create a boilerplate that builds extremely minified and compressed code and images, using the best technologies used by Bigger Picture Team.

It takes its inspiration in [Web Starter Kit](https://developers.google.com/web/tools/starter-kit/), [ngBoilerplate](https://github.com/ngbp/ngbp) and [HTML5 boilerplate](https://html5boilerplate.com) but it eliminates all their weaknesses.

## Features
* **Sass** (SCSS syntax) compilation to pure, minified CSS (by node-sass)
* based on **Angular.js** framework
* JS files concatenation and minification
* keeping images lean
* minified HTML templates compilation to JS
* **live browser reloading**
* ability to build ready application in different environment (local, staging, production)
* based on **Grunt** and **Bower**
* integration with **Karma** and **Jasmine**
* works the best with continuous integration/continuous delivery application like **Jenkins**

## Discover

### Installation
* ```npm install```
* ```bower install```
* ```grunt``` (remember that your vhost should have document root set to ```build/``` directory)

#### Develop
* ```grunt```

If you want to preview production ready application on your local environment, use command:
* ```grunt build --env=local```

#### Build production ready code
* ```grunt build --env=staging``` - it creates production application for staging purposes
* ```grunt build --env=production``` - it creates production application for staging purposes

Every build contains concatenated environment's variables set in ```app.config.js``` file.

### Directory Structure - the most important elements

```
boilerplate-spa/
  |- src/ (all application sources here like images, JS, Sass files, HTML)
  |  |- img/
  |  |- js/
  |  |- scss/
  |  |- templates/
  |  |- test/
  |   - index.html
  |- vendor/ (Third-party libraries, installed by Bower)
  |- app.config.js (contains a JSON object with settings about directories, custom environment's variables)
  |- javascripts.config.js (contains a JSON object with list of all JS files using in app; needs to be edited manually)
```

## Why our boilerplate outperforms competitors?
* saving HTML, JS does not take too much time like in ngBoilerplate (while developing we load real HTML templates and we do not use compiled HTML views by html2js every time - this is done only while ```grunt build --env=ENV``` command)
* Sass support - sorry, in our honest opinion Sass is better than Less and gives more advantages :-)
* new files created in newly created directories are not being watched by Grunt task runner in ngBoilerplate - we have elliminated this issue
* our boilerplate imposes [John Papa's styleguide](https://github.com/johnpapa/angular-styleguide) in Angular code
* you can build production ready app in different environments

As a default, we added to the repository necessary files like robots.txt, basic icons in different icons (thanks to Web Starter Kit) and Web Server Config in .htaccess to reach the highest performance (gzip, caching etc.).

Enjoy coding, using our Boilerplate!
