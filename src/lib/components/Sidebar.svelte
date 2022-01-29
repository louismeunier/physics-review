<script lang="ts">
  import Menu from './icons/Menu.svelte';
  import { fly } from 'svelte/transition';
  import SidebarSection from './SidebarSection.svelte';
  import SidebarItem from './SidebarItem.svelte';

  let visible = false;
  let toggleElem: HTMLElement;
  let rotate: NodeJS.Timeout;
  let i = 0;

  const toggleSidebar = () => {
    clearInterval(rotate);
    visible = !visible;
    rotate = setInterval(() => {
      visible ? (i += 2) : (i -= 2);
      toggleElem.style.transform = `rotate(${i}deg)`;
      if (i % 180 == 0) {
        clearInterval(rotate);
      }
    }, 4);
  };
</script>

<div class="sidebar-wrapper">
  <div bind:this="{toggleElem}" class="toggle" on:click="{toggleSidebar}">
    <Menu />
  </div>
  {#if visible}
    <div class="sidebar" transition:fly="{{ duration: 400, x: -400 }}">
      <SidebarSection>
        <SidebarItem path="/" name="Home" />
        <SidebarItem path="/" name="Home" />
        <SidebarItem path="/about" name="About" />
      </SidebarSection>
    </div>
  {/if}
</div>

<style>
  .sidebar-wrapper {
    left: 0;
    display: flex;
    min-width: 25vw;
    width: fit-content;
    height: 100vh;
    flex-direction: column;
    align-items: baseline;
    position: absolute;
    overflow: auto;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: var(--sub-color);
    left: 0;
    bottom: 0;
    top: 0;
    min-width: 20vw;
    width: fit-content;
    min-height: calc(100vh - 50px);
    height: fit-content;
    /* padding-right: 5px; */
    padding-top: 50px;
  }

  .toggle :global(svg) {
    stroke: var(--text-color);
    height: 45px;
  }

  .toggle {
    z-index: 1000;
    transform-origin: center center;
  }

  .toggle:hover {
    cursor: pointer;
  }
</style>
