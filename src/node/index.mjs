/* eslint-disable */
import chalk from 'chalk';
import Benckmark from 'benchmark';
import { randomBytes } from 'crypto';

var ulidSuite = new Benckmark.Suite('String: checking the occurrence of a substring in a string');
// add tests
ulidSuite
    .add('RegExp.test', function () {
        return /o/.test('Hello World!');
    })
    .add('String.indexOf', function () {
        return 'Hello World!'.indexOf('o') > -1;
    })
    .add('String.includes', function () {
        return 'Hello World!'.includes('o');
    })
    .add('String.match', function () {
        return !!'Hello World!'.match(/o/);
    })

    // add listeners
    .on('start', function (event) {
        console.log('\nTest:', chalk.yellow(this.name), '\n');
    })
    .on('error', function (event) {
        console.log('\n', event.target.error, '\n');
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('\nFastest is:', this.filter('fastest').map('name'), '\n');
    })
    // run async
    .run({ async: true });
