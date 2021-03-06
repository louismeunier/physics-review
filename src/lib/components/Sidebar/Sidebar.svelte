<script lang="ts">
  import constants from '../../utils/constants';

  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  import Menu from '../icons/Menu.svelte';
  import SidebarSection from './SidebarSection.svelte';
  import SidebarItem from './SidebarItem.svelte';
  import Footer from '../Footer.svelte';

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

  onMount(() => {
    document.addEventListener('keydown', key => {
      if (key.code === 'Escape' && visible === true) {
        toggleSidebar();
      }
      if (
        key.code === 'Enter' &&
        document.activeElement ===
          document.getElementsByClassName('sidebar-wrapper')[0]
      ) {
        toggleSidebar();
      }
    });
  });
</script>

<div class="sidebar-wrapper" tabindex="-1">
  <div bind:this="{toggleElem}" class="toggle" on:click="{toggleSidebar}">
    <Menu />
  </div>
  {#if visible}
    <div class="sidebar" transition:fly="{{ duration: 500, x: -400 }}">
      <SidebarSection>
        <SidebarItem path="/" name="Home" />
        <SidebarItem path="/about" name="About" />
        <SidebarItem
          path="{constants.GITHUB}"
          isExternal="{true}"
          name="Source"
        />
      </SidebarSection>
      <SidebarSection>
        <SidebarItem path="/review/kinematics" name="Kinematics" />
        <SidebarItem path="/review/dynamics" name="Dynamics" />
        <SidebarItem path="/review/work&energy" name="Work and Energy" />
        <SidebarItem path="/review/momentum" name="Momentum" />
        <SidebarItem path="/review/rotation" name="Rotations" />
      </SidebarSection>
      <Footer />
    </div>
  {/if}
  <div
    style="display: {visible ? 'flex' : 'none'}"
    on:click="{() => {
      visible && toggleSidebar();
    }}"
    class="off-focus"
  ></div>
</div>

<style>
  .sidebar-wrapper {
    left: 0;
    display: flex;
    width: 100vw;
    white-space: nowrap;
    height: 100vh;
    flex-direction: column;
    align-items: baseline;
    overflow-y: auto;
    overflow-x: hidden;
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
    min-height: calc(100vh - 50px);
    height: fit-content;
    padding-top: 50px;
    border-right: 2px solid var(--text-color);
    z-index: 100;
  }

  .off-focus {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
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
