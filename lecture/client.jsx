 //npm에 설치한 리액트와 리액트 돔을 불러올 수 있다.
const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay');

ReactDom.render(<WordRelay />, document.querySelector('#root'));

