# Pagelist

[![CakePHP](http://cakephp.org/img/cake-logo.png)](http://www.cakephp.org)

Pagelist combines meteor.js and chrome extension into a centralized history dump.
Useful?  Not really, but so far so good for experimentation.

## Sources

[Extensions](https://developer.chrome.com/extensions) - Brief examples of extensions

[Meteor.js](https://www.meteor.com/learn) - Meteor.js tutorial and project homepage

Work is not done yet, still a few ideas lingring in my mind...

Feel free to use anything.

## How-to

I'm not familiar with meteor.js or package management for meteor.js, so here are the steps:

1) install meteor.js - on linux / mac "curl https://install.meteor.com/ | sh"(win has its own package to download)

2) go to server folder

3) install iron-router: "meteor add iron:router"

4) run meteor "meteor"

5) set domain or ip address of your server in /extension/base.js(xxx.xxx.xxx.xxx:3000/api/add)

6) in chrome add extension(in developer mode) - use folder "extension"
