/**
 * What is NPM(Node Package Manager)
 * Ans: NPM(Node Package Manager) is the package manager for node.js used to
 * install dependencies
 * remove dependencies
 * run scripts
 * share and version package
 */

/**
 * Most Popular NPM Commands
 * npm init --> initialize a package.json file
 * npm i --> install third party package
 * npm uninstall --> remove a dependencies or devdependencies
 */

/**
 * Dependencies: packages required to run application in production
 * DevDependencies: packages required to run application for development purpose only
 */

import express from "express";
const app = express();
const port = 3000;
app.listen(
  (port,
  () => {
    console.log(`server is listening at ${port}`);
  }),
);
