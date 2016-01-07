# SPA Boilerplate: HTML5/Angular/Grunt
An opinionated starting point for awesome Single Page Applications. Created and used by the folks at [Bigger Picture](http://www.biggerpicture.agency).

## What is this SPA Boilerplate for?
This SPA Boilerplate is your first step to start building a killer Single Page Application based on Angular. It contains necessary build processes, basic styles and files that every website will contain.
With such a stress (and rightly so) on application performance, we've developed this SPA Boilerplate with speed at its core. You'll get a [Page Speed Insights score](https://developers.google.com/speed/pagespeed/insights/) to be proud of with our minification and compression processes.   

Our SPA Boilerplate is inspired from [Google's Web Starter Kit](https://developers.google.com/web/tools/starter-kit/), [ngBoilerplate](https://github.com/ngbp/ngbp) and [HTML5 boilerplate](https://html5boilerplate.com). Using all their best bits and removing what's weak, this SPA Boilerplate does the job you need.

## Features
* **Sass** (SCSS syntax) compilation to pure, minified CSS (by node-sass)
* based on **Angular.js** framework
* JS files concatenation and minification
* images optimisation
* minified HTML templates compilation to JS
* **live browser reloading**
* ability to build ready application in different environments such as local, staging & production
* based on **Grunt** and **Bower**
* integration with **Karma** and **Jasmine**
* works best with continuous integration/continuous delivery application such as **Jenkins**

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
* ```grunt build --env=staging``` - creates production application for staging purposes
* ```grunt build --env=production``` - creates production application for staging purposes

Every build contains concatenated environment's variables set in ```app.config.js``` file.

### Directory Structure: the most important elements

```
boilerplate-spa/
  |- src/ (all application sources such as images, JS, Sass files & HTML)
  |  |- img/
  |  |- js/
  |  |- scss/
  |  |- templates/
  |  |- test/
  |   - index.html
  |- vendor/ (Third-party libraries, installed by Bower)
  |- app.config.js (contains a JSON object with settings about directories & custom environment variables)
  |- javascripts.config.js (contains a JSON object with a list of all JS files used in app (needs to be edited manually))
```

## The Bigger Picture SPA Boilerplate Rules!
* it's the quickest thing around for saving your HTML & JS: whilst your developing we load real HTML templates and we do not use compiled HTML views by html2js every time - this is done only while ```grunt build --env=ENV``` command)
* Sass support - sorry is you are a Less fan, but we think Sass is the way right now
* new files created in newly created directories are not being watched by Grunt task runner in ngBoilerplate - we have elliminated this issue
* our boilerplate imposes [John Papa's styleguide](https://github.com/johnpapa/angular-styleguide) in Angular code - it allows you to create consistent code, especailly handy when multiple developers are working on the same project
* you can easily inject JS files not only to ```body``` area, but also into ```head``` by **javascripts.config.js**
* you can build production ready app in different environments

By default we've added necessary files like robots.txt, basic icons (thanks to Web Starter Kit), and Web Server Config in .htaccess to reach the highest performance (gzip, caching etc.).

Enjoy coding using Bigger Picture SPA Boilerplate!
