# Node js tutorial & information

## What nodejs is

* serer side platorm built on Google Chromes Engine V8
* use event-driven non-blocking I\O model
* perfect for data-intensive realtime apps
* opensource && clossplatform

## Features of nodejs

* async and event driven
* Very fast
* single threaded but very scalable
* no buffering
* MIT licence

## Node subjects

* Debuger
* modules
* console
* cluster 
* addons
* buffer
* callbacks
* crypto
* error handling
* net
* global
* domain
* DNS
* streaming

## Where to use node js

* I/O apps
* data streaming apps
* data intensive real-time apps
* JSON API based applications
* Single page applications

## Node js application parts

* Import required modules
* Create server
* Read request and return response

## REPL terminal

* *read* - read users input, parse the inpit to js data-structure and put it into memory
* *eval* - take the evaluates the data structure
* *print* - print result
* *loop* - lops above comands before user press ctrl-c twice

## npm

Node Package Manager (npm) provide two functionalities:
* online repostories for node.js packages/modules which are searchable
* cmd utility to install node packages, do version and dependency managment

### Installing modules
```npm install <Module name>```  

### Global and local

By default npm install any dependency in the local mode and store it in `node_modules` folder in app project folder. Localy deployed packages are accessible via `require()` method. Globaly installed modules cannot be required directly.

`npm ls` - log all localy installed modules

### module commands

* `uninstall`
* `install`
* `update`
* `search` 
