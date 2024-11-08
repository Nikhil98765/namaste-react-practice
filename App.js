import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * <div id="parent">
 *  <div id="child1">
 *    <h1>I am an h1 tag</h1>
 *    <h2>I am an h2 tag</h2>
 *  </div>
 * </div>
 */

const parent = React.createElement('div', {id: 'parent'},
  [
    React.createElement('div', { id: 'child1'}, [
      React.createElement('h1', {}, 'I am an h123 tag'),
      React.createElement('h2', {}, "I'm an h2 tag")
    ]),
    React.createElement('div', { id: 'child2'}, [
      React.createElement('h1', {}, 'I am an h1 tag'),
      React.createElement('h2', {}, "I'm an h2 tag")
    ])
  ]
)
console.log("🚀 ~ parent:", parent)


// Creates an object of type reactElement
const heading = React.createElement('h1', {
  id: 'heading',
  prop: 'abc'
}, "Hello world from React!");


const root = ReactDOM.createRoot(document.getElementById('root'));

// Converts the passed reactElement into browser node and append it to root
root.render(parent);
