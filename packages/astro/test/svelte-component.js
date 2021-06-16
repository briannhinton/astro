import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { setup } from './helpers.js';
import { doc } from './test-utils.js';

const Svelte = suite('Svelte Components');

setup(Svelte, './fixtures/svelte-component');

Svelte('onMount works', async ({ runtime }) => {
  const result = await runtime.load('/');
  if (result.error) throw new Error(result.error);

  const $ = doc(result.contents);
  console.log($.html());
});

Svelte.run();
