const fs = require('fs');
const path = require('path');

/** 
 * Create a directory with the given path
 * @path path
 */
exports.createDir = (path) => !fs.existsSync(path) ? fs.mkdirSync(path) : true;

/**
 * List directories in the given path
 * @dirPath path
 */
exports.listDirs = (dirPath) => fs.readdirSync(dirPath).filter((filePath) => {
  return fs.statSync(path.join(dirPath, filePath)).isDirectory();
});

/**
 * List files located in the given path
 * @path path
 */
exports.listFiles = (dirPath) => fs.readdirSync(dirPath).filter((filePath) => {
  return !fs.statSync(path.join(dirPath, filePath)).isDirectory();
});

/**
 * List all resources located at the given path
 * @path path
 */
exports.listResources = (path) => fs.readdirSync(path);
