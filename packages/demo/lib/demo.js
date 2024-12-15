'use strict';

module.exports = demo;

const defaults = {
  prefix: 'demo',
  colors: ['red', 'green', 'blue', 'yellow'],
  contents: ['first text', 'second text', 'third text', 'fourth text'],
}

const numCache = {};

function demo({ prefix, colors, contents } = {}) {
  prefix = prefix || defaults.prefix;
  colors = colors || defaults.colors;
  contents = contents || defaults.contents;

  return `
  <style type="text/css'>
    .${prefix}-infographic {
      min-width: 400px;
      font-face: sans-serif;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: center; 
    }
    
    .${prefix}-infographic .item {
      padding: 0.5em;
      background-color: var(--c);
      color: white;
      display: flex;
      flex-direction: row;
    }

    .${prefix}-infographic .number {
      flex-shrink: 0;
      flex-grow: 0;
      font-size: 3em;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5em;
    }
  </style>
  <div class="${prefix}-infographic">
    ${contents.map((content, index) => `<div class="item" style="--c: ${colors[index % colors.length]}">
      <div class="number">${numCache[index] || (numCache[index] = String(index + 1).padStart(2, '0'))}</div>
      <div class="content">${content}</div>
    </div>
    `)}
  </div>
  `;
}
