/****************** liveload **************/
document.write(
'<script src="http://' + (location.host || 'localhost').split(':')[0] +
':35729/livereload.js?snipver=1"></' + 'script>'
);

/****************** style **************/
import './style/common.css';
import './style/main.css';

/**************** javascrip ************/

import { sayHelloTo } from './modules/mod1';
import addArray from './modules/mod2';

const result1 = sayHelloTo('Jason');
const result2 = addArray([1, 2, 3, 4]);


// Print the results on the page.
const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText = `sayHelloTo('Jason') => ${result1}\n\n`;
printTarget.innerText += `addArray([1, 2, 3, 4]) => ${result2}`;
printTarget.innerText += '<div class="ttp"></div>';