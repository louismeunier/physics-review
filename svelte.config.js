import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import { mdsvex_config } from './mdsvex.config.js';

export default {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [mdsvex(mdsvex_config), sveltePreprocess()],
};
