# Building Blocks | Web Server

This project implements a basic web server for static pages using Node.js and Express.  It can be used as a starting point for more sophisticated web servers.

Just for fun, the included HTML pages use Bootstrap to make things look a little nicer.

## Prerequisites

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)

Node.js [downloads](https://nodejs.org/en/download/) include npm.

To check installed versions, run `node -v` and `npm -v`.

## Install Dependencies

Run `npm install` for package.json dependencies.

## Start Server

The current configuration uses port 80, the default for HTTP, so you'll probably need to run `sudo npm start` (or `sudo node server.js`).

You can switch to a different port if you'd rather not use `sudo`, in which case you can run `npm start` (or `node server.js`).

## Access

Assuming port 80:

http://localhost/

Otherwise:

http://localhost:port/

For example, assuming port 65535:

http://localhost:65535/

## Stop Server

`Control+C`

