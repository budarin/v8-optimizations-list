/* eslint-disable */

const docElement = document.getElementById('code');

function writeLog(text) {
    var log = document.createElement('div');
    log.innerHTML = text;
    docElement.appendChild(log);
}

function benchSetTitle(text) {
    const h3 = document.getElementsByTagName('h3');
    if (h3.length) {
        h3[0].textContent = text;
    }
}

var suite = new Benchmark.Suite('checking the occurrence of a substring in a string');

suite
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
    .on('cycle', function (event) {
        writeLog(event.target);
        console.log(String(event.target));
    })
    .on('error', (event) => {
        console.error('test case No:', event.target.id);
        console.error('error', event.target.error);
    })
    .on('complete', function () {
        writeLog('<div>&nbsp;</div>');

        const theFastest = this.filter('fastest').map('name');
        writeLog('Fastest is <b style="color: blue">' + theFastest + '</b>');

        console.log('Fastest is ' + theFastest);
    })
    // run async
    .run({ async: true });
