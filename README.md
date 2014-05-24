# Encard

Print cards from your current Jira view more easily.

Inspired by [Pivotal Cards](http://psd.github.io/pivotal-cards/) by [Paul Downey](http://whatfettle.com) .

## Usage

Drag the Encard bookmarklet to you bookmark bar and activate it from the Jira view which holds the items you wish to create cards from.  The bookmarklet and more details can be found [here](https://philhawksworth.github.io/encard)


## Build

Building depends on:

- [Gulp](http://gulpjs.com)
- [Node](http://nodejs.org)
- [npm](http://npmjs.org) (now installed as part standard of Node installation)

Building:

- Chekout this repo 
- install dependancies with `npm install`
- build with `gulp`


## Deploy

Deploying pushes a new build to the gh-pages branch. This uses `git subtree` to just push the `dist` directory.

- `gulp deploy`