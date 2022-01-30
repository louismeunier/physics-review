import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

export default {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [mdsvex(), sveltePreprocess()],
};
