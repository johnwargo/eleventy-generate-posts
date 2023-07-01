#!/usr/bin/env node

/** 
 * Eleventy Generate Posts
 * by John M. Wargo (https://johnwargo.com)
 * Created May 9, 2023
 */

// node modules
import fs from 'fs-extra';
import path from 'path';

// Third-party modules
import boxen from 'boxen';
import chalk from 'chalk';
import prompts from 'prompts';
import YAML from 'yaml'
//@ts-ignore
import logger from 'cli-logger';
var log = logger();

enum HighlightType {
  Red, Yellow, Green
}

type Frontmatter = {
  title: string;
  date: string;
  tags: string;
}

// ====================================
// Constants and Variables
// ====================================

const APP_NAME = '11ty Generate Posts';
const APP_AUTHOR = 'by John M. Wargo (https://johnwargo.com)\n';
const ELEVENTY_FILES = ['.eleventy.js', 'eleventy.config.js'];
const NEW_LINE = "\n";
const spaces40 = '-'.repeat(40);

const red = HighlightType.Red;
const yellow = HighlightType.Yellow;
const green = HighlightType.Green;

var numPosts: number;
var startYear: number;
var tag: string;
var targetFolder: string;
var yearMode: boolean;

// ====================================
// Functions
// ====================================

function zeroPad(tmpVal: number, numChars: number = 2): string {
  return tmpVal.toString().padStart(numChars, '0');
}

function directoryExists(filePath: string): boolean {
  if (fs.existsSync(filePath)) {
    try {
      return fs.lstatSync(filePath).isDirectory();
    } catch (err) {
      log.error(`checkDirectory error: ${err}`);
      return false;
    }
  }
  return false;
}

function writeConsole(color: HighlightType, highlightText: string, msg: string) {
  if (color == HighlightType.Red) console.log(NEW_LINE + chalk.red(`${highlightText}: `) + msg + NEW_LINE);
  if (color == HighlightType.Yellow) console.log(chalk.yellow(`${highlightText}: `) + msg);
  if (color == HighlightType.Green) console.log(chalk.green(`${highlightText}: `) + msg);
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

function checkEleventyProject(): boolean {
  log.debug('Validating project folder');
  let result = false;
  ELEVENTY_FILES.forEach((file) => {
    let tmpFile = path.join(process.cwd(), file);
    if (fs.existsSync(tmpFile)) {
      result = true;
    }
  });
  return result;
}

// ====================================
// Start Here!
// ====================================

// is it an Eleventy project?
if (!checkEleventyProject()) {
  log.error('Current folder is not an Eleventy project folder.');
  process.exit(1);
}

console.log(boxen(APP_NAME, { padding: 1 }));
console.log(APP_AUTHOR);

const debugMode = process.argv.includes('-d');
if (debugMode) {
  // console.log('Debug mode enabled\n');
  writeConsole(green, 'Debug mode', 'enabled\n');
}
log.level(debugMode ? log.DEBUG : log.INFO);

const questions: any[] = [
  {
    type: 'text',
    name: 'targetFolder',
    initial: 'src/posts',
    message: 'Target folder for generated posts?'
  },
  {
    type: 'number',
    name: 'numPosts',
    initial: 10,
    message: 'Number of posts to generate?'
  },
  {
    type: 'text',
    name: 'tag',
    message: 'Post tag?',
    initial: 'post'
  },
  {
    type: 'number',
    name: 'startYear',
    initial: new Date().getFullYear(),
    message: 'Start year for generated posts?'
  },
  {
    type: 'confirm',
    name: 'yearMode',
    initial: true,
    message: 'Use year folder for posts?'
  },
];

const response = await prompts(questions);
targetFolder = response.targetFolder;
numPosts = response.numPosts;
startYear = response.startYear;
tag = response.tag;
yearMode = response.yearMode;

console.log('\nSettings Summary:' );
console.log(spaces40);
writeConsole(yellow, 'Number of posts', numPosts.toString());
writeConsole(yellow, 'Target Folder', targetFolder);
writeConsole(yellow, 'Start Year', startYear.toString());
writeConsole(yellow, 'Tag', tag);
writeConsole(yellow, 'Year mode', yearMode ? 'enabled' : 'disabled');

if (!(numPosts > 0 && numPosts < 101)) {
  writeConsole(red, 'Error', 'Number of posts must be between 1 and 100');
  process.exit(1);
}

var outputFilePath = path.join(process.cwd(), targetFolder);
writeConsole(yellow, 'Output folder', outputFilePath);
if (!directoryExists(outputFilePath)) {
  writeConsole(red, 'Error', 'Output folder does not exist');
  process.exit(1);
}

console.log('\nGenerating posts...');
console.log(spaces40);

// Pick a start date for the posts
var currentDate = new Date();
// Change the year if we have one on the command line
if (startYear) currentDate.setFullYear(startYear);

numPosts++; // keeps me from doing math in the for loop
for (let i = 1; i < numPosts; i++) {
  // generate the post title
  log.debug('\nGetting random words (this may take a few seconds)');
  let wordCount = getRandomInt(4) + 3;
  let letTitleRes: Response = await fetch(`https://random-word-api.vercel.app/api?words=${wordCount}`);
  let titleWords = await letTitleRes.json();
  titleWords = titleWords.map((a: any) => a.charAt(0).toUpperCase() + a.substr(1));
  let postTitle = titleWords.join(' ');
  log.debug(`Post title: ${postTitle}`);

  // generate post date
  currentDate.setDate(currentDate.getDate() - getRandomInt(20));
  let postDate = `${currentDate.getFullYear()}-${zeroPad(currentDate.getMonth() + 1)}-${zeroPad(currentDate.getDate())}`;
  log.debug(`Post date: ${postDate}`);

  // create the frontmatter
  var postFm: Frontmatter = {
    title: postTitle,
    date: postDate,
    tags: tag
  };

  // get the post content
  log.debug('Getting bacon ipsum text (this may take a few seconds)...');
  let response: Response = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=${getRandomInt(10)}&start-with-lorem=1`);
  let postContent = await response.json();
  log.debug(`Post content: ${postContent}`);

  // create the post
  var thePost = '---\n';
  thePost += YAML.stringify(postFm, { logLevel: 'silent' });
  thePost += '---\n\n';
  thePost += postContent.join('\n\n');

  // write the post to the target folder
  var outputFilePath = path.join(process.cwd(), targetFolder);
  if (yearMode) {
    outputFilePath = path.join(outputFilePath, currentDate.getFullYear().toString());
    if (!fs.existsSync(outputFilePath)) fs.mkdirSync(outputFilePath, { recursive: true });
  }
  var outputFilePath = path.join(outputFilePath, postTitle.toLowerCase().replaceAll(' ', '-') + '.md');
  writeConsole(green, 'Writing', outputFilePath);
  fs.writeFileSync(outputFilePath, thePost, 'utf8');
}
