import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { setup } from './helpers.js';
import { doc } from './test-utils.js';

const React = suite('React Components');

setup(React, './fixtures/react-component');

React('Can load React', async ({ runtime }) => {
  const result = await runtime.load('/');
  if (result.error) throw new Error(result.error);

  const $ = doc(result.contents);
  assert.equal($('#react-h2').text(), 'Hello world!');
  assert.equal($('#arrow-fn-component').length, 1, 'Can use function components');
});

React('Can load Vue', async ({ runtime }) => {
  const result = await runtime.load('/');
  if (result.error) throw new Error(result.error);

  const $ = doc(result.contents);
  assert.equal($('#vue-h2').text(), 'Hasta la vista, baby');
});

React('Get good error message when react import is forgotten', async ({ runtime }) => {
  const result = await runtime.load('/forgot-import');

  assert.ok(result.error instanceof ReferenceError);
  assert.equal(result.error.message, 'React is not defined');
});

React.run();
