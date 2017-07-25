import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider';
import './index.less'
const IMAGES = [
  {src: require('./images/1.jpg')},
  {src: require('./images/2.jpg')},
  {src: require('./images/3.jpg')}
]
/**
 * 1.自动轮播
 */
ReactDOM.render(<Slider images={IMAGES}/>,document.querySelector('#root'));
