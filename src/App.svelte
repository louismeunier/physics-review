<script lang="ts">
  // router setup
  // all this really does is setup the routes
  // most of the base styles/layout is in src/pages/_layout.svelte and src/assets/globals.scss
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes.js';
</script>

<Router routes="{routes}" />
