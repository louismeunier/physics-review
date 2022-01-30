<script lang="ts">
  import { onMount } from 'svelte';
  import {
    toggleSiteTheme,
    getSiteTheme,
    getSiteThemePreference,
    setSiteTheme,
  } from '../lib/utils/theme';

  import Moon from '../lib/components/icons/Moon.svelte';
  import Sun from '../lib/components/icons/Sun.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import Sidebar from '../lib/components/Sidebar/Sidebar.svelte';

  onMount(() => {
    setSiteTheme(getSiteThemePreference());
  });

  let currentTheme = getSiteTheme() || 'dark';

  function toggleTheme() {
    toggleSiteTheme();
    currentTheme = currentTheme == 'light' ? 'dark' : 'light';
    console.log(currentTheme);
  }
</script>

<div class="layout">
  <Sidebar />
  <div class="fake-button" on:click="{toggleTheme}">
    {#if currentTheme == 'light'}
      <Moon />
    {:else}
      <Sun />
    {/if}
  </div>
  <slot />
  <Footer />
</div>

<style>
  .layout {
    /* width: 100vw; */
    height: 100vh;
    display: grid;
    grid-template-columns: minmax(0, 2em) 1fr minmax(0, 2em);
    grid-template-rows: 1fr auto;
    grid-template-areas:
      'main'
      'footer';
    overflow: hidden;
  }

  .layout :global(.content) {
    grid-column-start: 2;
    grid-column-end: 4;
    overflow-y: auto;
  }

  .fake-button {
    border: none;
    position: fixed;
    right: 0;
    top: 0;
    margin: 0;
    background: transparent;
    height: 55px;
    width: 55px;
  }

  .fake-button:hover {
    cursor: pointer;
  }
</style>
